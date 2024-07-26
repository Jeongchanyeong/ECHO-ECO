import axios from 'axios';
import { BASE_URL } from '../share/utils/OAuth';
import { getCookie } from '../cookie';

const token = getCookie('Authorization');

export const characterComplete = () => {
  return axios
    .get(`${BASE_URL}/character/complete/messages`, {
      headers: {
        Authorization: `${token}`,
      },
    })
    .then(res => {
      return JSON.parse(res.data.data.completeMessages);
    })
    .catch(error => {
      console.log('완성 메세지 err', error);
      throw error;
    });
};
