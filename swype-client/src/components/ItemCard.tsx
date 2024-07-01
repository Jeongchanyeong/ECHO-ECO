import styled from 'styled-components';
import StorePoint from '../assets/StorePoint.png';

export default function ItemCard() {
  return (
    <Container>
      <ImageBox></ImageBox>
      <Text>북극곰 먹이</Text>
      <PriceBox>
        <p>2,500</p>
        <img
          src={StorePoint}
          alt='포인트'
        />
        <span>Lv +3</span>
      </PriceBox>
    </Container>
  );
}

const Container = styled.div`
  width:45%;
  height:30%;
  margin: 7px;
  position: relative;
`;

const ImageBox = styled.div`
  height: 70%;
  border-radius: 10px;
  background-color: #F5F5F5;
  margin-bottom: 4px;
`;

const Text = styled.div`
  height: 15%;
  display: flex;
  align-items: center;
  font-weight: ${props => props.theme.fontWeight.bold};
  font-size: 0.875rem;
`;

const PriceBox = styled.div`
  display: flex;
  align-items: center;
  p{
    font-weight: ${props => props.theme.fontWeight.extraBold};
    font-size: 1.0625rem // 17px
  }
  img{
    margin-left: 5px;
  }
  span{
    color: ${props => props.theme.colors.text.gray};
    font-weight: ${props => props.theme.fontWeight.extraBold};
    font-size: 0.8125rem; // 13px
    position: absolute;
    top:0;
    padding:10px;
  }
  
`;