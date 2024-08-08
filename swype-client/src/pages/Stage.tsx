import { Container } from '../share/utils/GlobalStyle';
import FeatureButtons from '../components/FeatureButtons';
import Header from '../components/common/Header';
import styled from 'styled-components';
import Store from '../assets/Store.png';
import Trash_Old from '../assets/trash/Trash_Old.png';
import Trash_New from '../assets/trash/Trash_New.png';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Point from '../components/common/Point';
import { trashStatusCheck } from '../apis/trash/getTrashStatusCheck';
import { showToast } from '../share/utils/Toast';
import { useQuery } from '@tanstack/react-query';
import { getUserInfo } from '../apis/user/getUserInfo';
import { useSetRecoilState } from 'recoil';
import { userData } from '../share/recoil/userAtom';
import CompleteModal from '../components/Modal/CompleteModal';
import { getCookie } from '../cookie';
import { StageFloat } from '../share/utils/Float';

const Stage = () => {
  const [isClean, setIsClean] = useState(false);
  const token = getCookie('Authorization');
  const navigate = useNavigate();
  const setUserData = useSetRecoilState(userData);

  const { data: userInfo } = useQuery({
    queryKey: ['userInfo'],
    queryFn: getUserInfo,
    enabled: !!token,
  });

  useEffect(() => {
    if (!!!token) {
      navigate('/login');
    }
  }, [token]);

  useEffect(() => {
    if (userInfo) {
      setUserData(userInfo);
    }
  }, [userInfo, token]);

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
      {Number(userInfo?.level) >= Number(userInfo?.character.maxLevel) ? (
        <Wrapper $backgroundImage={userInfo?.backgroundImage}>
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
      ) : (
        <Wrapper $backgroundImage={userInfo?.backgroundImage}>
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
      )}
    </Container>
  );
};

export default Stage;

const Wrapper = styled.div<{ $backgroundImage?: string }>`
  position: relative;
  background-color: #E1F3F4;
  width: 100%;
  height: 100vh;
  background-image: url(${props => props.$backgroundImage});  
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
  height: 70%;
`;

const CharacterImage = styled.img`
  width: 85%;
  height: auto;
  animation: ${StageFloat} 4s ease-in-out infinite;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  position: absolute;
  margin-top: 60px;
  z-index: 1;
  
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
  margin-top: 10px;

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
  height: 35%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
