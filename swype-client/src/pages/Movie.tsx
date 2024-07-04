import { Container } from '../common/GlobalStyle';
import styled from 'styled-components';
import Header from '../common/Header';
import ReactPlayer from 'react-player';
import Button from '../common/Button';

export default function Movie() {
  return (
    <Container>
      <Header movie={true} />
      <MovieBox>
        <ReactPlayer
          className='react-player'
          url={'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'} // 플레이어 url
          width='100%' // 플레이어 크기 (가로)
          height='100%' // 플레이어 크기 (세로)
          playing={true} // 자동 재생 on
          muted={true} // 자동 재생 on
          controls={true} // 플레이어 컨트롤 노출 여부
          light={false} // 플레이어 모드
          pip={true} // pip 모드 설정 여부
          poster={
            'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg'
          } // 플레이어 초기 포스터 사진
        />
        <TimeBox>
          <Timer>
            <p>30</p>
          </Timer>
          <Progress></Progress>
        </TimeBox>
      </MovieBox>
      <ButtonBox>
        <Button
          bgColor='blue'
          textColor='white'
          width='100%'
          height='50px'
        >
          퀴즈 기회 받기
        </Button>
      </ButtonBox>
    </Container>
  );
}

const MovieBox = styled.div`
  padding-top: 70px;
  position: relative;
  height: 100%;
  background-color: black;
`;

const TimeBox = styled.div`
  position: absolute;
  bottom: 0;
  right:0;
  width: 100%;
`;

const Timer = styled.div`
  color:${props => props.theme.colors.text.darkGray};
  width: 100%;
  display: flex;
  justify-content: end;
  p{
    margin: 0px 5px 7px 0px;
    width:30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #959595;
    border-radius: 20px;
  }
`;

const ButtonBox = styled.div`
  padding:30px 15px;
  background-color: black;
`;

const Progress = styled.div`
  padding: 5px;
  background-color: #23A1F8;
`;
