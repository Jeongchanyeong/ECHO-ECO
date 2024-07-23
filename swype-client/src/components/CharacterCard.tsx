import styled from 'styled-components';
import { CharacterList } from '../model/characterType';
import { showToast } from '../share/utils/Toast';
type CharacterData = {
  Characters: CharacterList;
  isSelected: boolean;
  handleSelect: (item: string) => void;
  handleImage: (image: string) => void;
};

interface ImgBoxProps {
  isSelected: boolean;
}

const CharacterCard: React.FC<CharacterData> = ({
  Characters,
  isSelected,
  handleSelect,
  handleImage,
}) => {
  const handleCheck = () => {
    if (!Characters.isPossible) {
      showToast('info', '서비스 준비 중인 캐릭터입니다.');
      return;
    } else {
      handleSelect(Characters.name);
    }

    !isSelected ? handleImage(Characters.image) : handleImage('');
  };

  return (
    <CardBox onClick={handleCheck}>
      <ImgBox isSelected={isSelected}>
        <img src={Characters.image} />
        <Info isSelected={isSelected}>{Characters.name}</Info>
      </ImgBox>
    </CardBox>
  );
};

export default CharacterCard;

const CardBox = styled.div`
    border: 2px solid #EBEBEB;
    border-radius: 10px;
    width: 30%;
    height: 45%;
    margin: 5px;
    cursor: pointer;
`;

const ImgBox = styled.div<ImgBoxProps>`
    width: 100%;
    height: 100%;
    padding-top:10px;
    position: relative;
    display: flex;
    justify-content: center;
    border-radius: 10px;
    background-color: ${props => (props.isSelected ? '#7FD0FF' : '#fff')};
    img{
        width:80%;
        height: 100%;
    }
`;

const Info = styled.div<ImgBoxProps>`
    width: 100%;
    height: 30%;
    background-color: ${props => (props.isSelected ? 'black' : '#EBEBEB')};
    color: ${props => (props.isSelected ? '#fff' : '#959595')};
    font-size: ${props => props.theme.font.size.choose};
    font-weight : bold;
    border-radius: 0px 0px 10px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0;
`;
