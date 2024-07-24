import axios from 'axios';
import { BASE_URL } from '../../share/utils/OAuth';
import { getCookie } from '../../cookie';

interface VideoData {
  id: number;
  name: string;
  url: string;
}

const token = getCookie('Authorization');

export const getVideo = (): Promise<VideoData> => {
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
