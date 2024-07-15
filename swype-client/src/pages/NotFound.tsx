import { Container } from '../common/GlobalStyle';
import styled from 'styled-components';
import Back from '../assets/404page.png';
export default function NotFound() {
  return (
    <Container>
      <BackGround src={Back}></BackGround>
    </Container>
  );
}

const BackGround = styled.img`
    width: 100%;
    height: 100%;
`;
