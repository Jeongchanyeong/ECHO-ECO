import { useQuery } from '@tanstack/react-query';
import Quiz_Life from '../assets/Quiz_Life.png';
import styled from 'styled-components';
import { useSetRecoilState } from 'recoil';
import { remainData } from '../share/recoil/remainAtom';
import { useEffect } from 'react';
import { remainContents } from '../apis/quiz/getRemainContents';

const QuizLife = () => {
  const setRemainData = useSetRecoilState(remainData);

  const { data } = useQuery({
    queryKey: ['remain'],
    queryFn: remainContents,
  });

  useEffect(() => {
    if (data) {
      setRemainData(data);
    }
  }, [data, setRemainData]);

  return (
    <>
      <Item>
        <img
          src={Quiz_Life}
          alt='퀴즈 생명'
        />
        <span>{data?.remainQuestion}/3</span>
      </Item>
    </>
  );
};

export default QuizLife;

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
  padding-right: 10px;
  };
`;
