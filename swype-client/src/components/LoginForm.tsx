import styled from 'styled-components';
import Button from './common/Button';
import kakao_logo from '../assets/kakao_logo.png';
import naver_logo from '../assets/naver_logo.png';
import google_logo from '../assets/google_logo.png';
import { GOOGLE_AUTH_URL, KAKAO_AUTH_URL, NAVER_AUTH_URL } from '../share/utils/OAuth';

const LoginForm = () => {
  const handleKakaoLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  const handleNaverLogin = () => {
    window.location.href = NAVER_AUTH_URL;
  };

  const handleGoogleLogin = () => {
    window.location.href = GOOGLE_AUTH_URL;
  };

  return <Form></Form>;
};

export default LoginForm;

const Form = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;   
  flex-direction: column;
  background-color: white;
  

  width: 100%;
  max-width: 480px;
  height: 50%;
  
  border:1px solid rgb(242, 242, 242);

  border-radius: 40px 40px 0px 0px;
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
  height: auto;
  flex:8;
  font-size: ${props => props.theme.font.size.priceText};
  gap: 6%;
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
