import styled from 'styled-components';
import Quokka from '../../assets/Quokka.png';
import { useState } from 'react';

import { DescriptionText } from '../../model/characterType';
import { useQuery } from '@tanstack/react-query';
import { MdArrowForwardIos } from 'react-icons/md';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { getCookie } from '../../cookie';
import { useGetDescription } from '../../apis/user/getCharacter';
import { showToast } from '../../share/utils/Toast';

const InfoModal = () => {
  const navigate = useNavigate();
  const params = new URL(document.URL).searchParams;
  const character = params.get('character');
  const characterId = params.get('id');
  const token = getCookie('Authorization');

  const { data: Description } = useQuery<DescriptionText>({
    queryKey: ['Description'],
    queryFn: () => useGetDescription(character as string),
  });

  const [index, setIndex] = useState(0);

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
      .then(res => {
        navigate('/stage');
      })
      .catch(() => showToast('warning', '이미 사용중인 캐릭터가 있습니다.', ''));
  };

  return (
    <Wrapper>
      <InfoWrapper>
        <TextWrapper>
          <Text>{Description && Description[index].step}</Text>
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
        <img src={Quokka} />
      </ImgWrapper>
    </Wrapper>
  );
};

export default InfoModal;

const Wrapper = styled.div`
  display: flex;
  width: 90%; 
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
  height: 70%;
  display: flex;
  flex-direction: column;
  background-color: #FAFAFA; 
  justify-content: center;
  color: #333;
  font-size: ${props => props.theme.font.size.body};
  line-height: 1.5;
  padding: 20px 0px 20px 20px;
`;

const Text = styled.span`
  color: ${props => props.theme.colors.text.black};
  font-weight: ${props => props.theme.font.weight.extraBold};
  padding-top:20px;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: flex-start;
  padding-left: 20px;
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
