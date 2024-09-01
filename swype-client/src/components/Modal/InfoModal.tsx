import styled from 'styled-components';
import Quokka from '../../assets/Quokka.png';
import { useState, useEffect } from 'react';

import { DescriptionText } from '../../model/characterType';
import { useQuery } from '@tanstack/react-query';
import { MdArrowForwardIos } from 'react-icons/md';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { getCookie } from '../../cookie';
import { useGetDescription } from '../../apis/user/getCharacter';
import { showToast } from '../../share/utils/Toast';
import { aesDecrypt } from '../../key';

const InfoModal = () => {
  const navigate = useNavigate();
  const params = new URL(document.URL).searchParams;
  const character = params.get('character');
  const characterId = params.get('id');
  const token = aesDecrypt(getCookie('Authorization'));

  const { data: Description } = useQuery<DescriptionText>({
    queryKey: ['Description'],
    queryFn: () => useGetDescription(character as string),
  });

  const [index, setIndex] = useState(0);
  const [infoText, setInfoText] = useState('');

  useEffect(() => {
    if (Description) {
      let currentIndex = 0;
      const fullText = Description[index].step;
      const gap = setInterval(() => {
        setInfoText(() => fullText.slice(0, currentIndex + 1));
        currentIndex++;

        if (currentIndex === fullText.length) {
          clearInterval(gap);
        }
      }, 35);
      return () => clearInterval(gap);
    }
  }, [index, Description]);

  const handleClick = () => {
    if (Description && index < Description.length - 1) {
      setIndex(index + 1);
    }
  };

  const PickCharacter = () => {
    axios
      .post(
        `${import.meta.env.VITE_BASE_URL}/character/pick`,
        { characterId },
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      )
      .then(() => {
        navigate('/stage');
      })
      .catch(() => showToast('warning', '이미 사용중인 캐릭터가 있습니다.'));
  };

  return (
    <Wrapper>
      <InfoWrapper>
        <TextWrapper>
          <Text>{infoText}</Text>
        </TextWrapper>
        <ButtonWrapper>
          {Description && index < Description.length - 1 ? (
            <Next onClick={handleClick}>
              다음 <MdArrowForwardIos />
            </Next>
          ) : (
            <Finish onClick={PickCharacter}>
              시작하기 <MdArrowForwardIos />
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
    </Wrapper>
  );
};

export default InfoModal;

const Wrapper = styled.div`
  display: flex;
  width: 90%; 
  height: 160px;
  border-radius: 10px; 
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin-bottom: 30px;
`;

const InfoWrapper = styled.div`
  width: 80%;
`;

const TextWrapper = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors.text.white};
  justify-content: flex-start;
  line-height: 1.5;
  padding: 20px 5px 20px 20px;
`;

const Text = styled.span`
  color: #505050;
  font-size: ${props => props.theme.font.size.choose};
  font-weight: ${props => props.theme.font.weight.extraBold};
  white-space: pre-wrap;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: flex-start;
  padding: 0px 0px 10px 20px;
  background-color: ${props => props.theme.colors.text.white}; 
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
