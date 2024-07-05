declare module '*.png' {
  const value: string;
  export default value;
}

interface ImportMetaEnv {
  readonly VITE_KAKAO_CLIENT_ID: string;
  readonly VITE_KAKAO_REDIRECT_URI: string;
  readonly VITE_GOOGLE_CLIENT_ID: string;
  readonly VITE_GOOGLE_REDIRECT_URI: string;
  readonly VITE_NAVER_CLIENT_ID: string;
  readonly VITE_NAVER_REDIRECT_URI: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
e;
