import styled from 'styled-components';
import Store from '../assets/Store.png';
import Quiz from '../assets/Quiz.png';
import Video from '../assets/Video.png';
import Button from '../common/Button';

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  
  width: 100%;
  height: 34%;
  padding: 3%;


 
  & button{
    display: flex;
    border-radius: 15%;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    img {
      width: 30%;
      height: auto;
    }


     span {
    padding-top: 15%;
  }

    &:nth-child(1) img {
      padding-top: 10%;
    }
  }


`;

const buttonData = [
  {
    buttonImg: Quiz,
    buttonText: (
      <>
        남은 횟수
        <br />
        3/3
      </>
    ),
  },
  {
    buttonImg: Video,
    buttonText: '영상 시청',
  },
  {
    buttonImg: Store,
    buttonText: '상점',
  },
];

const FeatureButtons = () => {
  return (
    <ButtonContainer>
      {buttonData.map((button, index) => (
        <Button
          key={index}
          bgColor='white'
          textColor='gray'
          width='30%'
          height='50%'
          onClick={() => {}}
        >
          <img src={button.buttonImg} />
          <span>{button.buttonText}</span>
        </Button>
      ))}
    </ButtonContainer>
  );
};

export default FeatureButtons;
