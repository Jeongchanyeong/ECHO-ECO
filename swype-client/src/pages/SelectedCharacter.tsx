import styled from 'styled-components';
import { Container } from '../share/utils/GlobalStyle';
import Iceberg_Pola from '../assets/Iceberg_Pola.png';
import InfoModal from '../components/common/InfoModal';
import Frozen_Land from '../assets/Frozen_Land.png';

import Header from '../components/common/Header';

const Wrapper = styled.div`
  position: relative;
  background-color: #E1F3F4;
  width: 100%;
  height: 100vh;
  background-image: url(${Frozen_Land});
  
  background-repeat: no-repeat;
  background-position: center ;
  background-size: cover;
  
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

`;

const CharacterImageWrapper = styled.div`
  position: absolute;
  top: 40%;
  width: 100%;
  display: flex;
  justify-content: center;
  
`;

const CharacterImage = styled.img`
  width: 85%;
  height: auto;
`;

const SelectedCharacter = () => {
  return (
    <Container>
      <Header />
      <Wrapper>
        <CharacterImageWrapper>
          <CharacterImage src={Iceberg_Pola} />
        </CharacterImageWrapper>
        <InfoModal />
      </Wrapper>
    </Container>
  );
};

export default SelectedCharacter;
