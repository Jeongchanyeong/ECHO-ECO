import styled from 'styled-components';
import Quiz from '../assets/Quiz.png';
import Video from '../assets/Video.png';
import { useNavigate } from 'react-router-dom';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 30px;
  width:90%;
  height: 80%;
  padding:20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80%;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 20%;
`;

const LevelBox = styled.div`
  background-color: ${props => props.theme.colors.bgColor.blue};
  border-radius: 25px;
  padding: 7px;
  margin-right: 10px;
  color: ${props => props.theme.colors.text.white};
  font-size: ${props => props.theme.font.size.levelText};
  font-weight: ${props => props.theme.font.weight.extraBold};
`;

const NameBox = styled.div`
  font-weight: ${props => props.theme.font.weight.extraBold};
  font-size: ${props => props.theme.font.size.choose};
`;

const QuizBox = styled.div`
  width:50%;
  height: 80%;
  padding:30px;
  border-radius: 20px;
  background-color: #FAFAFA;
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-right: 10px;
`;

const MovieBox = styled.div`
  width:50%;
  height: 80%;
  padding:30px;
  border-radius: 20px;
  background-color: #FAFAFA;
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const QuizImg = styled.img`
  width:50%;
  margin-bottom: 10px;
`;

const QuizText = styled.p`
  text-align: center;
  font-size: ${props => props.theme.font.size.choose};
  font-weight: ${props => props.theme.font.weight.bold};
  color: #959595;
  line-height: 1.3;
`;

const MovieImg = styled.img`
  width:50%;
  margin-bottom: 10px;
`;

const MovieText = styled.p`
  text-align: center;
  font-size: ${props => props.theme.font.size.choose};
  font-weight: ${props => props.theme.font.weight.bold};
  color: #959595;
  line-height: 1.3;
`;

const FeatureButtons = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Info>
        <LevelBox>
          <span>Lv.1</span>
        </LevelBox>
        <NameBox>
          <span>폴라</span>
        </NameBox>
      </Info>
      <ButtonContainer>
        {/* {buttonData.map((button, index) => (
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
        ))} */}
        <QuizBox>
          <QuizImg src={Quiz}></QuizImg>
          <QuizText>
            남은 횟수 <br />
            3/3
          </QuizText>
        </QuizBox>
        <MovieBox>
          <MovieImg src={Video}></MovieImg>
          <MovieText>영상 시청</MovieText>
        </MovieBox>
      </ButtonContainer>
    </Wrapper>
  );
};

export default FeatureButtons;
