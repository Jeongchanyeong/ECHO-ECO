import axios from 'axios';
import { BASE_URL } from '../../share/utils/OAuth';
import { getCookie } from '../../cookie';

interface TrashImgData {
  backgroundImage: string;
  characterImage: string;
}

// 쓰레기 배경, 동물 받아오는 함수
export const getTrashImg = (): Promise<TrashImgData> => {
  const token = getCookie('Authorization');
  return axios
    .get<{ data: TrashImgData }>(`${BASE_URL}/character/trash`, {
      headers: {
        Authorization: `${token}`,
      },
    })
    .then(res => res.data.data)
    .catch(error => {
      console.error('err:', error);
      throw error;
    });
};
