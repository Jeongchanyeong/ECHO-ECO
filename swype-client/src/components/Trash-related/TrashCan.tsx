import styled from 'styled-components';
import Trash_Can from '../../assets/trash/Trash_Can.png';
import { Droppable } from 'react-beautiful-dnd';

const Wrapper = styled.div<TrashCanProps>`
  position: fixed;
  bottom: 10%;
  left: 46.5%;
  transform: translateX(-50%);
  width: 40%;
  height: 70%;
  z-index: 1;

  visibility: ${({ TrashCanVisible }) => (TrashCanVisible ? 'visible' : 'hidden')};
  opacity: ${({ TrashCanVisible }) => (TrashCanVisible ? '1' : '0')};
  
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
  transform: ${({ TrashCanVisible }) => (TrashCanVisible ? 'translateY(90%)' : 'translateY(95%)')};
`;

interface TrashCanProps {
  TrashCanVisible: boolean;
}

const TrashCan = ({ TrashCanVisible }: TrashCanProps) => (
  <Droppable droppableId='trash-can'>
    {provided => (
      <Wrapper
        ref={provided.innerRef}
        {...provided.droppableProps}
        TrashCanVisible={TrashCanVisible}
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
