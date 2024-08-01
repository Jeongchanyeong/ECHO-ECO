import styled from 'styled-components';
import Leeca from '../../assets/LeeCa.png';
import Button from '../common/Button';
import { useNavigate } from 'react-router-dom';
import { showToast } from '../../share/utils/Toast';

import { useQuery } from '@tanstack/react-query';
import { QuizType } from '../../model/quizType';
import { remainContents } from '../../apis/quiz/getRemainContents';
import { useEffect } from 'react';
import { userData } from '../../share/recoil/userAtom';
import { useSetRecoilState } from 'recoil';

type Props = {
  data?: string;
  quiz?: QuizType;
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
  isModal: boolean;
};

const QuizModal: React.FC<Props> = ({ data, quiz, setIsModal, isModal }) => {
  const setInfo = useSetRecoilState(userData);
  const navigate = useNavigate();

  const { data: chance } = useQuery({
    queryKey: ['remain'],
    queryFn: remainContents,
  });

  const GoToMovie = () => {
    if (chance?.remainVideo === 0) {
      showToast('warning', '오늘 영상 시청을 하셨어요 !', '');
      return;
    } else {
      navigate('/movie');
    }
  };

  useEffect(() => {
    if (data !== 'INCORRECT') {
      setInfo(prev => ({
        ...prev,
        userPoint: prev.userPoint + 10,
      }));
    }
  }, [data]);

  return (
    <ModalBox $isModal={isModal}>
      <ImgBox>
        <Img src={Leeca} />
      </ImgBox>
      <InfoModal>
        <Title>
          {data === 'INCORRECT' ? (
            <>
              아쉽네요
              <br />
              오답입니다!
            </>
          ) : (
            '정답입니다'
          )}
        </Title>
        <Info>획득 포인트 + {data === 'INCORRECT' ? 0 : +10}</Info>

        <InfoBox>{quiz?.head}</InfoBox>

        {chance?.remainQuestion === 0 ? (
          <>
            <BlueButton onClick={() => navigate('/stage')}>남은 횟수 소진! 스테이지로</BlueButton>
            <GrayButton onClick={GoToMovie}>영상 보고 퀴즈 더 풀기</GrayButton>
          </>
        ) : (
          <Button
            $bgColor='blue'
            $textColor='white'
            width='100%'
            height='50px'
            onClick={() => setIsModal(false)}
          >
            다음 문제 풀러가기
          </Button>
        )}
      </InfoModal>
    </ModalBox>
  );
};

export default QuizModal;

const ModalBox = styled.div<{ $isModal: boolean }>`
    margin: auto;
    width:80%;
`;

const InfoModal = styled.div`
    border-radius: 20px;
    width: 100%;
    background-color: #F9F9F9;
    border: 1px solid #f2f2f2;
    padding:20px;
    position: relative;
    z-index: 3;
`;

const ImgBox = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    z-index: 1;
`;

const Img = styled.img`
  position: relative;
  top: 50px;
  z-index: -1;
`;

const Title = styled.p`
    font-size: ${props => props.theme.font.size.quizHeader1};
    font-weight: ${props => props.theme.font.weight.extraBold};
    line-height: 1.3;
    display: flex;
    justify-content: center;
    text-align: center;
`;

const Info = styled.div`
    display: flex;
    justify-content: center;
    line-height: 1.5;
    color: ${props => props.theme.colors.text.darkGray};
    font-size: ${props => props.theme.font.size.body};
    font-weight: ${props => props.theme.font.weight.bold};

    margin: 10px 0px;
`;

const InfoBox = styled.div`
  border: 1px solid #F2F2F2;
  border-radius: 20px;
  width:100%;
  margin-bottom: 20px;
  background-color: #fff;
  text-align: center;
  padding:20px;
  font-size: ${props => props.theme.font.size.choose};
  font-weight: ${props => props.theme.font.weight.bold};
  color:${props => props.theme.colors.text.darkGray};
  line-height: 1.8;
`;

const BlueButton = styled.button`
  background-color: #23A1F8;
  color:#fff;
  border-radius: 10px;
  width:100%;
  height: 50px;
  margin-bottom: 10px;
  font-size: ${props => props.theme.font.size.buttonText};
  font-weight: ${props => props.theme.font.weight.bold};
`;

const GrayButton = styled.button`
  background-color: #F9F9F9;
  color: ${props => props.theme.colors.text.gray};
  border-radius: 10px;
  width:100%;
  height: 50px;
  font-size: ${props => props.theme.font.size.buttonText};
  font-weight: ${props => props.theme.font.weight.bold};
`;
