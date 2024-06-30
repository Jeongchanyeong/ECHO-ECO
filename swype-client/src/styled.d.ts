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
        white: string;
      };
    };
    font: {
      weight: {
        light: number;
        regular: number;
        bold: number;
        extraBold: number;
      };
      size: {
        quizHeader1: string;
        header1: string;
        quizHeader2: string;
        priceText2: string;
        priceText: string;
        buttonText: string;
        body: string;
        chipText: string;
        choose: string;
        levelText: string;
      };
    };
  }
}
