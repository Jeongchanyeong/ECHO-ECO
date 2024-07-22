import { useQuery } from '@tanstack/react-query';
import { trashImg } from '../../apis/trashImg';

// 쓰레기 배경, 이미지 받아옴
export const useTrashImg = () => {
  return useQuery({ queryKey: ['trashImg'], queryFn: trashImg });
};
