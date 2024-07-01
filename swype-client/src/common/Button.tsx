import { ButtonHTMLAttributes } from 'react';
import styled, { DefaultTheme } from 'styled-components';

const CommonButton = styled.button<ButtonProps>`
  background-color: ${props =>
    props.theme.colors.bgColor[props.bgColor as keyof DefaultTheme['colors']['bgColor']] ||
    props.bgColor};
  color: ${props =>
    props.theme.colors.text[props.textColor as keyof DefaultTheme['colors']['text']] ||
    props.textColor};
  font-weight: ${props => props.theme.font.weight.bold};
  font-size: ${props => props.theme.font.size.buttonText};
  width: ${props => props.width};
  height: ${props => props.height};

  border-radius: 10px;
  text-align: center;
  letter-spacing: -0.03rem;
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
  textColor: keyof DefaultTheme['colors']['text'] | string;
  bgColor: keyof DefaultTheme['colors']['bgColor'] | string;
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
