import { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';
import { DefaultTheme } from 'styled-components/dist/types';

const CommonButton = styled.button<ButtonProps>`
  background-color: ${props => props.theme.colors.bgColor[props.bgColor]};
  width: ${props => props.width}; 
  height: ${props => props.height}; 
  color: ${props => props.theme.colors.text[props.textColor]}; 
  border-radius: 7px;
  font-family: 'NanumSquareRound', sans-serif;
  font-size: 17px;
  text-align: center;
  letter-spacing: -3%;
  transition: all 0.3s;
  

  &:hover {
    opacity: 0.9;
  }
`;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  bgColor: keyof DefaultTheme['colors']['bgColor'];
  width: string;
  height: string;
  textColor: keyof DefaultTheme['colors']['text'];
  children: React.ReactNode;
}

const Button = ({ bgColor, width, height, textColor, children, onClick }: ButtonProps) => {
  return (
    <CommonButton
      onClick={onClick}
      bgColor={bgColor}
      width={width}
      height={height}
      textColor={textColor}
    >
      {children}
    </CommonButton>
  );
};

export default Button;
