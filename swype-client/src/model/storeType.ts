export type ItemList = {
  id: number;
  name: string;
  description: string;
  price: number;
  levelUp: number;
  imageUrl: string;
};

export type DetailItem = {
  availableBuy: boolean;
  userPoint: number;
  itemResponse: ItemList;
};
