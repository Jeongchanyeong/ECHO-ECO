import axios from 'axios';
import { BASE_URL } from '../utils/OAuth';
import { showToast } from '../utils/Toast';
import { getCookie } from '../../cookie';

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
