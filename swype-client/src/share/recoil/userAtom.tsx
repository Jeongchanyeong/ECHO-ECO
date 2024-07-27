import { atom } from 'recoil';
import { UserInfo } from '../../model/userInfoType';

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

export const userData = atom<UserInfo>({
  key: 'userData',
  default: defaultUserInfo,
});
