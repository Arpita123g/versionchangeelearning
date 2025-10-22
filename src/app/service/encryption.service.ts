import { Injectable } from '@angular/core';
import * as forge from 'node-forge';

@Injectable({
  providedIn: 'root'
})
export class EncryptionService {
  private iv: string = forge.util.decode64('uNX+wSNy+PKTDNYqFVOwKg==');

  constructor() {}

  encrypt(data: string) {
    const publicKeyPem = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAyvKp4zv5YkhtyGVTqNhT
hGjybIMrfBvYPAU8ycOU/0qAWbPztNAxZDnR6icTURBhKRucc/gouw2WzaXWXFzL
ob4QjzwK28L+kPefAfj/bi3gv/DM9GY2d7EogP469SPpmSVjw7g7MaAnTgVUkLSl
DII92hTvloNEmTGsPgNxbB68S4zYRR/Q3T4+Qcw7TT19hGuaX/gGZ7zUZHKQwrYD
wymKQ0imYNPa8KNCQHxegAyY6CdwNxNCyj6SHuOy2yfutYxSlRcGEObLs01DXre0
4yVn/+hcu2mKkd7Rc7lC6WEdxFk4Bo4vU5LEYDzz/BrjAKErYM+viKyrhnuBsB0E
HwIDAQAB
-----END PUBLIC KEY-----`;

    const publicKey = forge.pki.publicKeyFromPem(publicKeyPem);
    const aesKey = forge.random.getBytesSync(32);
    const encryptedAesKey = publicKey.encrypt(aesKey);
    const encryptedAesKeyBase64 = forge.util.encode64(encryptedAesKey);

    const cipher = forge.cipher.createCipher('AES-CBC', forge.util.createBuffer(aesKey, 'raw'));
    cipher.start({ iv: this.iv });
    cipher.update(forge.util.createBuffer(data, 'utf8'));
    cipher.finish();

    const encryptedData = cipher.output.getBytes();
    const encryptedDataBase64 = forge.util.encode64(encryptedData);

    return { j: encryptedDataBase64, k: encryptedAesKeyBase64 };
  }

  decrypt(encryptedData: any) {
    if (encryptedData.j && encryptedData.k) {
      const decryptedDataBytes = forge.util.decode64(encryptedData.j);
      const encryptedAesKeyBytes = forge.util.decode64(encryptedData.k);

      const privKeyPEM = `-----BEGIN RSA PRIVATE KEY-----
      ...your private key...
      -----END RSA PRIVATE KEY-----`;

      const privateKey = forge.pki.privateKeyFromPem(privKeyPEM);
      const decryptedAesKey = privateKey.decrypt(encryptedAesKeyBytes);

      const decipher = forge.cipher.createDecipher('AES-CBC', decryptedAesKey);
      decipher.start({ iv: this.iv });
      decipher.update(forge.util.createBuffer(decryptedDataBytes));
      decipher.finish();

      return decipher.output.toString();
    }
    return null;
  }
}
