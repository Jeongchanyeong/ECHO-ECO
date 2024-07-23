import axios from 'axios';
import { BASE_URL } from '../share/utils/OAuth';
import { getCookie } from '../cookie';

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

const token = getCookie('Authorization');

export const getUserInfo = (): Promise<UserInfo> => {
  return axios
    .get<{ data: UserInfo }>(`${BASE_URL}/character/user`, {
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
