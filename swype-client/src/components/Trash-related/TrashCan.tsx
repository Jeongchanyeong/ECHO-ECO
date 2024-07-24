import styled from 'styled-components';
import Trash_Can from '../../assets/trash/Trash_Can.png';
import { Droppable } from 'react-beautiful-dnd';

const Wrapper = styled.div<TrashCanProps>`
  position: absolute;
  bottom: 30%;
  left: 33%;
  transform: translateX(-50%);
  width: 40%;
  height: 70%;
  z-index: 1;

  visibility: ${({ trashCanVisible }) => (trashCanVisible ? 'visible' : 'hidden')};
  opacity: ${({ trashCanVisible }) => (trashCanVisible ? '1' : '0')};
  
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
  transform: ${({ trashCanVisible }) => (trashCanVisible ? 'translateY(90%)' : 'translateY(95%)')};
`;

interface TrashCanProps {
  trashCanVisible: boolean;
}

const TrashCan = ({ trashCanVisible }: TrashCanProps) => (
  <Droppable droppableId='trash-can'>
    {provided => (
      <Wrapper
        ref={provided.innerRef}
        {...provided.droppableProps}
        trashCanVisible={trashCanVisible}
      >
        <img
          src={Trash_Can}
          alt='Trash Can'
        />
        {provided.placeholder}
      </Wrapper>
    )}
  </Droppable>
);

export default TrashCan;
