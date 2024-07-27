import axios from 'axios';
import { getCookie } from '../../cookie';

const token = getCookie('Authorization');
export const useGetQuiz = () => {
  return axios
    .get(`${import.meta.env.VITE_BASE_URL}/question`, {
      headers: {
        Authorization: `${token}`,
      },
    })
    .then(res => res.data.data)
    .catch(e => console.log(e));
};
