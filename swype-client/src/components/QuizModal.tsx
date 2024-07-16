import styled from 'styled-components';
import Leeca from '../../assets/LeeCa.png';
import { Container } from '../share/utils/GlobalStyle';

export default function QuizModal() {
  return (
    <Container>
      <ModalBox>
        <ImgBox>
          <Img src={Leeca} />
        </ImgBox>
        <InfoModal>
          <Title>정답입니다!</Title>
          <Point>획득 포인트 + 10</Point>
          <Info>
            북극에 사는 북극곰의 먹이는 뤼카이며 북극곰은 귀엽고 북극곰은 흰색이다. 멸종위기 종
            북극곰을 지켜주자
          </Info>
          <ButtonBox>
            <ButtonNext>다음 문제 풀러가기</ButtonNext>
            <ButtonFinish>영상 보고 퀴즈 더 풀기</ButtonFinish>
          </ButtonBox>
        </InfoModal>
      </ModalBox>
    </Container>
  );
}

const ModalBox = styled.div`
    margin: 100px auto;
    width:80%;
`;

const InfoModal = styled.div`
    border-radius: 20px;
    width: 100%;
    background-color: #F9F9F9;
    border: 1px solid #f2f2f2;
    padding:20px;

`;

const ImgBox = styled.div`
    display: flex;
    justify-content: center;
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
    padding:20px;
    background-color: #fff;
    margin-bottom: 20px;
    border-radius: 15px;
`;

const Point = styled.p`
    color: ${props => props.theme.colors.text.darkGray};
    font-size: ${props => props.theme.font.size.quizHeader2};
    font-weight: ${props => props.theme.font.weight.bold};
    margin-left: 10px;
    padding:20px;
    text-align: center;
`;

const ButtonBox = styled.div`
    display: flex;
    flex-direction: column;
`;

const ButtonNext = styled.button`
    border-radius: 10px;
    color : #eeeeee;
    background-color : ${props => props.theme.colors.bgColor.blue};
    padding:15px;
    text-align: center;
    letter-spacing: -0.03rem;
    transition: all 0.2s;
    font-size: ${props => props.theme.font.size.buttonText};
    font-weight: ${props => props.theme.font.weight.bold};
    margin-bottom: 10px;
`;

const ButtonFinish = styled.button`
    border-radius: 10px;
    color : ${props => props.theme.colors.text.darkGray};
    background-color : #F9F9F9;
    padding:15px;
    text-align: center;
    letter-spacing: -0.03rem;
    transition: all 0.2s;
    font-size: ${props => props.theme.font.size.buttonText};
    font-weight: ${props => props.theme.font.weight.bold};
`;
