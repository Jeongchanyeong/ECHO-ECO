import styled from 'styled-components';
import { Container } from '../../share/utils/GlobalStyle';
import Button from '../common/Button';
import { DetailItem } from '../../model/storeType';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userData } from '../../share/recoil/userAtom';
import { FaArrowRightLong } from 'react-icons/fa6';
import { BASE_URL } from '../../share/utils/OAuth';
import axios from 'axios';
import { getCookie } from '../../cookie';
interface ItemModalProps {
  item?: DetailItem;
}

const ItemModal: React.FC<ItemModalProps> = ({ item }) => {
  const user = useRecoilValue(userData);
  const navigate = useNavigate();
  const token = getCookie('Authorization');

  const buyItem = () => {
    axios
      .post(
        `${BASE_URL}/item/buy`,
        { itemId: item?.itemResponse.id },
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      )
      .then(res => {
        console.log(res);
        navigate('/store');
      }).catch;
  };

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
            <PointText>{<FaArrowRightLong />}</PointText>
            <UpPointText>Lv.{Number(item?.itemResponse.levelUp) + Number(user?.level)}</UpPointText>
          </LevelBox>

          <Button
            $bgColor='blue'
            $textColor='white'
            width='100%'
            height='50px'
            onClick={buyItem}
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
    box-shadow: 0 10px 20px 0 rgb(0 0 0 / 20%);
    border-radius: 20px;
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
