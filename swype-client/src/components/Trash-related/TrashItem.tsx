import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';
import { TrashItemProps } from '../../model/trashType';

const Wrapper = styled.div<{ top: string; left: string; width: string }>`
    position: absolute;
    top: ${({ top }) => top};
    left: ${({ left }) => left};
    
    img {
      width: ${({ width }) => width};
      height: auto;
    }
  `;

const TrashItem = ({ item, index }: TrashItemProps) => (
  <Draggable
    key={index}
    draggableId={`item-${index}`}
    index={index}
  >
    {provided => (
      <Wrapper
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        top={item.top}
        left={item.left}
        width={item.width}
      >
        <img
          src={item.src}
          alt={item.alt}
        />
      </Wrapper>
    )}
  </Draggable>
);

export default TrashItem;
