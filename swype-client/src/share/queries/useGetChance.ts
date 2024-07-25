import axios from 'axios';
import { getCookie } from '../../cookie';
import { BASE_URL } from '../utils/OAuth';

const token = getCookie('Authorization');
export const useGetChance = () => {
  return axios
    .get(`${BASE_URL}/contents/remaining`, {
      headers: {
        Authorization: `${token}`,
      },
    })
    .then(res => res.data.data);
};
