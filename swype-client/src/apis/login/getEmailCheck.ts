import axios from 'axios';
import { getCookie } from '../../cookie';
import { BASE_URL } from '../../share/utils/OAuth';
import { aesDecrypt } from '../../key';

export const useEmailCheck = () => {
  const token = aesDecrypt(getCookie('Authorization'));
  return axios
    .get(`${BASE_URL}/gifticon/check`, {
      headers: {
        Authorization: `${token}`,
      },
    })
    .then(res => res.data.data);
};
