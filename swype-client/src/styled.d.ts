import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      bgColor: {
        gray: string;
        lightGray: string;
        red: string;
        blue: string;

        kakao: string;
        naver: string;
        google: string;
      };
      text: {
        black: string;
        darkGray: string;
        gray: string;
        lightGray: string;
        blue: string;
      };
      fontWeight: {
        light: number;
        regular: number;
        bold: number;
        extraBold: number;
      };
    };
  }
}
