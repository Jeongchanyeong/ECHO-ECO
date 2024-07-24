export interface CharacterInfo {
  id: number;
  name: string;
  maxLevel: number;
}

export interface UserInfo {
  character?: CharacterInfo;
  level?: number;
  environment?: string;
  backgroundImage?: string;
  characterImage?: string;
  userPoint?: number;
}
