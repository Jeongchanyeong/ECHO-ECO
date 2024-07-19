import styled from 'styled-components';
import Leeca from '../../assets/LeeCa.png';
import { Container } from '../../share/utils/GlobalStyle';

export default function QuizModal() {
  return (
    <Container>
      <ModalBox>
        <ImgBox>
          <Img src={Leeca} />
        </ImgBox>
        <InfoModal>
<<<<<<< Updated upstream:swype-client/src/components/Modal/QuizModal.tsx
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
=======
          <Title>게임기 구매완료!</Title>
          <Info>심심할때는 ? 새로운 게임의 세계로!</Info>
          <ImageDiv>
            <ItemImage
              src={
                'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdUfE1T%2FbtsItS5k6jH%2FklaOWsPJsuhHXhhoaTrxKk%2Fimg.png'
              }
            ></ItemImage>
          </ImageDiv>

          <LevelBox>
            <BeforeLevel>Lv.1</BeforeLevel>
            <Icon>→</Icon>
            <NextLevel>Lv.3</NextLevel>
          </LevelBox>

          <Button
            bgColor='blue'
            textColor='white'
            width='100%'
            height='50px'
          >
            스테이지로 바로가기
          </Button>
>>>>>>> Stashed changes:swype-client/src/components/ItemModal.tsx
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
    background-color: #fff;
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
<<<<<<< Updated upstream:swype-client/src/components/Modal/QuizModal.tsx
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
=======
    margin: 10px 0px;
`;

const ImageDiv = styled.div`
  text-align: center;
  margin: 10px 0px;
`;

const ItemImage = styled.img`
  width: 40%;
  height: 40%;
`;

const LevelBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0px;
`;

const BeforeLevel = styled.p`
  font-size: ${props => props.theme.font.size.quizHeader2};
  font-weight: ${props => props.theme.font.weight.extraBold};
`;

const NextLevel = styled.p`
  color : #23a1f8;
  font-size: ${props => props.theme.font.size.quizHeader1};
  font-weight: ${props => props.theme.font.weight.extraBold};
`;

const Icon = styled.div`
  font-size: ${props => props.theme.font.size.quizHeader1};
  margin: 0px 10px;
>>>>>>> Stashed changes:swype-client/src/components/ItemModal.tsx
`;
