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
          className='point'
        />
      </PriceBox>
    </Container>
  );
}

const Container = styled.div`
  width:45%;
  height:30%;
  margin: 7px;
`;

const ImageBox = styled.div`
  border: 1px solid black;
  height: 70%;
  border-radius: 10px;
`;

const Text = styled.div`
  height: 15%;
  display: flex;
  align-items: center;
`;

const PriceBox = styled.div`
  height: 15%;
  display: flex;
  align-items: center;

  .point{
    margin-left: 10px;
  }
  
`;
