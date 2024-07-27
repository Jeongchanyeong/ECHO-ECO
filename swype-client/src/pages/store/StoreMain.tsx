import styled from 'styled-components';
import ItemCard from '../../components/ItemCard';
import { Container } from '../../share/utils/GlobalStyle';
import Header from '../../components/common/Header';
import Point from '../../components/Point';
import { useNavigate } from 'react-router-dom';
import { ItemList } from '../../model/storeType';
import { useQuery } from '@tanstack/react-query';
import { useGetItems } from '../../apis/item/getItems';

const StoreMain = () => {
  const navigate = useNavigate();

  const { data: items } = useQuery<ItemList[]>({
    queryKey: ['Item'],
    queryFn: useGetItems,
  });

  return (
    <>
      <Container>
        <Header
          onClick={() => {
            navigate('/stage');
          }}
          buttonText={'〈'}
          title={'상점'}
          rightChild={<Point />}
        />
        <MainBox>
          <GridBox>
            {items?.map(item => (
              <ItemCard
                item={item}
                key={item.id}
              />
            ))}
          </GridBox>
        </MainBox>
      </Container>
    </>
  );
};
export default StoreMain;

const MainBox = styled.div`
  padding: 15px;
  margin-top: 50px;
  height : 100%;
  overflow: auto;
`;

const GridBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content : center;
`;
