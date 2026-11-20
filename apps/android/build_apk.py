#!/usr/bin/env python3
"""Build the GetToolNest Android APK without the Android SDK.

Writes the binary AndroidManifest.xml and resources.arsc directly, compiles the Java source
against an Android framework jar, converts it to dex with dx, packs a zip with resources.arsc
stored and 4-byte aligned, and signs it (APK signature scheme v2) with Google's apksig.

Usage: GTN_STOREPASS=... build_apk.py <android.jar> <dx.jar> <apksig.jar> <keystore> <out.apk>
Resource IDs used below were checked against the framework resources.arsc (Android 14).
"""
import os, shutil, struct, subprocess, sys, tempfile, zipfile, zlib

HERE = os.path.dirname(os.path.abspath(__file__))
ANDROID_JAR, DX_JAR, APKSIG_JAR, KEYSTORE, OUT = sys.argv[1:6]
STOREPASS = 'GTN_STOREPASS'  # name of the environment variable that holds the keystore password
PACKAGE, VERSION_CODE, VERSION_NAME = 'xyz.gettoolnest.app', 1, '1.0'
MIN_SDK, TARGET_SDK = 24, 34
ICON_ID = 0x7f010000  # mipmap/ic_launcher, defined in the resources.arsc built below

# ---------------------------------------------------------------- string pools
def string_pool(strings):
    """UTF-16 ResStringPool chunk."""
    data, offsets = b'', []
    for s in strings:
        offsets.append(len(data))
        u = s.encode('utf-16-le')
        data += struct.pack('<H', len(s)) + u + b'\0\0'
    data += b'\0' * (-len(data) % 4)
    header = 28
    strings_start = header + 4 * len(strings)
    size = strings_start + len(data)
    return struct.pack('<HHIIIIII', 0x0001, header, size, len(strings), 0, 0, strings_start, 0) + \
        b''.join(struct.pack('<I', o) for o in offsets) + data

def chunk(type_, header_rest, body, header_size=None):
    hs = header_size or (8 + len(header_rest))
    return struct.pack('<HHI', type_, hs, hs + len(body)) + header_rest + body

# ---------------------------------------------------------------- binary manifest
ANDROID_NS = 'http://schemas.android.com/apk/res/android'
ATTR_IDS = {  # android:attr IDs, from the framework resources.arsc
    'theme': 0x01010000, 'label': 0x01010001, 'icon': 0x01010002, 'name': 0x01010003, 'exported': 0x01010010,
    'launchMode': 0x0101001d, 'configChanges': 0x0101001f, 'minSdkVersion': 0x0101020c, 'versionCode': 0x0101021b,
    'versionName': 0x0101021c, 'windowSoftInputMode': 0x0101022b, 'targetSdkVersion': 0x01010270,
    'allowBackup': 0x01010280, 'hardwareAccelerated': 0x010102d3, 'supportsRtl': 0x010103af,
    'usesCleartextTraffic': 0x010104ec, 'roundIcon': 0x0101052c,
}
THEME_MATERIAL_LIGHT_NOACTIONBAR = 0x01030241
STR, INT, HEX, BOOL, REF = 0x03, 0x10, 0x11, 0x12, 0x01
# orientation|keyboard|keyboardHidden|screenLayout|uiMode|screenSize|smallestScreenSize|density
CONFIG_CHANGES = 0x80 | 0x10 | 0x20 | 0x100 | 0x200 | 0x400 | 0x800 | 0x1000

