import axios from 'axios';
import { getCookie } from '../../cookie';
import { showToast } from '../../share/utils/Toast';

export const useGetQuiz = () => {
  const token = getCookie('Authorization');
  return axios
    .get(`${import.meta.env.VITE_BASE_URL}/question`, {
      headers: {
        Authorization: `${token}`,
      },
    })
    .then(res => res.data.data)
    .catch(() => showToast('warning', '퀴즈 데이터를 불러오는 데 실패했습니다.', ''));
};
