import styled from 'styled-components';
import Trash_Can from '../../assets/trash/Trash_Can.png';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 20%;
  z-index: 1;
  
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TrashCanWrapper = styled.div`

margin-left: 15%;
`;

const TrashCan = () => {
  return (
    <Wrapper>
      <TrashCanWrapper>
        <img src={Trash_Can} />
      </TrashCanWrapper>
    </Wrapper>
  );
};

export default TrashCan;
