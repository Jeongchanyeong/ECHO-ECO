import axios from 'axios';
import { getCookie } from '../../cookie';

export const useDetailItems = (id: string) => {
  const token = getCookie('Authorization');
  return axios
    .get(`${import.meta.env.VITE_BASE_URL}/item/${id}`, {
      headers: {
        Authorization: `${token}`,
      },
    })
    .then(res => res.data.data)
    .catch(e => console.log(e));
};
