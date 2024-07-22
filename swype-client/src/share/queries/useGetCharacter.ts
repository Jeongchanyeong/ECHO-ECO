import axios from 'axios';

export const useGetCharacter = () => {
  return axios.get(`${import.meta.env.VITE_BASE_URL}/character/list`).then(res => res.data.data);
};
