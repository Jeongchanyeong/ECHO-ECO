import { atom } from 'recoil';
import { UserInfo } from '../../model/userInfoType';

// UserInfo의 기본값을 정의합니다.
const defaultUserInfo: UserInfo = {
  character: {
    id: 0,
    name: '',
    maxLevel: 0,
  },
  level: 0,
  environment: '',
  backgroundImage: '',
  characterImage: '',
  userPoint: 0,
};

// Recoil atom 정의
export const userData = atom<UserInfo>({
  key: 'userData',
  default: defaultUserInfo,
});
