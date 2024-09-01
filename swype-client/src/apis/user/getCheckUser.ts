import axios from 'axios';
import { BASE_URL } from '../../share/utils/OAuth';
import { getCookie } from '../../cookie';
import { showToast } from '../../share/utils/Toast';
import { aesDecrypt } from '../../key';

export const checkUser = () => {
  const token = aesDecrypt(getCookie('Authorization'));
  return axios
    .get(`${BASE_URL}/character/user`, {
      headers: {
        Authorization: `${token}`,
      },
    })
    .catch(() => {
      showToast('warning', '키우고 있는 동물이 있어요');
    });
};
