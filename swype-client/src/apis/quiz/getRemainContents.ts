import axios from 'axios';
import { getCookie } from '../../cookie';
import { RemainData } from '../../model/remainDataType';
import { BASE_URL } from '../../share/utils/OAuth';

export const remainContents = (): Promise<RemainData> => {
  const token = getCookie('Authorization');
  return axios
    .get<{ data: RemainData }>(`${BASE_URL}/contents/remaining`, {
      headers: {
        Authorization: `${token}`,
      },
    })
    .then(res => {
      return res.data.data;
    })
    .catch(error => {
      console.log('err', error);
      throw error;
    });
};
