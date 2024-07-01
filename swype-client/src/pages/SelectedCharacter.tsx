import styled from 'styled-components';
import { Container } from '../common/GlobalStyle';
import CharacterPage_bg from '../assets/CharacterPage_bg.png';
import InfoModal from '../common/InfoModal';
import Pola from '../assets/Pola.png';
import Header from '../common/Header';

const Wrapper = styled.div`
  background-color: #E1F3F4;
  width: 100%;
  height: 100vh;
  background-image: url(${CharacterPage_bg});
  
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
  top: 20%;
  width: 100%;
  display: flex;
  justify-content: center;
  
`;

const CharacterImage = styled.img`
  width: 150px;
  height: auto;
`;

const SelectedCharacter = () => {
  return (
    <Container>
      <Header />
      <Wrapper>
        <CharacterImageWrapper>
          <CharacterImage src={Pola} />
        </CharacterImageWrapper>
        <InfoModal />
      </Wrapper>
    </Container>
  );
};

export default SelectedCharacter;
