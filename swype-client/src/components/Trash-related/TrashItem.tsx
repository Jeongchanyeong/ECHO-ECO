import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const Wrapper = styled.div<{ top: string; left: string }>`
    position: absolute;
    top: ${({ top }) => top};
    left: ${({ left }) => left};
  
    img {
      width: 120%;
      height: auto;
    }
  `;

interface TrashItemProps {
  index: number;
  item: {
    src: string;
    alt: string;
    top: string;
    left: string;
  };
}

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
