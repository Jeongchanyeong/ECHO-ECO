import { useQuery } from '@tanstack/react-query';
import { loginCheck } from '../../apis/auth';

export const useLoginCheck = () => {
  return useQuery({
    queryKey: ['loginCheck'],
    queryFn: loginCheck,
    // 헤더에 토큰 실어서 보내주시면 setcookie 2번째 인자값에 넣어서 보내주기
  });
};
