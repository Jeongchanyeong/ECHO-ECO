import axios from 'axios';
import { showToast } from '../../share/utils/Toast';

export const useGetCharacter = () => {
  return axios.get(`${import.meta.env.VITE_BASE_URL}/character/list`).then(res => res.data.data);
};

export const useGetDescription = (characterName: string) => {
  return axios
    .get(`${import.meta.env.VITE_BASE_URL}/character/list`)
    .then(res => {
      const index = res.data.data.findIndex(
        (character: { name: string }) => character.name === characterName
      );
      return JSON.parse(res.data.data[index].descriptions);
    })
    .catch(() => showToast('warning', '캐릭터 설명을 불러오는데 실패했습니다.'));
};
