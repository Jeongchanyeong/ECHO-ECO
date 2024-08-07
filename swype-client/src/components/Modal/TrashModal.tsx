import styled from 'styled-components';
import Button from '../common/Button';
import { useNavigate } from 'react-router-dom';

interface TrashModalProps {
  addPoint: number;
  afterPoint: number;
}

const TrashModal = ({ addPoint, afterPoint }: TrashModalProps) => {
  const navigate = useNavigate();
  return (
    <ModalBox>
      <InfoModal>
        <Title>
          <span>쓰레기 줍기 완료!</span>
        </Title>

        <LevelBox>
          <PointText>
            <span>
              획득 포인트 : <span>+ {addPoint}P</span>
            </span>
          </PointText>
          <CurrentPointBox>
            <PointText>현재 포인트 : </PointText>
            <CurrentPointText>
              <span>{afterPoint} P</span>
            </CurrentPointText>
          </CurrentPointBox>
        </LevelBox>

        <Button
          onClick={() => {
            navigate('/stage');
          }}
          $bgColor='blue'
          $textColor='white'
          width='100%'
          height='50px'
        >
          확인
        </Button>
      </InfoModal>
    </ModalBox>
  );
};

export default TrashModal;

const ModalBox = styled.div`
    margin: 100px auto;
    width:80%;
    position: fixed;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    max-width: 400px; 
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
