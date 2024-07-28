import styled from 'styled-components';
import { Container } from '../../share/utils/GlobalStyle';
import LoginForm from '../../components/LoginForm';
import Login_Img from '../../assets/Login_Img.png';

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <LoginForm />
      </Wrapper>
    </Container>
  );
};

export default Login;

const Wrapper = styled.div`
  background-color: #E1F3F4;
  width: 100%;
  height: 100vh;
  background-image: url(${Login_Img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
