import axios from 'axios';
import { BASE_URL } from '../../share/utils/OAuth';
import { getCookie } from '../../cookie';
import { aesDecrypt } from '../../key';

export const trashStatusCheck = (): Promise<boolean> => {
  const token = aesDecrypt(getCookie('Authorization'));
  return axios
    .get<{ data: { isClean: boolean } }>(`${BASE_URL}/trash/status`, {
      headers: {
        Authorization: `${token}`,
      },
    })
    .then(res => res.data.data.isClean)
    .catch(error => {
      console.error('err:', error);
      throw error;
    });
};
