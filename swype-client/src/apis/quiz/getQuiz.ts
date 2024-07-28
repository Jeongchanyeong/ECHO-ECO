import axios from 'axios';
import { getCookie } from '../../cookie';

export const useGetQuiz = () => {
  const token = getCookie('Authorization');
  return axios
    .get(`${import.meta.env.VITE_BASE_URL}/question`, {
      headers: {
        Authorization: `${token}`,
      },
    })
    .then(res => res.data.data)
    .catch(e => console.log(e));
};
