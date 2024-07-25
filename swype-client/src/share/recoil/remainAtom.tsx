import { atom } from 'recoil';
import { RemainData } from '../../model/remainDataType';

export const remainData = atom<RemainData>({
  key: 'remainData',
  default: {
    remainQuestion: 0,
    remainVideo: 0,
  },
});
