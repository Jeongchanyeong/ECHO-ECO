import axios from 'axios';
import { BASE_URL } from '../../share/utils/OAuth';
import { getCookie } from '../../cookie';

export const characterComplete = () => {
  const token = getCookie('Authorization');
  return axios
    .get(`${BASE_URL}/character/complete/messages`, {
      headers: {
        Authorization: `${token}`,
      },
    })
    .then(res => {
      return JSON.parse(res.data.data.completeMessages);
    });
};
