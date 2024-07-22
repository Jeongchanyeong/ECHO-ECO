import axios from 'axios';
import { BASE_URL } from '../share/utils/OAuth';

interface CharacterInfo {
  id: number;
  name: string;
  maxLevel: number;
}

interface UserInfo {
  character: CharacterInfo;
  level: number;
  environment: string;
  backgroundImage: string;
  characterImage: string;
  userPoint: number;
}

export const getUserInfo = async (): Promise<UserInfo> => {
  const res = await axios.get<{ data: UserInfo }>(`${BASE_URL}/character/user`);
  return res.data.data;
};
