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
    };
    font: {
      weight: {
        light: 300;
        regular: 400;
        bold: 700;
        extraBold: 800;
      };
      size: {
        quizHeader1: '1.5rem'; // 24px
        header1: '1.375rem'; // 22px
        quizHeader2: '1.25rem'; // 20px
        priceText2: '1.375rem'; // 22px
        priceText: '1.0625rem'; // 17px
        buttonText: '1.0625rem'; // 17px
        body: '1rem'; // 16px
        chipText: '0.9375rem'; // 15px
        choose: '0.875rem'; // 14px
        levelText: '0.8125rem'; // 13px
      };
    };
  }
}
