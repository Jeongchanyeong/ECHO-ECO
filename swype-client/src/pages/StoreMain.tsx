import styled from 'styled-components';
import ItemCard from '../components/ItemCard';

export default function StoreMain() {
  return (
    <Container>
      <Header></Header>
      <GridBox>
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </GridBox>
    </Container>
  );
}

const Container = styled.div`
  max-width: 480px;
  border: 1px solid black;
  margin: 0 auto;
  height: 100vh;
  padding: 15px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

const Header = styled.div`
  height: 10%;
  background-color: gainsboro;
  flex-shrink: 0; 
`;

const GridBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content : center;
`;
