import axios from 'axios';
import { BASE_URL } from '../../share/utils/OAuth';
import { getCookie } from '../../cookie';
import { aesDecrypt } from '../../key';

export const getVideoWatched = (): Promise<{ isWatched: boolean }> => {
  const token = aesDecrypt(getCookie('Authorization'));
  return axios
    .post<{ data: { isWatched: boolean } }>(
      `${BASE_URL}/video/end`,
      {},
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    )
    .then(res => res.data.data)
    .catch(error => {
      console.error('영상 error:', error);
      throw error;
    });
};
