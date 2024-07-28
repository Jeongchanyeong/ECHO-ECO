import styled from 'styled-components';
import { Container } from '../../share/utils/GlobalStyle';
import Login_Img from '../../assets/Login_Img.png';
import KakaoLogo from '../../assets/kakao_logo.png';
import NaverLogo from '../../assets/naver_logo.png';
import GoogleLogo from '../../assets/google_logo.png';
import { GOOGLE_AUTH_URL, KAKAO_AUTH_URL, NAVER_AUTH_URL } from '../../share/utils/OAuth';

const Login = () => {
  const handleKakaoLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  const handleNaverLogin = () => {
    window.location.href = NAVER_AUTH_URL;
  };

  const handleGoogleLogin = () => {
    window.location.href = GOOGLE_AUTH_URL;
  };
  return (
    <Container>
      <Wrapper>
        <Box>
          <Title>
            소셜 계정에 로그인하고 <br /> 빠르게 ECHO ECO 를 시작해보세요 !
          </Title>
          <ButtonBox>
            <Kakao onClick={handleKakaoLogin}>
              <img src={KakaoLogo} />
              카카오로 시작하기
            </Kakao>
            <Naver onClick={handleNaverLogin}>
              <img src={NaverLogo} />
              네이버로 시작하기
            </Naver>
            <Google onClick={handleGoogleLogin}>
              <img src={GoogleLogo} />
              구글로 시작하기
            </Google>
          </ButtonBox>

          <Info>
            로그인 시 개인정보보호 정책 및 서비스 약관에 동의하는 것으로 간주하며, <br />
            서비스 이용을 위해 이메일과 이름을 수집합니다.
          </Info>
        </Box>
      </Wrapper>
    </Container>
  );
};

export default Login;

const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  background-color: #E1F3F4;
  width: 100%;
  height: 100vh;
  background-image: url(${Login_Img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const Box = styled.div`
  background-color: #fff;
  height: 50%;
  width: 100%;
  border-radius: 40px 40px 0px 0px;
`;

const Title = styled.div`
  padding:20px;
  text-align: center;
  line-height: 1.5;
  font-weight: 700;
  font-size: ${props => props.theme.font.size.body};
`;

const ButtonBox = styled.div`
  text-align: center;
  font-weight: 700;
  font-size: ${props => props.theme.font.size.body};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Kakao = styled.button`
  width:90%;
  background-color: #FEE500;
  padding:15px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  img {
    margin-right: 5px;
  }
`;

const Naver = styled.button`
  width:90%;
  background-color: #5EC538;
  padding:15px;
  border-radius: 10px;
  margin: 13px 0px;
  color:#fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  img {
    margin-right: 5px;
  }
`;

const Google = styled.button`
  width:90%;
  padding:15px;
  border-radius: 10px;
  border: 1px solid #E2E2E2;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  img {
    margin-right: 5px;
  }
`;

const Info = styled.div`
  text-align: center;
  font-weight: 700;
  color:#959595;
  font-size: 12px;
  line-height: 1.5;
  margin-top: 20px;
`;
