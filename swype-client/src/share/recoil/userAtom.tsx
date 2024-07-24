import { atom } from 'recoil';
import { UserInfo } from '../../model/userInfoType';

export const userData = atom<UserInfo | null>({
  key: 'userData',
  default: null,
});
