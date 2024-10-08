import { Container } from '../../share/utils/GlobalStyle';
import styled, { keyframes, css } from 'styled-components';
import Leeca from '../../assets/LeeCa.png';
import Header from '../../components/common/Header';
import quizbackground from '../../assets/quizbackground.png';
import QuizLife from '../../components/common/QuizLife';
import Point from '../../components/common/Point';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { BASE_URL } from '../../share/utils/OAuth';
import axios from 'axios';
import { getCookie } from '../../cookie';
import { useEffect, useState } from 'react';
import QuizModal from '../../components/Modal/QuizModal';
import { QuizType } from '../../model/quizType';
import { showToast } from '../../share/utils/Toast';
import { useGetQuiz } from '../../apis/quiz/getQuiz';
import { aesDecrypt } from '../../key';

const Quiz = () => {
  const [isModal, setIsModal] = useState(false);
  const [data, setData] = useState();
  const navigate = useNavigate();
  const token = aesDecrypt(getCookie('Authorization'));

  const {
    data: quiz,
    error,
    refetch,
  } = useQuery<QuizType>({
    queryKey: ['quiz'],
    queryFn: useGetQuiz,
  });

  useEffect(() => {
    if (!isModal) {
      refetch();
    }
  }, [isModal]);

  if (error) {
    navigate('/stage');
    showToast('warning', '오늘의 퀴즈 횟수가 소진되었어요.<br/> 비 정상적인 접근입니다.');
  }

  const quizList = typeof quiz?.body === 'string' ? JSON.parse(quiz.body) : [];

  const handleAnswer = (idx: number) => {
    const data = { id: quiz?.id, select: idx };
    axios
      .post(`${BASE_URL}/question/post`, data, {
        headers: {
          Authorization: `${token}`,
        },
      })
      .then(res => {
        setIsModal(true);
        setData(res.data.data.answer);
      })
      .catch(() => showToast('warning', '문제 푸는데 오류가 발생했습니다.'));
  };

  return (
    <Container>
      <Header
        onClick={() => {
          navigate('/stage');
        }}
        buttonText={' 〈 '}
        leftChild={<QuizLife />}
        rightChild={<Point />}
      />
      <MainBox>
        {isModal ? (
          <QuizModal
            data={data}
            quiz={quiz}
            setIsModal={setIsModal}
            isModal={isModal}
          />
        ) : (
          <ModalBox $isModal={isModal}>
            <ImgBox>
              <Img src={Leeca} />
            </ImgBox>
            <InfoModal>
              <Text>{quiz?.name}</Text>
              <ChoiceBox>
                {quizList.map((data: { row: string }, idx: number) => {
                  return (
                    <Choice
                      onClick={() => handleAnswer(idx + 1)}
                      key={idx}
                    >
                      <h1>{idx + 1}</h1>
                      <p>{data.row}</p>
                    </Choice>
                  );
                })}
              </ChoiceBox>
            </InfoModal>
          </ModalBox>
        )}
      </MainBox>
    </Container>
  );
};

export default Quiz;

const MainBox = styled.div`
    width:100%;
    height: 100%;
    background-image: url(${quizbackground});
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const ModalBox = styled.div<{ $isModal: boolean }>`
    width: 100%;
    ${({ $isModal }) => css`
    animation: ${$isModal ? fadeOut : fadeIn} 1s ease-in-out forwards;
  `}
`;

const InfoModal = styled.div`
    border-radius: 20px;
    width: 90%;
    background-color: #F9F9F9;
    border: 1px solid #f2f2f2;
    padding:20px;
    margin: 0 auto;
    position: relative;
`;

const ImgBox = styled.div`
    display: flex;
    justify-content: center;
`;

const Img = styled.img`
  position: relative;
  top: 50px;
`;

const Text = styled.p`
    font-size: ${props => props.theme.font.size.quizHeader2};
    font-weight: ${props => props.theme.font.weight.bold};
    margin-bottom: 20px;
    line-height: 1.3;
    display: flex;
    text-align: center;
    `;

const ChoiceBox = styled.div`
    display: flex;
    flex-direction: column;
    height:50%;
    color : ${props => props.theme.colors.text.darkGray};
    font-size : ${props => props.theme.font.size.body};
    font-weight: ${props => props.theme.font.weight.bold};
`;

const Choice = styled.div`
    padding:20px;
    border-radius: 15px;
    margin-bottom: 15px;
    background-color: #fff;
    display: flex;
    line-height: 1.3;
    cursor: pointer; 

    h1{
        width:10%;
    }
    p{
        width:90%;
        text-align: left;
    }

    @media(hover: hover) and (pointer: fine) {
      &:hover {
        background-color: #23A1F8;
        color:#fff;
    }
    }

`;
