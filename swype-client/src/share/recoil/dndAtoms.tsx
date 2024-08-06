import { atom } from 'recoil';
import Can from '../../assets/trash/Can.png';
import Mask from '../../assets/trash/Mask.png';
import PlasticBag from '../../assets/trash/PlasticBag.png';

export const initialTrashItemsState = [
  { src: PlasticBag, alt: 'Plastic Bag', top: '12%', left: '10%', width: '30%' },
  { src: Can, alt: 'Can', top: '20%', left: '80%', width: '70%' },
  { src: Mask, alt: 'Mask', top: '45%', left: '40%', width: '40%' },
];

export const draggableItemsState = atom({
  key: 'draggableItemsState',
  default: initialTrashItemsState,
});
