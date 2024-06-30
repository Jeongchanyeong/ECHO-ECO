import styled from 'styled-components';
import Button from '../common/Button';
import kakao_logo from '../assets/kakao_logo.png';
import naver_logo from '../assets/naver_logo.png';
import google_logo from '../assets/google_logo.png';

const Form = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;   
  flex-direction: column;
  background-color: white;
  
  position: absolute;
  bottom: 0;
  width: 100%;
  max-width: 480px;
  height: 50%;
  
  border:1px solid rgb(242, 242, 242);

  border-radius: 40px 40px 0px 0px;
`;

const LogoImg = styled.img`


`;

const LoginText = styled.p`
  margin-top: 35px;
  color: ${props => props.theme.colors.text.black};
  font-size: ${props => props.theme.font.size.body};
  font-weight: ${props => props.theme.font.weight.bold};
  text-align: center;
  flex:2;
  bottom: 0;
  line-height: 1.5;


`;

const ButtonWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
width: 100%;
height: 100vh;
flex:8;

gap: ${props => props.theme.font.size.body};
padding: 9px 0px;

& > button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

& > button:nth-child(3) {
    border: 1px solid #E2E2E2;
  }
`;

const NoticeText = styled.p`
  margin-top: 10px;
  font-size: 12px;
  color: #999;
  text-align: center;

  color: ${props => props.theme.colors.text.gray};
  letter-spacing: -0.03rem;
  line-height: 1.8;
  flex:3;

`;

const LoginForm = () => {
  return (
    <Form>
      <LoginText>
        소셜 계정에 로그인하고
        <br />
        빠르게 ECHO ECO를 시작해보세요!
      </LoginText>
      <ButtonWrapper>
        <Button
          bgColor='kakao'
          width='93%'
          height='25%'
          textColor='black'
          onClick={() => {}}
        >
          <LogoImg
            src={kakao_logo}
            alt='카카오 로고'
          />
          카카오로 시작하기
        </Button>
        <Button
          bgColor='naver'
          width='93%'
          height='25%'
          textColor='white'
          onClick={() => {}}
        >
          <LogoImg
            src={naver_logo}
            alt='카카오 로고'
          />
          네이버로 시작하기
        </Button>
        <Button
          bgColor='google'
          width='93%'
          height='25%'
          textColor='black'
          onClick={() => {}}
        >
          <LogoImg
            src={google_logo}
            alt='구글 로고'
          />
          구글로 시작하기
        </Button>
      </ButtonWrapper>

      <NoticeText>
        로그인 시 개인정보 보호 정책 및 서비스 약관에 동의하는 것으로 간주하며,
        <br /> 서비스 이용을 위해 이메일과 이름을 수집합니다.
      </NoticeText>
    </Form>
  );
};

export default LoginForm;
