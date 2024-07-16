import styled from 'styled-components';
import StorePoint from '../../assets/StorePoint.png';
import Quiz_Life from '../../assets/Quiz_Life.png';

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  max-width: 480px; 
  top: 0;
  
  background-color: rgba(0,0,0,0);
  
  font-size: ${props => props.theme.font.size.choose};
  letter-spacing: 0.03em;
  z-index: 1000;
  padding: 12px 30px 12px 15px;
  box-sizing: border-box; 

`;
const Col = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.text.black};
  text-align: center;

  &:nth-child(2) span {
    font-size: ${props => props.theme.font.size.header1};
    font-weight: ${props => props.theme.font.weight.extraBold};
    margin-right: 90px;
  }


  button {
    font-size: 24px;
  }
  gap: 20px;
`;

const Item1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  background-color: ${props => props.theme.colors.text.white};

  width: 66px;
  height: 30px;
  
  color: ${props => props.theme.colors.text.gray};
  img{
  padding-right: 10px;
  };
`;

const Item2 = styled(Item1)`
img{
  padding-right: 8px;
  };
`;

interface HeaderProps {}

const Header = () => {
  return (
    <Nav>
      <Col>
        <button>{'＜'}</button>
      </Col>
      <Col>
        <span>상점</span>
      </Col>
      <Col>
        <Item1>
          <img
            src={Quiz_Life}
            alt='퀴즈 생명'
          />
          <span>0/3</span>
        </Item1>

        <Item2>
          <img
            src={StorePoint}
            alt='포인트'
          />
          <span>30</span>
        </Item2>
      </Col>
    </Nav>
  );
};

export default Header;
