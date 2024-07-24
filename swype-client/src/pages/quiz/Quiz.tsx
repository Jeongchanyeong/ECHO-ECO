import { Container } from '../../share/utils/GlobalStyle';
import styled from 'styled-components';
import Leeca from '../../assets/LeeCa.png';
import Header from '../../components/common/Header';
import quizbackground from '../../assets/quizbackground.png';
import QuizLife from '../../components/QuizLife';
import Point from '../../components/Point';
import { useNavigate } from 'react-router-dom';

export default function Quiz() {
  const navigate = useNavigate();
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
        <ModalBox>
          <ImgBox>
            <Img src={Leeca} />
          </ImgBox>
          <InfoModal>
            <Text>가뭄은 기상이변의 한 예시로 볼 수 있을까요?</Text>
            <ChoiceBox>
              <Choice>
                <h1>A</h1>
                <p>열대 나무</p>
              </Choice>
              <Choice>
                <h1>B</h1>
                <p>선인장</p>
              </Choice>
              <Choice>
                <h1>C</h1>
                <p>툰드라 이끼</p>
              </Choice>
              <Choice>
                <h1>D</h1>
                <p>사막 풀</p>
              </Choice>
            </ChoiceBox>
            {/* OX 버전 조건부 스타일 예정*/}
            {/* <ButtonBox>
              <ButtonO>O</ButtonO>
              <ButtonX>X</ButtonX>
            </ButtonBox> */}
          </InfoModal>
        </ModalBox>
      </MainBox>
    </Container>
  );
}

const MainBox = styled.div`
    width:100%;
    height: 100%;
    background-image: url(${quizbackground});
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
`;

const ModalBox = styled.div`
    width: 100%; 
`;

const InfoModal = styled.div`
    border-radius: 20px;
    width: 90%;
    background-color: #F9F9F9;
    border: 1px solid #f2f2f2;
    padding:30px 30px 40px 30px;
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
    margin-bottom: 50px;
    line-height: 1.3;
`;

const ButtonBox = styled.div`
    display: flex;
    justify-content: center;
`;

const ButtonO = styled.button`
    background-color: #23A1F8;
    margin-right: 20px;
    font-size: 9rem;
    font-weight: 800;
    color:#fff;
    width:150px;
    height: 150px;
    border-radius : 20px;
`;

const ButtonX = styled.button`
    background-color: #F25A6F;
    font-size: 9rem;
    font-weight: 800;
    color:#fff;
    width:150px;
    height: 150px;
    border-radius : 20px;
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
    h1{
        width:10%;
    }
    p{
        width:90%;
        text-align: center;
    }

    &:hover {
        background-color: #23A1F8;
        color:#fff;
    }
    cursor: pointer; 
`;
