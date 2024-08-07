import { atom } from 'recoil';
import Can from '../../assets/trash/Can.png';
import Mask from '../../assets/trash/Mask.png';
import PlasticBag from '../../assets/trash/PlasticBag.png';

export const initialTrashItemsState = [
  { src: PlasticBag, alt: 'Plastic Bag', top: '15%', left: '10%', width: '35%' },
  { src: Can, alt: 'Can', top: '20%', left: '75%', width: '60%' },
  { src: Mask, alt: 'Mask', top: '45%', left: '40%', width: '45%' },
];

export const draggableItemsState = atom({
  key: 'draggableItemsState',
  default: initialTrashItemsState,
});
