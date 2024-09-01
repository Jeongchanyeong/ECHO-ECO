import axios from 'axios';
import { getCookie } from '../../cookie';
import { showToast } from '../../share/utils/Toast';
import { aesDecrypt } from '../../key';

export const useDetailItems = (id: string) => {
  const token = aesDecrypt(getCookie('Authorization'));
  return axios
    .get(`${import.meta.env.VITE_BASE_URL}/item/${id}`, {
      headers: {
        Authorization: `${token}`,
      },
    })
    .then(res => res.data.data)
    .catch(() => showToast('warning', '데이터를 불러오는데 실패했습니다.'));
};
