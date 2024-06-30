import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    bgColor: {
      gray: '#D9D9D9',
      lightGray: '#EBEBEB',
      red: '#F25A6F',
      blue: '#23A1F8',

      kakao: '#FEE500',
      naver: '#5EC538',
      google: '#E2E2E2',
    },
    text: {
      black: '#000000',
      darkGray: '#666666',
      gray: '#959595',
      lightGray: '#EBEBEB',
      blue: '#23A1F8',
    },
  },
  font: {
    weight: {
      light: 300,
      regular: 400,
      bold: 700,
      extraBold: 800,
    },
    size: {
      quizHeader1: '1.5rem', // 24px
      header1: '1.375rem', // 22px
      quizHeader2: '1.25rem', // 20px
      priceText2: '1.375rem', // 22px
      priceText: '1.0625rem', // 17px
      buttonText: '1.0625rem', // 17px
      body: '1rem', // 16px
      chipText: '0.9375rem', // 15px
      choose: '0.875rem', // 14px
      levelText: '0.8125rem', // 13px
    },
  },
};
