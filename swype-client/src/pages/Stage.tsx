import { Container } from '../common/GlobalStyle';
import FeatureButtons from '../components/FeatureButtons';
import Frozen_Land from '../assets/Frozen_Land.png';
import Iceberg_Pola from '../assets/Iceberg_Pola.png';
import Header from '../common/Header';
import styled from 'styled-components';

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

const InfoBox = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
  position: absolute;
  top: 34%;
  width: 100%;
  display: flex;
  justify-content: center;
  
`;

const CharacterImage = styled.img`
  width: 85%;
  height: auto;
`;

const Info = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 7%;
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
const Stage = () => {
  return (
    <Container>
      <Header />

      <Wrapper>
        <InfoBox>
          <Info>
            <LevelBox>
              <span>Lv1</span>
            </LevelBox>
            <NameBox>
              <span>폴라</span>
            </NameBox>
          </Info>
          <CharacterImage src={Iceberg_Pola} />
        </InfoBox>
        <FeatureButtons />
      </Wrapper>
    </Container>
  );
};

export default Stage;
