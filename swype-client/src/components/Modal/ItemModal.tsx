import styled from 'styled-components';
import { Container } from '../../share/utils/GlobalStyle';
import Button from '../common/Button';
import Leeca from '../../assets/LeeCa.png';

export default function ItemModal() {
  return (
    <Container>
      <ModalBox>
        <InfoModal>
          <Title>
            <text>게임기 구매 완료</text>
          </Title>

          <Info>
            <text>심심할 때는? 새로운 게임의 세계로!</text>
          </Info>

          <ImgBox>
            <img
              src={Leeca}
              alt='ItemImg'
            />
          </ImgBox>

          <LevelBox>
            <PointText>Lv.1 </PointText>
            <PointText>{'->'}</PointText>
            <UpPointText>Lv.3</UpPointText>
          </LevelBox>

          <Button
            bgColor='blue'
            textColor='white'
            width='100%'
            height='50px'
          >
            스테이지로 바로가기
          </Button>
        </InfoModal>
      </ModalBox>
    </Container>
  );
}
const ImgBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;  
    margin-top: 15px;
img{
  width: 100px;
  height: 100px;

}

`;

const ModalBox = styled.div`
    margin: 100px auto;
    width:80%;
`;

const InfoModal = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    width: 100%;
    background-color: #ffffff;
    border: 1px solid #f0f0f0;
    padding:20px;
    gap: 10px;


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
    line-height: 1.3;
    color: ${props => props.theme.colors.text.darkGray};
    font-size: ${props => props.theme.font.size.levelText};
   font-weight: ${props => props.theme.font.weight.bold};
`;

const LevelBox = styled.div`
    display: flex;
    justify-content: center;
    margin: 25px 0px;
    gap: 20px;
`;

const PointText = styled.p`
    color: ${props => props.theme.colors.text.black};
    font-size: ${props => props.theme.font.size.quizHeader2};
    font-weight: ${props => props.theme.font.weight.extraBold};
`;

const UpPointText = styled(PointText)`
    color: ${props => props.theme.colors.text.blue};
   
`;
