import styled from 'styled-components';
import Can from '../../assets/trash/Can.png';
import Mask from '../../assets/trash/Mask.png';
import PlasticBag from '../../assets/trash/PlasticBag.png';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 20%;
  
  overflow: hidden;
  z-index: 1;
`;

const TrashPile = styled.div`
  display: flex;
  
  
`;

const TrashWrapper = styled.div`
  position: absolute;
  img {
    width: 100%;
    height: auto;
  }
`;

const PlasticBagWrapper = styled(TrashWrapper)`
  top: 15%;
  left: 10%;
`;

const CanWrapper = styled(TrashWrapper)`
  top: 15%;
  left: 80%;
`;

const MaskWrapper = styled(TrashWrapper)`
  top: 60%;
  left: 30%;
`;

const TrashItem = () => {
  return (
    <Wrapper>
      <TrashPile>
        <PlasticBagWrapper>
          <img
            src={PlasticBag}
            alt='Plastic Bag'
          />
        </PlasticBagWrapper>
        <CanWrapper>
          <img
            src={Can}
            alt='Can'
          />
        </CanWrapper>
        <MaskWrapper>
          <img
            src={Mask}
            alt='Mask'
          />
        </MaskWrapper>
      </TrashPile>
    </Wrapper>
  );
};

export default TrashItem;
