import styled from 'styled-components';
import { Container } from '../../share/utils/GlobalStyle';
import Button from '../common/Button';

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
    padding: 25px;
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

const LevelBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 25px 0px;
    gap: 20px;
`;

const CurrentPointBox = styled.div`
       display: flex;
`;

const PointText = styled.p`
    color: ${props => props.theme.colors.text.darkGray};
    font-size: ${props => props.theme.font.size.quizHeader2};
    font-weight: ${props => props.theme.font.weight.extraBold};
`;

const CurrentPointText = styled(PointText)`
    color: ${props => props.theme.colors.text.blue};
    padding-left: 10px; 
`;

const TrashModal = () => {
  return (
    <Container>
      <ModalBox>
        <InfoModal>
          <Title>
            <text>쓰레기 줍기 완료!</text>
          </Title>

          <LevelBox>
            <PointText>
              <text>
                획득 포인트 : <text>+ 20P</text>
              </text>
            </PointText>
            <CurrentPointBox>
              <PointText>현재 포인트 : </PointText>
              <CurrentPointText>
                <text>20 P</text>
              </CurrentPointText>
            </CurrentPointBox>
          </LevelBox>

          <Button
            bgColor='blue'
            textColor='white'
            width='100%'
            height='50px'
          >
            확인
          </Button>
        </InfoModal>
      </ModalBox>
    </Container>
  );
};

export default TrashModal;
