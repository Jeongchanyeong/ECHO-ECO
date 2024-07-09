import styled from 'styled-components';
import { Container } from '../common/GlobalStyle';

import Polluted_Land from '../assets/trash/Polluted_Land.png';
import Polluted_Water from '../assets/trash/Polluted_Water.png';
import Trash_Pola from '../assets/trash/Trash_Pola.png';
import Header from '../common/Header';

import Can from '../assets/trash/Can.png';
import Mask from '../assets/trash/Mask.png';
import PlasticBag from '../assets/trash/PlasticBag.png';
import Trash_Can from '../assets/trash/Trash_Can.png';

import { DragDropContext, Droppable } from 'react-beautiful-dnd';

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
  top: 10%;
  `;

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

const TrashWideWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 20%;
  overflow: hidden;
  z-index: 1;
`;

const TrashPile = styled.div`
  display: flex;
`;

const TrashWrapper = styled.div<{ top: string; left: string }>`
  position: absolute;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  img {
    width: 100%;
    height: auto;
  }
`;

const TrashCanWrapper = styled.div`
margin-left: 15%;
`;

const TrashCanWideWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 20%;
  z-index: 1;
  
  display: flex;
  align-items: center;
  justify-content: center;
`;

const trashItems = [
  { id: '1', src: PlasticBag, alt: 'Plastic Bag', top: '15%', left: '10%' },
  { id: '2', src: Can, alt: 'Can', top: '15%', left: '80%' },
  { id: '3', src: Mask, alt: 'Mask', top: '60%', left: '30%' },
];

const PollutedStage = () => {
  const onDragEnd = () => {};
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

        <DragDropContext onDragEnd={onDragEnd}>
          <TrashWideWrapper>
            <TrashPile>
              {trashItems.map(trash => (
                <TrashWrapper
                  key={trash.id}
                  top={trash.top}
                  left={trash.left}
                >
                  <img
                    src={trash.src}
                    alt={trash.alt}
                  />
                </TrashWrapper>
              ))}
            </TrashPile>
          </TrashWideWrapper>
          <TrashCanWideWrapper>
            <TrashCanWrapper>
              <img src={Trash_Can} />
            </TrashCanWrapper>
          </TrashCanWideWrapper>
        </DragDropContext>
      </Wrapper>
    </Container>
  );
};

export default PollutedStage;
