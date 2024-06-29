import { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';
import { DefaultTheme } from 'styled-components/dist/types';

const CommonButton = styled.button<ButtonProps>`
  background-color: ${props => props.theme.colors.bgColor[props.bgColor]};
  color: ${props => props.theme.colors.text[props.textColor]};

  width: ${props => props.width}; 
  height: ${props => props.height}; 
  font-weight: ${props => props.theme.fontWeight.bold};

  border-radius: 10px;
  font-size: 17px;
  text-align: center;
  letter-spacing: -3%;
  transition: all 0.2s;
  

  &:hover {
    opacity: 0.9;
  }

  &:active {
    transform: scale(0.97);
  }
`;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  width: string;
  height: string;
  textColor: keyof DefaultTheme['colors']['text'];
  bgColor: keyof DefaultTheme['colors']['bgColor'];
}

const Button = ({ bgColor, width, height, textColor, children, onClick }: ButtonProps) => {
  return (
    <CommonButton
      bgColor={bgColor}
      textColor={textColor}
      width={width}
      height={height}
      onClick={onClick}
    >
      {children}
    </CommonButton>
  );
};

export default Button;
