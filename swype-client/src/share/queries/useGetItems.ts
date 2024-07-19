import axios from 'axios';

export const useGetItems = () => {
  return axios.get(`${import.meta.env.VITE_APP_KEY}/item/list`).then(res => res.data.data);
};
