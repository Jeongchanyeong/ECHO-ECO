import axios from 'axios';
import { getCookie } from '../../cookie';
import { BASE_URL } from '../../share/utils/OAuth';
import { showToast } from '../../share/utils/Toast';

const token = getCookie('Authorization');
export const useBuyItem = (itemId?: number) => {
  return axios
    .post(
      `${BASE_URL}/item/buy`,
      { itemId },
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    )
    .then(res => {
      return res.data.data.itemResponse;
    })
    .catch(error => {
      showToast('warning', '구매하는데 오류가 발생했습니다.', '');
      return Promise.reject(error);
    });
};
