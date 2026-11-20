import com.android.apksig.ApkSigner;
import com.android.apksig.ApkVerifier;

import java.io.File;
import java.io.FileInputStream;
import java.security.KeyStore;
import java.security.PrivateKey;
import java.security.cert.X509Certificate;
import java.util.Collections;

/** Signs an APK with a v2 signature (enough for Android 7 and later) using Google's apksig, then verifies it. Run with: java -cp apksig.jar Sign.java in out keystore PASSWORD_ENV_VAR_NAME */
public class Sign {
    public static void main(String[] a) throws Exception {
        KeyStore ks = KeyStore.getInstance("PKCS12");
        try (FileInputStream in = new FileInputStream(a[2])) { ks.load(in, System.getenv(a[3]).toCharArray()); }
        String alias = ks.aliases().nextElement();
        PrivateKey key = (PrivateKey) ks.getKey(alias, System.getenv(a[3]).toCharArray());
        X509Certificate cert = (X509Certificate) ks.getCertificate(alias);
        ApkSigner.SignerConfig cfg = new ApkSigner.SignerConfig.Builder("GTN", key, Collections.singletonList(cert)).build();
        new ApkSigner.Builder(Collections.singletonList(cfg))
            .setInputApk(new File(a[0])).setOutputApk(new File(a[1]))
            .setV1SigningEnabled(false).setV2SigningEnabled(true).build().sign(); // v2 only: every supported device (Android 7+) checks v2
        ApkVerifier.Result r = new ApkVerifier.Builder(new File(a[1])).build().verify();
        System.out.println("verified=" + r.isVerified() + " v1=" + r.isVerifiedUsingV1Scheme() + " v2=" + r.isVerifiedUsingV2Scheme() + " errors=" + r.getErrors() + " warnings=" + r.getWarnings());
        if (!r.isVerified()) System.exit(1);
    }
}
