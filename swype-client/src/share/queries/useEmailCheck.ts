import axios from 'axios';
import { getCookie } from '../../cookie';
import { BASE_URL } from '../utils/OAuth';

const token = getCookie('Authorization');
export const useEmailCheck = () => {
  return axios
    .get(`${BASE_URL}/gifticon/check`, {
      headers: {
        Authorization: `${token}`,
      },
    })
    .then(res => res.data.data);
};
