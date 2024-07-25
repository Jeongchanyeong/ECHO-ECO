import axios from 'axios';
import { BASE_URL } from '../share/utils/OAuth';
import { getCookie } from '../cookie';
import { RemainData } from '../model/remainDataType';

const token = getCookie('Authorization');

export const remainContents = (): Promise<RemainData> => {
  return axios
    .get<{ data: RemainData }>(`${BASE_URL}/contents/remaining`, {
      headers: {
        Authorization: `${token}`,
      },
    })
    .then(res => {
      console.log('API response:', res.data.data); // 응답 데이터 로깅
      return res.data.data;
    })
    .catch(error => {
      console.log('err', error);
      throw error;
    });
};
