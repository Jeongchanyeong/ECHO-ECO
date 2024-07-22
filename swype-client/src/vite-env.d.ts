declare module '*.png' {
  const value: string;
  export default value;
}

interface ImportMetaEnv {
  VITE_GOOGLE_AUTH_URL: any;
  VITE_BASE_URL: any;
  VITE_KAKAO_AUTH_URL: any;
  VITE_NAVER_AUTH_URL: any;
  readonly VITE_KAKAO_CLIENT_ID: string;
  readonly VITE_KAKAO_REDIRECT_URI: string;
  readonly VITE_GOOGLE_CLIENT_ID: string;
  readonly VITE_GOOGLE_REDIRECT_URI: string;
  readonly VITE_NAVER_CLIENT_ID: string;
  readonly VITE_NAVER_REDIRECT_URI: string;
  readonly VITE_APP_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
