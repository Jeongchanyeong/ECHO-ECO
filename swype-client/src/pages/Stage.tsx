import { Container } from '../share/utils/GlobalStyle';
import FeatureButtons from '../components/FeatureButtons';
import Frozen_Land from '../assets/Frozen_Land.png';
import Iceberg_Pola from '../assets/Iceberg_Pola.png';
import Header from '../components/common/Header';
import styled from 'styled-components';
import Store from '../assets/Store.png';
import Trash_Old from '../assets/Trash_Old.png';
import Trash_New from '../assets/Trash_New.png';

import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { loginCheck } from '../apis/auth';
import Point from '../components/Point';
import { trashStatusCheck } from '../apis/trashStatusCheck';
import { showToast } from '../share/utils/Toast';

const Stage = () => {
  const [isClean, setIsClean] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // cleanData 함수가 서버에서 청소 상태를 받아와서 isClean 상태를 설정함
    const cleanData = async () => {
      try {
        const status = await trashStatusCheck();
        setIsClean(status);
      } catch (error) {
        console.error('error:', error);
      }
    };

    cleanData();
  }, []);

  const goPollutedPage = () => {
    if (!isClean) {
      navigate('/polluted');
    } else {
      showToast('error', '쓰레기 줍기는 이미 완료 되었습니다. 12시 이후에 다시 만나요!');
    }
  };

  const goStorePage = () => {
    navigate('/store');
  };

  return (
    <Container>
      <Header rightChild={<Point />} />
      <Wrapper>
        <Out>
          <StoreButton onClick={goStorePage}>
            <img src={Store} />
            <span>상점</span>
          </StoreButton>
          <TrashButton onClick={goPollutedPage}>
            <img src={isClean ? Trash_Old : Trash_New} />
            <span>쓰레기 치우기</span>
          </TrashButton>
        </Out>
        <CharacterBox>
          <CharacterImage src={Iceberg_Pola} />
        </CharacterBox>
        <FeatureButtons />
      </Wrapper>
    </Container>
  );
};

export default Stage;

const Wrapper = styled.div`
  position: relative;
  background-color: #E1F3F4;
  width: 100%;
  height: 100vh;
  background-image: url(${Frozen_Land});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CharacterBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40%;  
  display: flex;
  justify-content: center;
  
`;

const CharacterImage = styled.img`
  width: 85%;
  height: auto;
`;

const Out = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: auto;
  margin-top: 70px;
  height: 20%;

  span{
    font-weight: ${props => props.theme.font.weight.extraBold};
    font-size: 0.8rem;
  }

`;

const StoreButton = styled.button`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 25%;
  color: ${props => props.theme.colors.text.white};
  font-size: ${props => props.theme.font.size.levelText};
  img {
    width: 40px;
    padding-bottom: 10%;
  }
`;

const TrashButton = styled(StoreButton)`
  padding-top: 5%;
`;


const InfoBox = styled.div`
  width:100%;
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Stage = () => {
  const navigate = useNavigate();
  // const { data, isLoading, error } = useLoginCheck();

  useEffect(() => {
    loginCheck();

    // getCookie 값이 있으면 "/" 없으면 "login"

    // if (!isLoading) {
    //   if (data && data.check_status) {

    // setCookie('Authorization', )
    // 헤더에 토큰 실어서 보내주시면 setcookie 2번째 인자값에 넣어서 보내주기

    //   } else {
    //     navigate('/login');

    //   }
    // }
  }, []);

  // if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error.message}</div>;

  const goStorePage = () => {
    navigate('/store');
  };

  const goPollutedPage = () => {
    navigate('/polluted');
  };
  return (
    <Container>
      <Header rightChild={<Point />} />
      <Wrapper>
        <Out>
          <StoreButton onClick={goStorePage}>
            <img src={Store} />
            <span>상점</span>
          </StoreButton>
          <TrashButton onClick={goPollutedPage}>
            <img src={Trash_Old} />
            <span>쓰레기 치우기</span>
          </TrashButton>
        </Out>
        <CharacterBox>
          <CharacterImage src={Iceberg_Pola} />
        </CharacterBox>
        <InfoBox>
          <FeatureButtons />
        </InfoBox>
      </Wrapper>
    </Container>
  );
};

export default Stage;

