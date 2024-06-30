import styled from 'styled-components';
import Button from '../common/Button';
import Pola from '../assets/Pola.png';
import Quokka_Lock from '../assets/Quokka_Lock.png';
import RedPanda_Lock from '../assets/RedPanda_Lock.png';
import GreenTurtle_Lock from '../assets/GreenTurtle_Lock.png';
import Koala_Lock from '../assets/Koala_Lock.png';

const Form = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;   
  flex-direction: column;
  


  background-color: ${props => props.theme.colors.text.white};
  position: absolute;
  bottom: 0;
  width: 100%;
  max-width: 480px;
  height: 50%;
  border: 1px solid rgb(242, 242, 242);
  border-radius: 40px 40px 0px 0px;
`;

const CharacterButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-items: center; 
  align-items: center;
  justify-content: center;

  padding: 40px 20px 20px;  
  width: 100%;
  height: 100%;
  row-gap: 6%;
  column-gap: 3%;
  
  

  & > button {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    width: 100%;
    height: 100%;
    border: 1px solid #E2E2E2;
    box-sizing: border-box;
  }
`;

const SubmitButton = styled.div`
    display: flex;
    justify-content: center;

    width: 100%;    
    height: 50%;
    padding-top: 16px;
`;

const CharacterImg = styled.img`
    width: 50%;
    flex: 3;
  
`;
const NameWrapper = styled.div`
    flex: 1;
    width: 100%;
    background-color: #f2f2f2;
    display: flex;
    align-items: center;
    justify-content: center;
  

`;

const Name = styled.div`
  font-size: ${props => props.theme.font.size.body};
  color: ${props => props.theme.colors.text.gray};
  
`;

const characters = [
  { src: Pola, name: '폴라' },
  { src: Quokka_Lock, name: '쿼카' },
  { src: RedPanda_Lock, name: '붉은 팬더' },
  { src: GreenTurtle_Lock, name: '바다 거북' },
  { src: Koala_Lock, name: '코알라' },
];

const CharacterForm = ({ selectedCharacter, characterSelect }: any) => {
  return (
    <Form>
      <CharacterButtonWrapper>
        {characters.map((character, index) => (
          <Button
            key={index}
            bgColor={selectedCharacter === index ? 'blue' : 'google'}
            width='80%'
            height='80%'
            textColor='black'
            onClick={index === 0 ? () => characterSelect(index) : undefined}
          >
            <CharacterImg src={character.src} />
            <NameWrapper>
              <Name>{character.name}</Name>
            </NameWrapper>
          </Button>
        ))}
      </CharacterButtonWrapper>
      <SubmitButton>
        <Button
          bgColor='blue'
          width='90%'
          height='40%'
          textColor='lightGray'
          onClick={() => {}}
        >
          확인
        </Button>
      </SubmitButton>
    </Form>
  );
};
export default CharacterForm;
