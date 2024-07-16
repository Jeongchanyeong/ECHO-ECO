import styled from 'styled-components';
import ItemCard from '../../components/ItemCard';
import { Container } from '../../share/utils/GlobalStyle';
import Header from '../../components/common/Header';
import { getCookie } from '../../cookie';

export default function StoreMain() {
  console.log(getCookie('Authorization'));

  return (
    <>
      <Container>
        <Header />
        <MainBox>
          <GridBox>
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
          </GridBox>
        </MainBox>
      </Container>
    </>
  );
}

const MainBox = styled.div`
  padding: 15px;
  margin-top: 50px;
  height : 100%;
`;

const GridBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content : center;
`;
