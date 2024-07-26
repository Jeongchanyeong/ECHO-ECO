import axios from 'axios';
import { BASE_URL } from './OAuth';
import { getCookie } from '../../cookie';
import { showToast } from './Toast';

export const checkUser = () => {
  const token = getCookie('Authorization');
  return axios
    .get(`${BASE_URL}/character/user`, {
      headers: {
        Authorization: `${token}`,
      },
    })
    .catch(() => {
      showToast('warning', '키우고 있는 동물이 있어요', '');
    });
};
