import axios from 'axios';

export const useGetItems = () => {
  return axios.get(`${import.meta.env.VITE_BASE_URL}/item/list`).then(res => res.data.data);
};
