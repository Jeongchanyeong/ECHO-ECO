import axios from 'axios';
import { BASE_URL } from '../share/utils/OAuth';

// 서버에서 isClean true false 받아오는 함수
export const trashStatusCheck = async () => {
  const res = await axios.get(`${BASE_URL}/trash/status`);
  return res.data.data.isClean;
};
