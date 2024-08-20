import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import coffee from '../../assets/coffee.png';
import CheckFalse from '../../assets/CheckFalse.png';
import CheckTrue from '../../assets/CheckTrue.png';
import axios from 'axios';
import { BASE_URL } from '../../share/utils/OAuth';
import { getCookie } from '../../cookie';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useEmailCheck } from '../../apis/login/getEmailCheck';

const GiftModal = () => {
  const [isCheck, setIsCheck] = useState(false);
  const [isText, setIsText] = useState(true);
  const [email, setEmail] = useState('');
  const token = getCookie('Authorization');
  const [isModal, setIsModal] = useState(false);
  const navigate = useNavigate();

  const { data } = useQuery({
    queryKey: ['EmailCheck'],
    queryFn: useEmailCheck,
    select: data => {
      return data.isPost;
    },
  });

  useEffect(() => {
    if (data) {
      setIsModal(data);
    }
  }, [data]);

  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;

    const emaiCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const validation = emaiCheck.test(email);
    setEmail(e.target.value);
    setIsCheck(validation);
    setIsText(email.length > 0 && validation);
  };

  const SendToEmail = () => {
    axios
      .post(
        `${BASE_URL}/gifticon`,
        { email },
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      )
      .then(() => setIsModal(true));
  };

  const ResetUser = () => {
    axios
      .post(
        `${BASE_URL}/character/complete`,
        {},
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      )
      .then(() => {
        navigate('/character');
      });
  };

  return (
    <Box>
      <ModalBox>
        <InfoModal>
          <Title> 기프티콘 발송 안내</Title>
          <Info>이메일을 입력하고 기프티콘을 받아요</Info>
          <Img src={coffee} />
          <Tag>[빽다방]</Tag>
          <SubInfo>아이스 아메리카노</SubInfo>
          {!isModal ? (
            <>
              <InputBox>
                <EmailInput
                  placeholder='example@echoeco.com'
                  onChange={handleCheck}
                ></EmailInput>
                <Icon src={isCheck ? CheckTrue : CheckFalse} />
              </InputBox>
              <Noti $isText={isText}>! 유효하지 않은 이메일입니다.</Noti>
              <SendButton
                onClick={SendToEmail}
                disabled={!isCheck}
                $isCheck={isCheck}
              >
                확인
              </SendButton>
            </>
          ) : (
            <>
              <InfoText>
                ECHO-ECO 서비스가 어땠는지 궁금해요.
                <br />
                여러분의 소중한 의견이 큰 도움이 됩니다!
                <br />
                <br />
                구글폼 작성자에 한해서 기프티콘 제공 예정
                <br />
                <br />
                <a href='https://forms.gle/QgoyFdHAGM2y7iB59'>
                  구글폼 작성하고 기프티콘 받기 Click!
                </a>
              </InfoText>
              <ResetButton onClick={ResetUser}>다시 한번 시작하기</ResetButton>
            </>
          )}
        </InfoModal>
      </ModalBox>
    </Box>
  );
};

export default GiftModal;

const Box = styled.div`
  width:100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalBox = styled.div`
    width:90%;
    margin: 20px;
    box-shadow: 0 10px 20px 0 rgb(0 0 0 / 20%);
    border-radius: 20px;
`;

const InfoModal = styled.div`
    border-radius: 20px;
    width: 100%;
    background-color: #fff;
    padding:20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Title = styled.p`
    font-size: ${props => props.theme.font.size.quizHeader1};
    font-weight: ${props => props.theme.font.weight.extraBold};
`;

const Info = styled.p`
    font-size: ${props => props.theme.font.size.body};
    font-weight: ${props => props.theme.font.weight.bold};
    color : ${props => props.theme.colors.text.darkGray};
    margin: 15px 0px;
`;

const Img = styled.img`
    border: 1px solid #EBEBEB;
    width: 100px;
    height: 100px;
    border-radius: 20px;
    margin-bottom: 15px;
`;

const Tag = styled.p`
    font-size: ${props => props.theme.font.size.choose};
    font-weight: ${props => props.theme.font.weight.bold};
    color : ${props => props.theme.colors.text.darkGray};
    margin: 10px 0px;
`;

const SubInfo = styled.p`
    font-size: ${props => props.theme.font.size.chipText};
    font-weight: ${props => props.theme.font.weight.bold};
`;

const InputBox = styled.div`
    width:100%;
    position: relative;
    display: flex;
    align-items: center;
    margin-bottom: 15px;
`;

const EmailInput = styled.input`
    background-color: #f6f7f9;
    border: none;
    border-radius: 12px;
    width:100%;
    height: 40px;
    outline: none;
    padding:10px 10px 10px 10px;
    margin-top: 20px;
`;

const Icon = styled.img`
  position: absolute;
  right: 0;
  padding:25px 10px 10px 10px;
`;

const Noti = styled.p<{ $isText: boolean }>`
  width: 100%;
  margin-bottom: 10px;
  color : #EA4335;
  font-size: 12px;
  font-weight: ${props => props.theme.font.weight.bold};
  display: ${props => (props.$isText ? 'none' : 'block')};
`;

const SendButton = styled.button<{ $isCheck: boolean }>`
  width: 100%;
  height: 50px;
  color: ${props => (props.$isCheck ? '#fff' : '#959595')};
  background-color: ${props => (props.$isCheck ? '#23A1F8' : '#D9D9D9')};
  border-radius: 10px;
`;

const ResetButton = styled.button`
  width: 100%;
  height: 50px;
  border-radius: 10px;
  color: #fff;
  background-color: #23A1F8;
  margin-top: 20px;
  font-weight: ${props => props.theme.font.weight.bold};
  font-size: ${props => props.theme.font.size.buttonText};
`;

const InfoText = styled.div`
  color : #959595;
  font-size: ${props => props.theme.font.size.body};
  font-weight: ${props => props.theme.font.weight.bold};
  margin-top: 20px;
  line-height: 1.5;

  a{
    color: ${props => props.theme.colors.text.blue}
  }
`;
