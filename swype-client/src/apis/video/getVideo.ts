import axios from 'axios';
import { BASE_URL } from '../../share/utils/OAuth';
import { getCookie } from '../../cookie';
import { aesDecrypt } from '../../key';

interface VideoData {
  id: number;
  name: string;
  url: string;
}

export const getVideo = (): Promise<VideoData> => {
  const token = aesDecrypt(getCookie('Authorization'));
  return axios
    .get<{ data: VideoData }>(`${BASE_URL}/video`, {
      headers: {
        Authorization: `${token}`,
      },
    })
    .then(res => res.data.data)
    .catch(error => {
      console.error('error:', error);
      throw error;
    });
};
