import axios from 'axios';
import { BASE_URL } from '../share/utils/OAuth';

interface TrashImgData {
  backgroundImage: string;
  characterImage: string;
}

// 쓰레기 배경, 동물 받아오는 함수
export const getTrashImg = async (): Promise<TrashImgData> => {
  const res = await axios.get<{ data: TrashImgData }>(`${BASE_URL}/character/trash`);
  return res.data.data;
};
