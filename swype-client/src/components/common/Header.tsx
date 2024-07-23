import { ReactNode } from 'react';
import styled from 'styled-components';

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  max-width: 480px; 
  top: 0;
  
  background-color: rgba(0,0,0,0);
  
  font-size: ${props => props.theme.font.size.choose};
  letter-spacing: 0.03em;
  z-index: 1000;
  padding: 12px 27px 12px 15px;
  box-sizing: border-box; 

`;
const Col = styled.div<{ buttonColor?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.text.black};
  text-align: center;
  gap: 20px;

  &:nth-child(2) span {
    font-size: ${props => props.theme.font.size.header1};
    font-weight: ${props => props.theme.font.weight.extraBold};
    margin-right: 140px;
  }

  button {
    font-size: 24px;
    color: ${props => props.buttonColor || props.theme.colors.text.black};
  }
`;

interface HeaderProps {
  title?: string;
  buttonText?: string;
  leftChild?: ReactNode;
  rightChild?: ReactNode;
  onClick?: () => void;
  buttonColor?: string;
}

const Header = ({
  title,
  buttonText,
  leftChild,
  rightChild,
  onClick,
  buttonColor,
}: HeaderProps) => {
  return (
    <Nav>
      <Col buttonColor={buttonColor}>
        <button
          onClick={onClick}
          style={{ color: buttonColor }}
        >
          {buttonText}
        </button>
      </Col>
      <Col>
        <span>{title}</span>
      </Col>
      <Col>
        {leftChild}
        {rightChild}
      </Col>
    </Nav>
  );
};

export default Header;
