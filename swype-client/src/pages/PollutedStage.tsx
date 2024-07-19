import styled from 'styled-components';

import { Container } from '../share/utils/GlobalStyle';
import Header from '../components/common/Header';
import TrashItem from '../components/Trash-related/TrashItem';
import TrashCan from '../components/Trash-related/TrashCan';

import Polluted_Land from '../assets/trash/Polluted_Land.png';
import Polluted_Water from '../assets/trash/Polluted_Water.png';
import Trash_Pola from '../assets/trash/Trash_Pola.png';

import { useState } from 'react';
import { DragDropContext, DropResult, Droppable } from 'react-beautiful-dnd';

import { useRecoilState } from 'recoil';
import { draggableItemsState } from '../share/recoil/dndAtoms';
import Point from '../components/Point';
import { useNavigate } from 'react-router-dom';

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

const PollutedWater = styled.div`
  display: flex;
  align-items: flex-end;
  position: absolute;
  width: 100%;
  z-index: 1;
  opacity: 0.4;

  img {
    width: 100%;
    bottom: 0;
    height: auto;
  }
`;

const TrashWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 50%;
  overflow: hidden;
  z-index: 1;
`;

const Modal = styled.div`
  background: white;
  border-radius: 5px;
  padding: 16px;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
  z-index: 1;
`;

const PollutedStage = () => {
  const [trashItems, setTrashItems] = useRecoilState(draggableItemsState);
  const [TrashCanVisible, setTrashCanVisible] = useState(false);
  const [ModalVisible, setModalVisible] = useState(false);

  const onDragStart = () => {
    setTrashCanVisible(true);
  };

  const onDragEnd = (result: DropResult) => {
    setTrashCanVisible(false);

    if (!result.destination) {
      return;
    }

    if (result.destination.droppableId === 'trash-can') {
      const items = Array.from(trashItems);
      items.splice(result.source.index, 1);
      setTrashItems(items);

      if (items.length === 0) {
        setModalVisible(true);
      }
    }
  };
  const navigate = useNavigate();
  return (
    <Container>
      <Header
        onClick={() => {
          navigate('/stage');
        }}
        buttonText={' 〈 '}
        rightChild={<Point />}
      />
      <Wrapper>
        <Text>
          <span>쓰레기를 드래그하여 휴지통에 넣어주세요!</span>
        </Text>
        <PollutedWater>
          <img
            src={Polluted_Water}
            alt='Polluted Water'
          />
        </PollutedWater>
        <CharacterImageWrapper>
          <img
            src={Trash_Pola}
            alt='Trash Pola'
          />
        </CharacterImageWrapper>

        <DragDropContext
          onDragStart={onDragStart}
          onDragEnd={onDragEnd}
        >
          <TrashWrapper>
            <Droppable droppableId='trashs'>
              {provided => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {trashItems.map((item, index) => (
                    <TrashItem
                      key={index}
                      item={item}
                      index={index}
                    />
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>

            <TrashCan TrashCanVisible={TrashCanVisible} />
          </TrashWrapper>
        </DragDropContext>
      </Wrapper>

      {ModalVisible && (
        <Modal>
          <h1>쓰레기 치우기 완료~</h1>
          <button onClick={() => setModalVisible(false)}> go to stage page</button>
        </Modal>
      )}
    </Container>
  );
};

export default PollutedStage;
