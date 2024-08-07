export interface TrashImgData {
  backgroundImage: string;
  characterImage: string;
}

export interface TrashPointData {
  addPoint: number;
  afterPoint: number;
}

export interface TrashItemProps {
  index: number;
  item: {
    src: string;
    alt: string;
    top: string;
    left: string;
    width: string;
  };
}

export interface TrashCanProps {
  trashCanVisible: boolean;
}