TREE = ('manifest', [(None, 'package', STR, PACKAGE), ('a', 'versionCode', INT, VERSION_CODE), ('a', 'versionName', STR, VERSION_NAME)], [
    ('uses-sdk', [('a', 'minSdkVersion', INT, MIN_SDK), ('a', 'targetSdkVersion', INT, TARGET_SDK)], []),
    ('uses-permission', [('a', 'name', STR, 'android.permission.INTERNET')], []),
    ('application', [('a', 'theme', REF, THEME_MATERIAL_LIGHT_NOACTIONBAR), ('a', 'label', STR, 'GetToolNest'), ('a', 'icon', REF, ICON_ID),
                     ('a', 'allowBackup', BOOL, True), ('a', 'hardwareAccelerated', BOOL, True), ('a', 'supportsRtl', BOOL, True),
                     ('a', 'usesCleartextTraffic', BOOL, False), ('a', 'roundIcon', REF, ICON_ID)], [
        ('activity', [('a', 'name', STR, PACKAGE + '.MainActivity'), ('a', 'exported', BOOL, True), ('a', 'launchMode', INT, 2),
                      ('a', 'configChanges', HEX, CONFIG_CHANGES), ('a', 'windowSoftInputMode', HEX, 0x10)], [
            ('intent-filter', [], [
                ('action', [('a', 'name', STR, 'android.intent.action.MAIN')], []),
                ('category', [('a', 'name', STR, 'android.intent.category.LAUNCHER')], []),
            ]),
        ]),
    ]),
])

def build_manifest():
    # Attribute names that have resource IDs go first in the pool, in the same order as the resource map.
    used = []
    def walk(node):
        tag, attrs, kids = node
        for ns, name, *_ in attrs:
            if ns and name not in used: used.append(name)
        for k in kids: walk(k)
    walk(TREE)
    used.sort(key=lambda n: ATTR_IDS[n])
    strings = list(used)
    def sidx(s):
        if s not in strings: strings.append(s)
        return strings.index(s)
    for s in ('android', ANDROID_NS): sidx(s)
    body = []
    NO = 0xFFFFFFFF
    def element(node):
        tag, attrs, kids = node
        enc = []
        for ns, name, typ, val in sorted(attrs, key=lambda a: ATTR_IDS.get(a[1], 0) if a[0] else 0):
            ns_i = sidx(ANDROID_NS) if ns else NO
            if typ == STR: raw, data = sidx(val), sidx(val)
            elif typ == BOOL: raw, data = NO, 0xFFFFFFFF if val else 0
            else: raw, data = NO, val
            enc.append(struct.pack('<IIIHBBI', ns_i, sidx(name), raw, 8, 0, typ, data))
        ext = struct.pack('<IIHHHHHH', NO, sidx(tag), 20, 20, len(enc), 0, 0, 0)
        body.append(chunk(0x0102, struct.pack('<II', 1, NO), ext + b''.join(enc)))
        for k in kids: element(k)
        body.append(chunk(0x0103, struct.pack('<II', 1, NO), struct.pack('<II', NO, sidx(tag))))
    ns_start = chunk(0x0100, struct.pack('<II', 1, NO), struct.pack('<II', sidx('android'), sidx(ANDROID_NS)))
    element(TREE)
    ns_end = chunk(0x0101, struct.pack('<II', 1, NO), struct.pack('<II', sidx('android'), sidx(ANDROID_NS)))
    resmap = chunk(0x0180, b'', b''.join(struct.pack('<I', ATTR_IDS[n]) for n in used))
    inner = string_pool(strings) + resmap + ns_start + b''.join(body) + ns_end
    return chunk(0x0003, b'', inner)

