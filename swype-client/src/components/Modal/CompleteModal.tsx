import styled from 'styled-components';
import Quokka from '../../assets/Quokka.png';
import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { MdArrowForwardIos } from 'react-icons/md';
import { characterComplete } from '../../apis/user/getCharacterMax';
import GiftModal from './GiftModal';
import { getCookie } from '../../cookie';
import { useNavigate } from 'react-router-dom';
import { showToast } from '../../share/utils/Toast';

const CompleteModal = () => {
  const [index, setIndex] = useState(0);
  const [isModal, setIsModal] = useState(true);
  const [infoText, setInfoText] = useState('');
  const token = getCookie('Authorization');
  const navigate = useNavigate();

  const { data: completeMessages, error } = useQuery({
    queryKey: ['characterComplete'],
    queryFn: characterComplete,
    enabled: !!token,
    retry: 1,
  });

  useEffect(() => {
    if (completeMessages && completeMessages[index]) {
      let currentIndex = 0;
      const fullText = completeMessages[index].step;
      const gap = setInterval(() => {
        setInfoText(() => fullText.slice(0, currentIndex + 1));
        currentIndex++;

        if (currentIndex === fullText.length) {
          clearInterval(gap);
        }
      }, 35);
      return () => clearInterval(gap);
    }
  }, [index, completeMessages]);

  if (error) {
    navigate('/character');
  }

  const handleClick = () => {
    if (completeMessages && index < completeMessages.length - 1) {
      setIndex(index + 1);
    }
  };

  const handleCheck = () => {
    if (token) {
      setIsModal(false);
    } else {
      showToast('warning', '로그인을 해주세요', '');
      navigate('/login');
    }
  };

  return (
    <>
      <Box>
        <Wrapper>
          {isModal ? (
            <>
              <InfoWrapper>
                <TextWrapper>
                  {completeMessages && completeMessages[index] && <Text>{infoText}</Text>}
                </TextWrapper>
                <ButtonWrapper>
                  {completeMessages && index < completeMessages.length - 1 ? (
                    <Next onClick={handleClick}>
                      다음 <MdArrowForwardIos />
                    </Next>
                  ) : (
                    <Finish onClick={handleCheck}>
                      기프티콘 받으러 가기 <MdArrowForwardIos />
                    </Finish>
                  )}
                </ButtonWrapper>
              </InfoWrapper>
              <ImgWrapper>
                <img
                  src={Quokka}
                  alt='Quokka'
                />
              </ImgWrapper>
            </>
          ) : null}
        </Wrapper>
      </Box>
      {!isModal && <GiftModal />}
    </>
  );
};

export default CompleteModal;

const Box = styled.div`
  height: 30%;
  display: flex;
  align-items: end;
  justify-content: center;
  padding-bottom: 30px;
`;

const Wrapper = styled.div`
  display: flex;
  width: 90%;
  height: 160px;
  border-radius: 10px; 
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const InfoWrapper = styled.div`
  width: 80%;
  padding:20px;
  background-color: ${props => props.theme.colors.text.white};
`;

const TextWrapper = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  font-size: ${props => props.theme.font.size.body};
  line-height: 1.5;
  margin-bottom: 10px;
`;

const Text = styled.span`
  color: #505050;
  font-size: ${props => props.theme.font.size.choose};
  font-weight: ${props => props.theme.font.weight.extraBold};
  white-space: pre-wrap;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: flex-start;

  color: ${props => props.theme.colors.text.darkGray};
  font-size: ${props => props.theme.font.size.body};
  font-weight: ${props => props.theme.font.weight.bold};
`;

const ImgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  width: 20%;

  background-color: ${props => props.theme.colors.text.white};

  img {
    width: 110%;
    height: auto;
  }
`;

const Next = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;

`;

const Finish = styled(Next)`
`;
