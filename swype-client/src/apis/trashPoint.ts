import axios from 'axios';
import { BASE_URL } from '../share/utils/OAuth';
import { getCookie } from '../cookie';

// 청소 시 point 다루는 함수
export const trashPoint = () => {
  const token = getCookie('Authorization');

  return axios.post(
    `${BASE_URL}/trash/clear`,

    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
    }
  );
};