# ---------------------------------------------------------------- resources.arsc (one icon)
ICON_PATH = 'res/mipmap/ic_launcher.png'
def build_arsc():
    values = string_pool([ICON_PATH])
    types = string_pool(['mipmap'])
    keys = string_pool(['ic_launcher'])
    spec = chunk(0x0202, struct.pack('<BBHI', 1, 0, 0, 1), struct.pack('<I', 0))
    config = struct.pack('<I', 64) + b'\0' * 60  # default configuration
    entries = struct.pack('<I', 0)  # offset of entry 0
    entry = struct.pack('<HHI', 8, 0, 0) + struct.pack('<HBBI', 8, 0, STR, 0)  # key 0 -> string 0 of the value pool
    type_header = struct.pack('<BBHII', 1, 0, 0, 1, 8 + 12 + 64 + 4) + config
    typ = struct.pack('<HHI', 0x0201, 8 + 12 + 64, 8 + 12 + 64 + len(entries) + len(entry)) + type_header + entries + entry
    name = PACKAGE.encode('utf-16-le').ljust(256, b'\0')
    pkg_header_size = 288
    type_strings_off = pkg_header_size
    key_strings_off = type_strings_off + len(types)
    pkg_head = struct.pack('<I', 0x7f) + name + struct.pack('<IIIII', type_strings_off, 1, key_strings_off, 1, 0)
    pkg = chunk(0x0200, pkg_head, types + keys + spec + typ, header_size=pkg_header_size)
    return chunk(0x0002, struct.pack('<I', 1), values + pkg)

# ---------------------------------------------------------------- compile, dex, pack, sign
def run(*cmd):
    subprocess.run(cmd, check=True)

def main():
    work = tempfile.mkdtemp()
    classes = os.path.join(work, 'classes'); os.makedirs(classes)
    src = [os.path.join(dp, f) for dp, _, fs in os.walk(os.path.join(HERE, 'src')) for f in fs if f.endswith('.java')]
    run('javac', '--release', '8', '-nowarn', '-Xlint:-options', '-classpath', ANDROID_JAR, '-d', classes, *src)
    dex = os.path.join(work, 'classes.dex')
    run('java', '-cp', DX_JAR, 'com.android.dx.command.Main', '--dex', '--min-sdk-version=%d' % MIN_SDK, '--output=' + dex, classes)
    unsigned = os.path.join(work, 'unsigned.apk')
    files = [('AndroidManifest.xml', build_manifest(), True), ('classes.dex', open(dex, 'rb').read(), True),
             ('resources.arsc', build_arsc(), False), (ICON_PATH, open(os.path.join(HERE, 'icon.png'), 'rb').read(), False)]
    with open(unsigned, 'wb') as f:
        write_aligned_zip(f, files)
    signer = os.path.join(HERE, 'Sign.java')
    # apksig 2.3.0 reaches into JDK internals for the v1 (JAR) signature
    opens = [f for m in ('sun.security.x509', 'sun.security.pkcs', 'sun.security.util') for f in ('--add-exports', 'java.base/%s=ALL-UNNAMED' % m)]
    run('java', *opens, '-cp', APKSIG_JAR, signer, unsigned, OUT, KEYSTORE, STOREPASS)
    shutil.rmtree(work)

def write_aligned_zip(f, files):
    """A plain zip writer that keeps stored entries 4-byte aligned, like zipalign -p 4."""
    central, offset = b'', 0
    for name, data, deflate in files:
        n = name.encode()
        crc = zlib.crc32(data) & 0xffffffff
        if deflate:
            co = zlib.compressobj(9, zlib.DEFLATED, -15); body = co.compress(data) + co.flush(); method = 8
        else:
            body = data; method = 0
        extra = b''
        if method == 0:
            pad = (-(offset + 30 + len(n))) % 4
            extra = b'\0' * pad
        local = struct.pack('<IHHHHHIIIHH', 0x04034b50, 20, 0, method, 0, 0x21, crc, len(body), len(data), len(n), len(extra)) + n + extra
        f.write(local + body)
        central += struct.pack('<IHHHHHHIIIHHHHHII', 0x02014b50, 20, 20, 0, method, 0, 0x21, crc, len(body), len(data), len(n), 0, 0, 0, 0, 0, offset) + n
        offset += len(local) + len(body)
    f.write(central + struct.pack('<IHHHHIIH', 0x06054b50, 0, 0, len(files), len(files), len(central), offset, 0))

if __name__ == '__main__':
    main()
