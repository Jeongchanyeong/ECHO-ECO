import styled from 'styled-components';
import Quiz from '../assets/Quiz.png';
import Video from '../assets/Video.png';
import Button from './common/Button';
import { useNavigate } from 'react-router-dom';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  width: 92%;
  height: 25%;
  margin-bottom: 10%;
  border-radius: 30px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  border-radius: 0px 0px 30px 30px;

  & button {
    display: flex;
    border-radius: 15%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 40%;
    height: 80%;
    background-color: #fafafa;

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

const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 3% 6%;
`;

const LevelBox = styled.div`
  background-color: ${props => props.theme.colors.bgColor.blue};
  border-radius: 13px;
  padding: 5px 11px;
  margin-right: 10px;
  color: ${props => props.theme.colors.text.white};
  font-size: ${props => props.theme.font.size.choose};
`;

const NameBox = styled.div`
  font-weight: ${props => props.theme.font.weight.extraBold};
  font-size: ${props => props.theme.font.size.buttonText};
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
    goPage: '/quiz',
  },
  {
    buttonImg: Video,
    buttonText: '영상 시청',
    goPage: '/movie',
  },
];

const FeatureButtons = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Info>
        <LevelBox>
          <span>Lv1</span>
        </LevelBox>
        <NameBox>
          <span>폴라</span>
        </NameBox>
      </Info>
      <ButtonContainer>
        {buttonData.map((button, index) => (
          <Button
            key={index}
            bgColor='white'
            textColor='gray'
            width='30%'
            height='50%'
            onClick={() => navigate(button.goPage)}
          >
            <img src={button.buttonImg} />
            <span>{button.buttonText}</span>
          </Button>
        ))}
      </ButtonContainer>
    </Wrapper>
  );
};

export default FeatureButtons;
