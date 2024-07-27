import styled from 'styled-components';
import { Container } from '../share/utils/GlobalStyle';
import Grass_Land from '../assets/Grass_Land.png';
import CharacterForm from '../components/CharacterForm';
import Tree_Pola from '../assets/Tree_Pola.png';
import Quokka_Lock from '../assets/Quokka_Lock.png';
import RedPanda_Lock from '../assets/RedPanda_Lock.png';
import GreenTurtle_Lock from '../assets/GreenTurtle_Lock.png';
import Koala_Lock from '../assets/Koala_Lock.png';

import { useState } from 'react';

const characters = [Tree_Pola, Quokka_Lock, RedPanda_Lock, GreenTurtle_Lock, Koala_Lock];

const CharacterSelection = () => {
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  return (
    <Container>
      <Wrapper>
        <Text>
          <span>성장시킬 동물을 선택해주세요!</span>
        </Text>
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

const Wrapper = styled.div`
  position: relative;
  background-color: #E1F3F4;
  width: 100%;
  height: 100vh;
  background-image: url(${Grass_Land});
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
  width: 50%;
  height: auto;
`;

const Text = styled.div`
  border: 1px solid #FFFFFF;
  color: ${props => props.theme.colors.text.white};
  font-weight: ${props => props.theme.font.weight.bold};
  border-radius: 20px;
  padding: 7px 15px;
  position: absolute;
  letter-spacing: -0.03rem;
  top: 10%;`;
