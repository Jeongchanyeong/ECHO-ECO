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

export const getUserInfo = async (): Promise<UserInfo> => {
  try {
    const res = await axios.get<{ data: UserInfo }>(`${BASE_URL}/character/user`, {
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
