// Pure helpers of the native updater: version compare and SHA-256 check.
// They use only std and sha2, so they can be unit-tested on any host.

use sha2::{Digest, Sha256};
use std::io::Read;

/// Parses "1.2.0" (an optional leading "v", and any "-pre"/"+build" suffix ignored) into numbers.
fn parse_version(v: &str) -> Option<Vec<u64>> {
    let v = v.trim().trim_start_matches(['v', 'V']);
    let core = v.split(['-', '+']).next().unwrap_or("");
    if core.is_empty() {
        return None;
    }
    core.split('.').map(|p| p.parse::<u64>().ok()).collect()
}

/// True when `latest` is a strictly newer version than `current` (missing parts count as 0).
/// An unreadable version is never newer.
pub fn is_newer(latest: &str, current: &str) -> bool {
    let (Some(a), Some(b)) = (parse_version(latest), parse_version(current)) else {
        return false;
    };
    for i in 0..a.len().max(b.len()) {
        let (x, y) = (a.get(i).copied().unwrap_or(0), b.get(i).copied().unwrap_or(0));
        if x != y {
            return x > y;
        }
    }
    false
}

/// A valid SHA-256 written as 64 hex digits, lower-cased.
pub fn normalize_sha256(s: &str) -> Option<String> {
    let s = s.trim().to_ascii_lowercase();
    (s.len() == 64 && s.bytes().all(|c| c.is_ascii_hexdigit())).then_some(s)
}

pub fn to_hex(bytes: &[u8]) -> String {
    bytes.iter().map(|b| format!("{b:02x}")).collect()
}

/// SHA-256 of everything `r` yields, as lower-case hex.
pub fn sha256_hex<R: Read>(mut r: R) -> std::io::Result<String> {
    let mut h = Sha256::new();
    let mut buf = vec![0u8; 64 * 1024];
    loop {
        let n = r.read(&mut buf)?;
        if n == 0 {
            break;
        }
        h.update(&buf[..n]);
    }
    Ok(to_hex(&h.finalize()))
}

/// True only when `actual` and `expected` are both valid SHA-256 values and equal.
pub fn hash_matches(actual: &str, expected: &str) -> bool {
    match (normalize_sha256(actual), normalize_sha256(expected)) {
        (Some(a), Some(e)) => a == e,
        _ => false,
    }
}

/// True when the file at `path` has exactly the SHA-256 `expected`.
pub fn file_hash_matches(path: &std::path::Path, expected: &str) -> bool {
    match std::fs::File::open(path).and_then(sha256_hex) {
        Ok(actual) => hash_matches(&actual, expected),
        Err(_) => false,
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn newer_versions() {
        assert!(is_newer("1.2.0", "1.1.0"));
        assert!(is_newer("1.10.0", "1.9.9"));
        assert!(is_newer("2.0", "1.99.99"));
        assert!(is_newer("1.2.1", "1.2"));
        assert!(is_newer("v1.3.0", "1.2.0"));
        assert!(!is_newer("1.2.0", "1.2.0"));
        assert!(!is_newer("1.2", "1.2.0"));
        assert!(!is_newer("1.1.9", "1.2.0"));
        assert!(!is_newer("1.0.0", "1.2.0"));
        assert!(!is_newer("", "1.2.0"));
        assert!(!is_newer("abc", "1.2.0"));
        assert!(!is_newer("1.x.0", "1.2.0"));
        assert!(!is_newer("1.3.0", "garbage"));
        assert!(is_newer("1.3.0-beta", "1.2.0"));
    }

    #[test]
    fn sha256_known_values() {
        assert_eq!(
            sha256_hex(&b""[..]).unwrap(),
            "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"
        );
        assert_eq!(
            sha256_hex(&b"abc"[..]).unwrap(),
            "ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad"
        );
        // more than one read buffer
        let big = vec![7u8; 200_000];
        let one = { let mut h = Sha256::new(); h.update(&big); to_hex(&h.finalize()) };
        assert_eq!(sha256_hex(&big[..]).unwrap(), one);
    }

    #[test]
    fn hash_check() {
        let abc = "ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad";
        assert!(hash_matches(abc, abc));
        assert!(hash_matches(abc, &abc.to_uppercase()));
        assert!(hash_matches(abc, &format!(" {abc}\n")));
        assert!(!hash_matches(abc, "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"));
        assert!(!hash_matches(abc, ""));
        assert!(!hash_matches("", ""));
        assert!(!hash_matches(&abc[..63], &abc[..63]));
        assert!(!hash_matches("zz".repeat(32).as_str(), "zz".repeat(32).as_str()));

        let dir = std::env::temp_dir().join(format!("gtn-hash-test-{}", std::process::id()));
        std::fs::create_dir_all(&dir).unwrap();
        let f = dir.join("x.bin");
        std::fs::write(&f, b"abc").unwrap();
        assert!(file_hash_matches(&f, abc));
        std::fs::write(&f, b"abd").unwrap();
        assert!(!file_hash_matches(&f, abc));
        assert!(!file_hash_matches(&dir.join("missing"), abc));
        let _ = std::fs::remove_dir_all(&dir);
    }
}
