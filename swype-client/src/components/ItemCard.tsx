import styled from 'styled-components';
import StorePoint from '../assets/StorePoint.png';
import { useNavigate } from 'react-router-dom';
import { ItemList } from '../model/storeType';

type ItemCardProps = {
  item: ItemList;
};

const ItemCard: React.FC<ItemCardProps> = ({ item }) => {
  const navigate = useNavigate();
  return (
    <Container onClick={() => navigate(`/store/${item.id}`)}>
      <ImageBox>
        <img
          src={item.imageUrl}
          alt='아이템'
        />
      </ImageBox>
      <Text>{item.name}</Text>
      <PriceBox>
        <p>{item.price}</p>
        <img
          src={StorePoint}
          alt='포인트'
        />
        <span>Lv +{item.levelUp}</span>
      </PriceBox>
    </Container>
  );
};

export default ItemCard;

const Container = styled.div`
  width:45%;
  height:30%;
  margin: 7px;
  position: relative;
`;

const ImageBox = styled.div`
  height: 70%;
  border-radius: 10px;
  margin-bottom: 4px;

  img{
    width: 100%;
    height: 100%;
    border-radius: 10px;
    background-size: cover;
  }
`;

const Text = styled.div`
  height: 15%;
  display: flex;
  align-items: center;
  font-weight: ${props => props.theme.font.weight.bold};
  font-size: ${props => props.theme.font.size.choose};
`;

const PriceBox = styled.div`
  display: flex;
  align-items: center;
  p{
    font-weight: ${props => props.theme.font.weight.extraBold};
    font-size: ${props => props.theme.font.size.priceText};
  }
  img{
    margin-left: 5px;
  }
  span{
    color: ${props => props.theme.colors.text.gray};
    font-weight: ${props => props.theme.font.weight.extraBold};
    font-size: ${props => props.theme.font.size.levelText};
    position: absolute;
    top:0;
    padding:10px;
  }
  
`;
