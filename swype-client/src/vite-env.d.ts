declare module '*.png' {
  const value: string;
  export default value;
}

interface ImportMetaEnv {
  VITE_BASE_URL: any;
  VITE_GOOGLE_AUTH_URL: any;
  VITE_NAVER_AUTH_URL: any;
  VITE_KAKAO_AUTH_URL: any;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
e;
