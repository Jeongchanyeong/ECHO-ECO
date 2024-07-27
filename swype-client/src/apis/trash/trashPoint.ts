import axios from 'axios';
import { BASE_URL } from '../../share/utils/OAuth';
import { getCookie } from '../../cookie';

interface TrashPointData {
  addPoint: number;
  afterPoint: number;
}

const token = getCookie('Authorization');
// 청소 시 point 다루는 함수

export const trashPoint = (): Promise<TrashPointData> => {
  return axios
    .post<{ data: TrashPointData }>(
      `${BASE_URL}/trash/clear`,
      {},
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    )
    .then(res => res.data.data)
    .catch(error => {
      console.error('err:', error);
      throw error;
    });
};
