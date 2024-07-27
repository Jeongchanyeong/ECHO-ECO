import axios from 'axios';
import { BASE_URL } from '../../share/utils/OAuth';

export const loginCheck = async () => {
  return await axios.get(`${BASE_URL}/user/check`, {
    withCredentials: true,
  });
  // return res.data.data;
};
