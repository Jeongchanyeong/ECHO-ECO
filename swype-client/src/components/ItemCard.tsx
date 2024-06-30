import styled from 'styled-components';
import StorePoint from '../assets/StorePoint.png';

export default function ItemCard() {
  return (
    <Container>
      <ImageBox></ImageBox>
      <Text>북극곰 먹이</Text>
      <PriceBox>
        <p className='priceText'>2,500</p>
        <img
          src={StorePoint}
          alt='포인트'
          className='point'
        />
        <span className='level'>Lv +3</span>
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
  font-size: 0.875em;
  letter-spacing: -3%;
`;

const PriceBox = styled.div`
  display: flex;
  align-items: center;
  .priceText{
    font-weight: ${props => props.theme.fontWeight.extraBold};
    font-size: 1.0625em // 17px
  }
  .point{
    margin-left: 5px;
  }
  .level{
    color: ${props => props.theme.colors.text.gray};
    font-weight: ${props => props.theme.fontWeight.extraBold};
    font-size: 0.8125em; // 13px
    position: absolute;
    top:0;
    padding:10px;
  }
  
`;
