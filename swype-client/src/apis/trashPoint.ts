import axios from 'axios';
import { BASE_URL } from '../share/utils/OAuth';
import { getCookie } from '../cookie';

interface TrashPointData {
  addPoint: number;
  afterPoint: number;
}

// 청소 시 point 다루는 함수
export const trashPoint = async (): Promise<TrashPointData> => {
  const token = getCookie('Authorization');

  const res = await axios.post<{ data: TrashPointData }>(`${BASE_URL}/trash/clear`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });

  return res.data.data;
};
