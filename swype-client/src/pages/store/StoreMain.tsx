import styled from 'styled-components';
import ItemCard from '../../components/ItemCard';
import { Container } from '../../share/utils/GlobalStyle';
import Header from '../../components/common/Header';
import Point from '../../components/Point';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function StoreMain() {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_APP_KEY}/item/list`)
      .then(response => {
        setItems(response.data.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <Container>
        <Header
          onClick={() => {
            navigate('/stage');
          }}
          buttonText={' 〈 '}
          title={'상점'}
          rightChild={<Point />}
        />
        <MainBox>
          <GridBox>
            {items.map(item => (
              <ItemCard item={item} />
            ))}
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
  overflow: auto;
`;

const GridBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content : center;
`;
