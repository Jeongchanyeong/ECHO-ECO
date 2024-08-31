import CryptoJS, { SHA256 } from 'crypto-js';

export const sha256Encrypt = (data: string) => {
  return SHA256(data).toString();
};

export const aesEncrypt = (data: string) => {
  return CryptoJS.AES.encrypt(data, import.meta.env.VITE_CRYPTO_KEY).toString();
};

export const aesDecrypt = (data: string | null) => {
  if (!data) return '';

  const bytes = CryptoJS.AES.decrypt(data, import.meta.env.VITE_CRYPTO_KEY);
  const decryptedData = bytes.toString(CryptoJS.enc.Utf8);

  return decryptedData;
};
