import axios from 'axios';
import { BASE_URL } from '../share/utils/OAuth';

export const loginCheck = async () => {
  const res = await axios
    .get(`${BASE_URL}/user/check`, {
      withCredentials: true,
    })
    .then(data => console.log(data));
  // return res.data.data;
};
