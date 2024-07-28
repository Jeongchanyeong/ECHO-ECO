import axios from 'axios';
import { BASE_URL } from '../../share/utils/OAuth';
import { getCookie } from '../../cookie';
import { UserInfo } from '../../model/userInfoType';

export const getUserInfo = (): Promise<UserInfo> => {
  const token = getCookie('Authorization');
  return axios
    .get<{ data: UserInfo }>(`${BASE_URL}/character/user`, {
      headers: {
        Authorization: `${token}`,
      },
    })
    .then(res => res.data.data)
    .catch(error => {
      console.error('신규 유저');
      throw error;
    });
};
