import styled from 'styled-components';
import { Container } from '../share/utils/GlobalStyle';
import Header from '../components/common/Header';
import TrashItem from '../components/Trash-related/TrashItem';
import TrashCan from '../components/Trash-related/TrashCan';

import Polluted_Land from '../assets/trash/Polluted_Land.png';
import Polluted_Water from '../assets/trash/Polluted_Water.png';
import Trash_Pola from '../assets/trash/Trash_Pola.png';

import { useEffect, useState } from 'react';
import { DragDropContext, DropResult, Droppable } from 'react-beautiful-dnd';

import { useRecoilState } from 'recoil';
import { draggableItemsState, initialTrashItemsState } from '../share/recoil/dndAtoms';
import Point from '../components/Point';
import { useNavigate } from 'react-router-dom';
import TrashModal from '../components/Modal/TrashModal';
import { useMutation } from '@tanstack/react-query';
import { trashPoint } from '../apis/trashPoint';
// import { useTrashImg } from '../share/queries/useTrashImg';

const PollutedStage = () => {
  const [trashItems, setTrashItems] = useRecoilState(draggableItemsState);
  const [trashCanVisible, setTrashCanVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [addPoint, setAddPoint] = useState(0);
  const [afterPoint, setAfterPoint] = useState(0);
  // const { data, error, isLoading } = useTrashImg();

  const mutation = useMutation({
    mutationFn: trashPoint,

    onSuccess: data => {
      console.log('res:', data);

      setAddPoint(data.data.addPoint);
      setAfterPoint(data.data.afterPoint);

      setModalVisible(true);
    },

    onError: error => {
      console.error(error);
    },
  });

  useEffect(() => {
    setTrashItems(initialTrashItemsState);
  }, []);

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
        mutation.mutate();
        setModalVisible(true);
      }
    }
  };
  // if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>Error loading images</div>;

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
        {/* <Wrapper backgroundImage={data.backgroundImage}> Wrapper 대체 예정 */}
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
          <Info>
            <LevelBox>
              <span>Lv1</span>
            </LevelBox>
            <NameBox>
              <span>폴라</span>
            </NameBox>
          </Info>
          <img
            src={Trash_Pola}
            // src={data.characterImage} Trash_Pola 대체 예정
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

            <TrashCan trashCanVisible={trashCanVisible} />
          </TrashWrapper>
        </DragDropContext>
        {modalVisible && (
          <TrashModal
            addPoint={addPoint}
            afterPoint={afterPoint}
          />
        )}
      </Wrapper>
    </Container>
  );
};

export default PollutedStage;

// const Wrapper = styled.div//<{ backgroundImage: string }>`
//   position: relative;
//   background-color: #E1F3F4;
//   width: 100%;
//   height: 100vh;
//   background-image: url(${props => props.backgroundImage});
//   background-repeat: no-repeat;
//   background-position: center;
//   background-size: cover;
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-end;
//   align-items: center;
//                            Wrapper 대체 예정
// `;

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

const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 3% 6%;
`;

const LevelBox = styled.div`
  background-color: ${props => props.theme.colors.bgColor.blue};
  border-radius: 13px;
  padding: 5px 11px;
  margin-right: 10px;
  color: ${props => props.theme.colors.text.white};
  font-size: ${props => props.theme.font.size.choose};
`;

const NameBox = styled.div`
  font-weight: ${props => props.theme.font.weight.extraBold};
  font-size: ${props => props.theme.font.size.buttonText};
`;

const CharacterImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 20%;
  gap:10px;
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
