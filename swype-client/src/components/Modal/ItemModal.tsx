import styled from 'styled-components';
import { Container } from '../../share/utils/GlobalStyle';
import Button from '../common/Button';
import { DetailItem } from '../../model/storeType';
import { useNavigate } from 'react-router-dom';
interface ItemModalProps {
  item?: DetailItem;
}

const ItemModal: React.FC<ItemModalProps> = ({ item }) => {
  const navigate = useNavigate();

  return (
    <Container>
      <ModalBox>
        <InfoModal>
          <Title>
            <text>{item?.itemResponse.name} 구매 완료</text>
          </Title>

          <Info>
            <text>{item?.itemResponse.description}</text>
          </Info>

          <ImgBox>
            <img
              src={item?.itemResponse.imageUrl}
              alt='ItemImg'
            />
          </ImgBox>

          <LevelBox>
            <PointText>Lv.{item?.itemResponse.levelUp} </PointText>
            <PointText>{'->'}</PointText>
            {/* 유저 정보 Recoil로 가져와서 나의 레벨 + 아이템 레벨 더해주기  */}
            <UpPointText>Lv.{item?.itemResponse.levelUp}</UpPointText>
          </LevelBox>

          <Button
            bgColor='blue'
            textColor='white'
            width='100%'
            height='50px'
            onClick={() => navigate('/store')}
          >
            확인
          </Button>
        </InfoModal>
      </ModalBox>
    </Container>
  );
};
export default ItemModal;
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
    margin: auto;
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
