import axios from 'axios';
import { BASE_URL } from '../share/utils/OAuth';

// 쓰레기 배경, 동물 받아오는 함수
export const trashImg = async () => {
  const res = await axios.get(`${BASE_URL}/character/trash`);
  return res.data.data;
};
