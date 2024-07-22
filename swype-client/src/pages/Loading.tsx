import styled from 'styled-components';
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { setCookie } from '../cookie';
import { Container } from '../share/utils/GlobalStyle';
import LoginWait from '../assets/loading.gif';

export default function Loading() {
  const params = new URL(document.URL).searchParams;
  const useremail = params.get('useremail');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://13.124.73.201:8080/user/token/${useremail}`).then(res => {
      setCookie('Authorization', res.data.data.authorization);
      navigate('/');
    });
  }, []);
  return (
    <Container>
      <LoadingGIF src={LoginWait}></LoadingGIF>
    </Container>
  );
}

const LoadingGIF = styled.img`
    width:100%;
    height: 100%;
`;
