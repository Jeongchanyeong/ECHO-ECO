import { Container } from '../share/utils/GlobalStyle';
import FeatureButtons from '../components/FeatureButtons';
import Header from '../components/common/Header';
import styled from 'styled-components';
import Store from '../assets/Store.png';
import Trash_Old from '../assets/Trash_Old.png';
import Trash_New from '../assets/Trash_New.png';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Point from '../components/Point';
import { trashStatusCheck } from '../apis/trashStatusCheck';
import { showToast } from '../share/utils/Toast';
import { useQuery } from '@tanstack/react-query';
import { getUserInfo } from '../apis/userInfo';
import { useSetRecoilState } from 'recoil';
import { userData } from '../share/recoil/userAtom';
import CompleteModal from '../components/Modal/CompleteModal';
import { getCookie } from '../cookie';


const Stage = () => {
  const [isClean, setIsClean] = useState(false);
  const [token, setToken] = useState(getCookie('Authorization'));
  const navigate = useNavigate();
  const setUserData = useSetRecoilState(userData);

  const { data: userInfo } = useQuery({
    queryKey: ['userInfo'],
    queryFn: getUserInfo,
  });

  useEffect(() => {
    const tokenFromCookie = getCookie('Authorization');
    if (tokenFromCookie !== token) {
      setToken(tokenFromCookie);
    }
  }, [token]);

  useEffect(() => {
    if (userInfo) {
      setUserData(userInfo);
    }
  }, [userInfo, setUserData]);

  useEffect(() => {
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
      showToast('warning', '오늘의 쓰레기를 다 치웠어요.', '00시 이후에 다시 만나요!');
    }
  };

  const goStorePage = () => {
    navigate('/store');
  };

  return (
    <Container>
      <Header rightChild={<Point />} />
      {userInfo?.level === userInfo?.character.maxLevel ? (
        <Wrapper backgroundImage={userInfo?.backgroundImage}>
          <ButtonWrapper>
            <StoreButton onClick={goStorePage}>
              <img src={Store} />
              <span>상점</span>
            </StoreButton>
            <TrashButton onClick={goPollutedPage}>
              <img src={isClean ? Trash_Old : Trash_New} />
              <span>쓰레기 치우기</span>
            </TrashButton>
          </ButtonWrapper>

          <CharacterBox>
            <CharacterImage src={userInfo?.characterImage} />
          </CharacterBox>

          <InfoBox>
            <FeatureButtons />
          </InfoBox>
        </Wrapper>
      ) : (
        <Wrapper backgroundImage={userInfo?.backgroundImage}>
          <ButtonWrapper>
            <StoreButton hidden={true}>
              <img src={Store} />
              <span>상점</span>
            </StoreButton>
            <TrashButton hidden={true}>
              <img src={Trash_New} />
              <span>쓰레기 치우기</span>
            </TrashButton>
          </ButtonWrapper>
          <CharacterBox>
            <CharacterImage src={userInfo?.characterImage} />
          </CharacterBox>
          <CompleteModal />
        </Wrapper>
      )}
    </Container>
  );
};

export default Stage;

const Wrapper = styled.div<{ backgroundImage?: string }>`
  position: relative;
  background-color: #E1F3F4;
  width: 100%;
  height: 100vh;
  background-image: url(${props => props.backgroundImage});  
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
  justify-content: flex-end;
  width: 100%;
  height: 40%;
`;

const CharacterImage = styled.img`
  width: 85%;
  height: 100%;
  height: auto;
`;

const ButtonWrapper = styled.div`
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
    font-size: ${props => props.theme.font.size.choose};
  }

`;

const StoreButton = styled.button`
  display: ${props => (props.hidden ? 'none' : 'flex')};
  align-items: center;
  flex-direction: column;
  width: 25%;
  color: ${props => props.theme.colors.text.white};

  img {
    width: 85%;
    display: ${props => (props.hidden ? 'none' : 'block')};
  }

  span {
    display: ${props => (props.hidden ? 'none' : 'block')};
  }
`;

const TrashButton = styled(StoreButton)`
  margin-top: 5%;
  img {
  margin-bottom: 5%;
  }
`;

const InfoBox = styled.div`
  width:100%;
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
