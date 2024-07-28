import styled from 'styled-components';
import Quokka from '../../assets/Quokka.png';
import { useState } from 'react';
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
  const token = getCookie('Authorization');
  const navigate = useNavigate();

  const { data: completeMessages, error } = useQuery({
    queryKey: ['characterComplete'],
    queryFn: characterComplete,
    enabled: !!token,
    retry: 1,
  });

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
                  {completeMessages && completeMessages[index] && (
                    <Text>{completeMessages[index].step}</Text>
                  )}
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
  background-color: #FAFAFA; 
  border-radius: 10px; 
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const InfoWrapper = styled.div`
  width: 80%;
  padding:20px;
`;

const TextWrapper = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #333;
  font-size: ${props => props.theme.font.size.body};
  line-height: 1.5;
  margin-bottom: 10px;
  background-color: #FAFAFA; 
`;

const Text = styled.span`
  color: ${props => props.theme.colors.text.black};
  font-weight: ${props => props.theme.font.weight.extraBold};
`;

const ButtonWrapper = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: flex-start;
  background-color: #FAFAFA; 

`;

const ImgWrapper = styled.div`
  width: 20%;
  background-color: #FAFAFA; 
  display: flex;
  align-items: center;
  justify-content: end;

  img {
    width: 90%;
    height: auto;
  }
`;

const Next = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  color:#787878;
  font-size: ${props => props.theme.font.size.body};
  font-weight: ${props => props.theme.font.weight.bold};
`;

const Finish = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  color:#787878;
  font-size: ${props => props.theme.font.size.body};
  font-weight: ${props => props.theme.font.weight.bold};
`;
