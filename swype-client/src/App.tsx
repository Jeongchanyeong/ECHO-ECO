import Button from './common/Button';
import { Container } from './common/GlobalStyle';

function App() {
  return (
    <>
      <Container>
        안녕하세요
        <div>
          <Button
            bgColor='lightGray'
            width='50%'
            height='3rem'
            textColor='blue'
          >
            Button 1 성장시키
          </Button>
          <Button
            bgColor='red'
            width='30%'
            height='2rem'
            textColor='lightGray'
          >
            폰트 적용이 되고 있는거야?{' '}
          </Button>
          <Button
            bgColor='blue'
            width='10rem'
            height='4rem'
            textColor='black'
          >
            Button 3
          </Button>
        </div>
      </Container>
    </>
  );
}

export default App;
