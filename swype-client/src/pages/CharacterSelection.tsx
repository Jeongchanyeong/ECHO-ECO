import styled from 'styled-components';
import { Container } from '../common/GlobalStyle';
import CharacterPage_bg from '../assets/CharacterPage_bg.png';
import CharacterForm from '../components/CharacterForm';
import Pola from '../assets/Pola.png';
import Quokka_Lock from '../assets/Quokka_Lock.png';
import RedPanda_Lock from '../assets/RedPanda_Lock.png';
import GreenTurtle_Lock from '../assets/GreenTurtle_Lock.png';
import Koala_Lock from '../assets/Koala_Lock.png';

import { useState } from 'react';
const Wrapper = styled.div`
  background-color: #E1F3F4;
  width: 100%;
  height: 100vh;
  background-image: url(${CharacterPage_bg});
  background-repeat: no-repeat;
  background-position: center;
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
  width: 170px;
  height: auto;
`;

const characters = [Pola, Quokka_Lock, RedPanda_Lock, GreenTurtle_Lock, Koala_Lock];

const CharacterSelection = () => {
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  return (
    <Container>
      <Wrapper>
        {selectedCharacter !== null ? (
          <CharacterImageWrapper>
            <CharacterImage src={characters[selectedCharacter]} />
          </CharacterImageWrapper>
        ) : null}

        <CharacterForm
          selectedCharacter={selectedCharacter}
          characterSelect={setSelectedCharacter}
        />
      </Wrapper>
    </Container>
  );
};

export default CharacterSelection;
