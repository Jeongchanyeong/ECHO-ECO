import styled from 'styled-components';
import Quiz from '../assets/Quiz.png';
import Video from '../assets/Video.png';
import { useNavigate } from 'react-router-dom';
import { getVideoWatched } from '../apis/video/getVideoWatched';
import { useQuery } from '@tanstack/react-query';
import { showToast } from '../share/utils/Toast';
import { userData } from '../share/recoil/userAtom';
import { useRecoilValue } from 'recoil';

const FeatureButtons = () => {
  const userInfo = useRecoilValue(userData);

  const navigate = useNavigate();
  const { data } = useQuery({
    queryKey: ['getVideoWatched'],
    queryFn: getVideoWatched,
  });

  const handleVideoClick = () => {
    if (data?.isWatched) {
      navigate('/movie');
    } else {
      showToast('warning', '오늘 영상을 이미 시정하였어요. 00시 이후에 다시 만나요!');
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
        <QuizBox onClick={() => navigate('/quiz')}>
          <QuizImg src={Quiz}></QuizImg>
          <QuizText>
            남은 횟수 <br />
            3/3
          </QuizText>
        </QuizBox>

        <MovieBox onClick={handleVideoClick}>
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
  font-size: ${props => props.theme.font.size.buttonText};
  

`;

const MovieBox = styled.div`
  width:50%;
  height: 80%;
  padding:30px;
  border-radius: 20px;
  background-color: #f5f5f5;
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const QuizBox = styled(MovieBox)`

  margin-right: 10px;
`;

const QuizImg = styled.img`
  width:65%;
  margin-bottom: 10px;
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
