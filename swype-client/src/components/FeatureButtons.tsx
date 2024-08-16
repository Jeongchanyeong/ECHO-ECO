import styled from 'styled-components';
import Quiz from '../assets/Quiz.png';
import Video from '../assets/Video.png';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { showToast } from '../share/utils/Toast';
import { userData } from '../share/recoil/userAtom';
import { useRecoilValue } from 'recoil';
import { remainContents } from '../apis/quiz/getRemainContents';

const FeatureButtons = () => {
  const userInfo = useRecoilValue(userData);
  const navigate = useNavigate();

  const { data: chance } = useQuery({
    queryKey: ['chance'],
    queryFn: remainContents,
  });

  const handleChanceCheck = (what: string) => {
    switch (what) {
      case 'quiz':
        if (chance?.remainQuestion === 0) {
          showToast('warning', '오늘의 퀴즈 횟수가 소진되었어요.<br/>12시 이후에 다시 만나요.');
          return;
        } else {
          navigate('/quiz');
        }
        break;
      case 'video':
        if (chance?.remainVideo === 0) {
          showToast('warning', '오늘의 영상을 이미 시청하였어요.<br/>12시 이후에 다시 만나요.');
          return;
        } else {
          navigate('/movie');
        }
        break;
    }
  };

  return (
    <Wrapper>
      <Info>
        <LevelBox>
          <span>Lv. {userInfo?.level}</span>
        </LevelBox>
        <NameBox>
          <span>{userInfo?.character.name}</span>
        </NameBox>
      </Info>
      <ButtonContainer>
        <QuizBox onClick={() => handleChanceCheck('quiz')}>
          <QuizImg src={Quiz}></QuizImg>
          <QuizText>
            남은 횟수 <br />
            {chance?.remainQuestion}/3
          </QuizText>
        </QuizBox>

        <MovieBox onClick={() => handleChanceCheck('video')}>
          <MovieImg src={Video}></MovieImg>
          <MovieText>영상 시청</MovieText>
        </MovieBox>
      </ButtonContainer>
    </Wrapper>
  );
};

export default FeatureButtons;

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
  height: 85%;
  margin-top: 10px;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 15%;
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
  font-size: ${props => props.theme.font.size.buttonText};
`;

const MovieBox = styled.div`
  width:50%;
  height: 85%;
  padding:30px;
  border-radius: 20px;
  background-color: #f5f5f5;
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
`;

const QuizBox = styled(MovieBox)`
  margin-right: 10px;
  cursor: pointer;
`;

const QuizImg = styled.img`
  width:65%;
`;

const MovieImg = styled(QuizImg)`
`;

const QuizText = styled.p`
  text-align: center;
  font-size: ${props => props.theme.font.size.choose};
  font-weight: ${props => props.theme.font.weight.bold};
  color: #959595;
  line-height: 1.3;
`;

const MovieText = styled.p`
  text-align: center;
  font-size: ${props => props.theme.font.size.choose};
  font-weight: ${props => props.theme.font.weight.bold};
  color: #959595;
  line-height: 1.3;
`;
