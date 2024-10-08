import { Container } from '../../share/utils/GlobalStyle';
import styled from 'styled-components';
import Header from '../../components/common/Header';
import ReactPlayer from 'react-player';

import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery, useMutation } from '@tanstack/react-query';
import { getVideo } from '../../apis/video/getVideo';
import { getVideoWatched } from '../../apis/video/getVideoWatched';

const Movie = () => {
  const navigate = useNavigate();
  const [time, setTime] = useState<number>(30);
  const [width, setWidth] = useState<number>(0);
  const intervalIdRef = useRef<NodeJS.Timeout | null>(null);

  const { data: videoData } = useQuery({ queryKey: ['video'], queryFn: getVideo });

  const mutation = useMutation({
    mutationFn: getVideoWatched,
    onSuccess: () => {
      navigate(`/stage`);
    },
  });

  useEffect(() => {
    intervalIdRef.current = setInterval(() => {
      setTime(prev => prev - 1);
      setWidth(prev => prev + 3.4);
    }, 1000);

    return () => {
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (time <= 0 && intervalIdRef.current) {
      clearInterval(intervalIdRef.current);
    }
  }, [time]);

  return (
    <Container>
      <Header
        onClick={() => {
          navigate('/stage');
        }}
        buttonText={' 〈 '}
        buttonColor='white'
      />

      <MovieBox>
        {videoData && (
          <ReactPlayer
            className='react-player'
            url={videoData.url}
            width='100%'
            height='100%'
            playing={true}
            muted={false}
            volume={0.5}
            controls={true}
          />
        )}
        <TimeBox>
          <Timer>
            <p>{time < 0 ? 0 : time}</p>
          </Timer>
          <Progress>
            <ProgressBar width={width}></ProgressBar>
          </Progress>
        </TimeBox>
      </MovieBox>

      <ButtonBox $time={time}>
        <button
          disabled={time !== 0}
          onClick={() => mutation.mutate()}
        >
          퀴즈 기회 받기
        </button>
      </ButtonBox>
    </Container>
  );
};

export default Movie;

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
    padding: 5px;
  }
`;

const ButtonBox = styled.div<{ $time: number }>`
  padding:30px 15px;
  background-color: black;

  button{
    background-color: ${({ $time }) => ($time === 0 ? '#23A1F8' : '#D9D9D9')};
    color: ${props => props.theme.colors.text.white};
    font-weight: ${props => props.theme.font.weight.bold};
    font-size: ${props => props.theme.font.size.buttonText};
    width: 100%;
    height: 50px;
    border-radius: 10px;
    text-align: center;
    letter-spacing: -0.03rem;
    transition: all 0.2s;
  }
`;

const Progress = styled.div`
  background-color: #fff;
  height: 10px;
  position: relative;

`;

const ProgressBar = styled.div<{ width: number }>`
  max-width: 100%;
  width: ${({ width }) => width}%;
  height: 100%;
  background-color: #23A1F8;
  position: absolute;
  transition: all 1s;
`;
