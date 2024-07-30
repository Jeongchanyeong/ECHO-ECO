import styled from 'styled-components';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { setCookie } from '../../cookie';
import { Container } from '../../share/utils/GlobalStyle';
import LoginWait from '../../assets/loading.gif';
import { getUserInfo } from '../../apis/user/getUserInfo';

const Loading = () => {
  const params = new URL(document.URL).searchParams;
  const token = params.get('token');
  const navigate = useNavigate();

  useEffect(() => {
    const handleLogin = async () => {
      setCookie('Authorization', `${token}`);

      try {
        const user = await getUserInfo();
        if (user) navigate('/stage');
      } catch (e) {
        navigate('/character');
      }
    };
    handleLogin();
  }, []);

  return (
    <Container>
      <LoadingGIF src={LoginWait}></LoadingGIF>
    </Container>
  );
};

export default Loading;

const LoadingGIF = styled.img`
    width:100%;
    height: 100%;
`;
