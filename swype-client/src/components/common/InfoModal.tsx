import styled from 'styled-components';
import Button from './Button';
import Quokka from '../../assets/Quokka.png';
import { useState } from 'react';

const Wrapper = styled.div`
  display: flex;
  width: 90%; 
  height: 25%;
  background-color: #FAFAFA; 
  border-radius: 10px; 
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;

margin-bottom: 15%;

`;

const InfoWrapper = styled.div`
  width: 80%;
  padding: 6% 6% 1%;
`;

const TextWrapper = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  color: #333;
  font-size: ${props => props.theme.font.size.body};
  line-height: 1.5;
`;

const Text = styled.span`
  color: ${props => props.theme.colors.text.black};
  font-weight: ${props => props.theme.font.weight.extraBold};
`;

const ButtonWrapper = styled.div`
  width: 100%;
  height: 30%;

  display: flex;
  align-items: center;  
  
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

const InfoModal = () => {
  const dummyList = [
    '어쩌구저쩌구는 어쩌구 저쩌구 입니다. 어쩌구저쩌구는 어쩌구 저쩌구 입니다.어쩌구저쩌구는 어쩌구 저쩌구 입니다.어쩌구저쩌구는 어쩌구 저쩌구 입니다.',
    '우리 폴라를 저쩌구 해주기 위해 이런 방법이 있습니다.',
    '폴라를 구하러 갑시다!',
  ];
  const [index, setIndex] = useState(0);

  const handleClick = () => {
    if (index < dummyList.length - 1) {
      setIndex(index + 1);
    }
  };

  return (
    <Wrapper>
      <InfoWrapper>
        <TextWrapper>
          <Text>{dummyList[index]}</Text>
        </TextWrapper>
        <ButtonWrapper>
          <Button
            bgColor='#FAFAFA'
            textColor='darkGray'
            width=''
            height=''
            onClick={handleClick}
          >
            {index < dummyList.length - 1 ? '다음 >' : '시작하기 >'}
          </Button>
        </ButtonWrapper>
      </InfoWrapper>
      <ImgWrapper>
        <img src={Quokka} />
      </ImgWrapper>
    </Wrapper>
  );
};

export default InfoModal;
