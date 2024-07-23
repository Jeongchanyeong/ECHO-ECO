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
      quizHeader1: '150%', // 24px
      header1: '137.5%', // 22px
      quizHeader2: '125%', // 20px
      priceText2: '137.5%', // 22px
      priceText: '106.25%', // 17px
      buttonText: '106.25%', // 17px
      body: '100%', // 16px
      chipText: '93.75%', // 15px
      choose: '87.5%', // 14px
      levelText: '75%', //
    },
  },
};
