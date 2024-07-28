import StorePoint from '../../assets/StorePoint.png';
import styled from 'styled-components';
import { userData } from '../../share/recoil/userAtom';
import { useSetRecoilState } from 'recoil';
import { useQuery } from '@tanstack/react-query';
import { getUserInfo } from '../../apis/user/getUserInfo';
import { useEffect } from 'react';

const Point = () => {
  const setUserData = useSetRecoilState(userData);
  const { data: userInfo } = useQuery({
    queryKey: ['userInfo'],
    queryFn: getUserInfo,
  });

  useEffect(() => {
    if (userInfo) {
      setUserData(userInfo);
    }
  }, [userInfo]);

  return (
    <>
      <Item>
        <img
          src={StorePoint}
          alt='포인트'
        />
        <span>{userInfo?.userPoint}</span>
      </Item>
    </>
  );
};

export default Point;

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  background-color: ${props => props.theme.colors.text.white};
  font-weight: 700;
  padding:7px 10px;
  color: ${props => props.theme.colors.text.gray};
  img {
    padding-right: 8px;
  };
`;
