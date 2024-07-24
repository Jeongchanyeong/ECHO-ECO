import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

import { Container } from '../share/utils/GlobalStyle';
import Splash_GIF from '../assets/Splash_GIF.gif';

const Splash = () => {
  const navigate = useNavigate();
  const [fadeOut, setFadeOut] = useState(false);

  const handleClick = () => {
    setFadeOut(true);
    setTimeout(() => {
      navigate('/login');
    }, 1500);
  };

  return (
    <Container onClick={handleClick}>
      <SplashGIF src={Splash_GIF} />
      {fadeOut && <FadeOutAnimation />}
    </Container>
  );
};

const SplashGIF = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const fadeOut = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
    background-color: black;
  }
`;

const FadeOutAnimation = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0;
  animation: ${fadeOut} 1.5s forwards;
`;

export default Splash;
