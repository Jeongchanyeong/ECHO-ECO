import styled from 'styled-components';
import { Container } from '../common/GlobalStyle';
import TrashItem from '../components/Trash-related/TrashItem';
import TrashCan from '../components/Trash-related/TrashCan';

import Polluted_Land from '../assets/trash/Polluted_Land.png';
import Polluted_Water from '../assets/trash/Polluted_Water.png';
import Trash_Pola from '../assets/trash/Trash_Pola.png';
import Header from '../common/Header';

const Wrapper = styled.div`
  position: relative;
  background-color: #E1F3F4;
  width: 100%;
  height: 100vh;
  background-image: url(${Polluted_Land});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

const Text = styled.div`
  position: absolute;
  border: 1px solid #FFFFFF;
  color: ${props => props.theme.colors.text.white};
  font-weight: ${props => props.theme.font.weight.bold};
  border-radius: 20px;
  padding: 7px 15px;
  letter-spacing: -0.03rem;
  top: 10%;`;

const CharacterImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 27%;
  width: 100%;

`;

const CharacterImage = styled.img`
  width: 40%;
  height: auto;
`;

const PollutedWater = styled.div`
  display: flex;
  align-items: flex-end;
  position: absolute;
  
  width: 100%;
  
  z-index: 1;
  opacity: 0.4;


  img {
    width: 100%;
    bottom:0;
    height: auto;
    

  }
`;

const PollutedStage = () => {
  return (
    <Container>
      <Header />
      <Wrapper>
        <Text>
          <span>쓰레기를 드레그하여 휴지통에 넣어주세요!</span>
        </Text>
        <PollutedWater>
          <img
            src={Polluted_Water}
            alt='Polluted Water'
          />
        </PollutedWater>
        <CharacterImageWrapper>
          <CharacterImage
            src={Trash_Pola}
            alt='Trash Pola'
          />
        </CharacterImageWrapper>
        <TrashItem />
        <TrashCan />
      </Wrapper>
    </Container>
  );
};

export default PollutedStage;
