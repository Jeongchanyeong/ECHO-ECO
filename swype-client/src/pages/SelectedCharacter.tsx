import styled from 'styled-components';
import { Container } from '../share/utils/GlobalStyle';
import Iceberg_Pola from '../assets/Iceberg_Pola.png';
import Frozen_Land from '../assets/Frozen_Land.png';
import Header from '../components/common/Header';
import { useNavigate } from 'react-router-dom';
import InfoModal from '../components/Modal/InfoModal';

const Wrapper = styled.div`
  position: relative;
  background-color: #E1F3F4;
  width: 100%;
  height: 100vh;
  background-image: url(${Frozen_Land});
  background-repeat: no-repeat;
  background-position: center ;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

const CharacterImageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const CharacterImage = styled.img`
  width: 85%;
  height: auto;
`;

const SelectedCharacter = () => {
  const navigate = useNavigate();
  // useEffect(() => {
  //   try {
  //     checkUser();
  //     navigate('/');
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }, []);
  return (
    <Container>
      <Header
        onClick={() => {
          navigate('/character');
        }}
        buttonText={' 〈 '}
      />
      <Wrapper>
        <CharacterImageWrapper>
          <CharacterImage src={Iceberg_Pola} />
        </CharacterImageWrapper>
        <InfoModal />
      </Wrapper>
    </Container>
  );
};

export default SelectedCharacter;
