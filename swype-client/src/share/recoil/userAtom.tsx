import { atom } from 'recoil';

interface CharacterInfoProps {
  id?: number;
  name?: string;
  maxLevel?: number;
}

interface UserInfoProps {
  character?: CharacterInfoProps;
  level?: number;
  environment?: string;
  backgroundImage?: string;
  characterImage?: string;
  userPoint?: number;
}

export const userData = atom<UserInfoProps | null>({
  key: 'userData',
  default: null,
});
