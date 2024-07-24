import axios from 'axios';
import { BASE_URL } from '../../share/utils/OAuth';
import { getCookie } from '../../cookie';

const token = getCookie('Authorization');

export const getVideoWatched = (): Promise<{ isWatched: boolean }> => {
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
    .then(res => {
      const isWatchedData = res.data.data;
      console.log('isWatched data:', isWatchedData); // 서버에서 반환된 isWatched 데이터를 출력합니다.
      return isWatchedData;
    })
    .catch(error => {
      console.error('error:', error.response.data); // 서버에서 반환된 에러 메시지를 출력합니다.
      throw error;
    });
};
