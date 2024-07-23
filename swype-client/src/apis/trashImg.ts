import axios from 'axios';
import { BASE_URL } from '../share/utils/OAuth';
import { getCookie } from '../cookie';

interface TrashImgData {
  backgroundImage: string;
  characterImage: string;
}

const token = getCookie('Authorization');
// 쓰레기 배경, 동물 받아오는 함수
export const getTrashImg = async (): Promise<TrashImgData> => {
  try {
    const res = await axios.get<{ data: TrashImgData }>(`${BASE_URL}/character/trash`, {
      headers: {
        Authorization: `${token}`,
      },
    });
    return res.data.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('err:', error.response?.data);
    } else {
      console.error('err:', error);
    }
    throw error;
  }
};
