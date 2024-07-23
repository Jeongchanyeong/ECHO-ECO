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
      google: '#FFFFFF',
    },
    text: {
      black: '#000000',
      darkGray: '#787878',
      gray: '#959595',
      lightGray: '#EBEBEB',
      blue: '#23A1F8',
      white: '#fafafa',
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
      quizHeader1: '6.34vw', // 24px
      header1: '5.82vw', // 22px
      quizHeader2: '5.28vw', // 20px
      priceText2: '5.82vw', // 22px
      priceText: '4.49vw', // 17px
      buttonText: '4.49vw', // 17px
      body: '4.23vw', // 16px
      chipText: '3.97vw', // 15px
      choose: '3.7vw', // 기존 값
      levelText: '3.23vw', // 12px
    },
  },
};
