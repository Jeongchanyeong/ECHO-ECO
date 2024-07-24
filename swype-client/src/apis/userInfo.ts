import axios from 'axios';
import { BASE_URL } from '../share/utils/OAuth';
import { getCookie } from '../cookie';
import { UserInfo } from '../model/userInfoType';

const token = getCookie('Authorization');

export const getUserInfo = (): Promise<UserInfo> => {
  return axios
    .get<{ data: UserInfo }>(`${BASE_URL}/character/user`, {
      headers: {
        Authorization: `${token}`,
      },
    })
    .then(res => res.data.data)
    .catch(error => {
      console.error('err:', error);
      throw error;
    });
};
