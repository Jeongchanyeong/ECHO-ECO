import styled from 'styled-components';
import ItemCard from '../components/ItemCard';
export default function StoreMain() {
  return (
    <>
      <Container>
        <GridBox>
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
        </GridBox>
      </Container>
    </>
  );
}

const Container = styled.div`
  max-width: 480px;
  margin: 0 auto;
  height: 100vh;
  padding: 15px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  margin-top: 50px;
`;

const GridBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content : center;
`;
