import StorePoint from '../assets/StorePoint.png';
import styled from 'styled-components';

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  background-color: ${props => props.theme.colors.text.white};

  width: 66px;
  height: 30px;
  
  color: ${props => props.theme.colors.text.gray};
img{
  padding-right: 8px;
  };
`;

const Point = () => {
  return (
    <>
      <Item>
        <img
          src={StorePoint}
          alt='포인트'
        />
        <span>30</span>
      </Item>
    </>
  );
};

export default Point;
