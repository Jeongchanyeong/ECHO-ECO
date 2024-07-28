import axios from 'axios';
import { getCookie } from '../../cookie';
import { BASE_URL } from '../../share/utils/OAuth';

export const useEmailCheck = () => {
  const token = getCookie('Authorization');
  return axios
    .get(`${BASE_URL}/gifticon/check`, {
      headers: {
        Authorization: `${token}`,
      },
    })
    .then(res => res.data.data);
};
