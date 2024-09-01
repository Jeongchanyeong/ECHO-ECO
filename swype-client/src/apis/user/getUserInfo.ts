import axios from 'axios';
import { BASE_URL } from '../../share/utils/OAuth';
import { getCookie } from '../../cookie';
import { UserInfo } from '../../model/userInfoType';
import { aesDecrypt } from '../../key';

export const getUserInfo = (): Promise<UserInfo> => {
  const token = aesDecrypt(getCookie('Authorization'));
  return axios
    .get<{ data: UserInfo }>(`${BASE_URL}/character/user`, {
      headers: {
        Authorization: `${token}`,
      },
    })
    .then(res => res.data.data)
    .catch(error => {
      throw error;
    });
};
