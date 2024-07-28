import { Container } from '../../share/utils/GlobalStyle';
import styled from 'styled-components';
import back from '../../assets/Grass_Land.png';
import TreeImg from '../../assets/tree.png';
import Pola from '../../assets/Pola.png';
import Button from '../../components/common/Button';
import { useState } from 'react';

import { useQuery } from '@tanstack/react-query';
import { CharacterList } from '../../model/characterType';
import { useNavigate } from 'react-router-dom';
import { useGetCharacter } from '../../apis/user/getCharacter';
import CharacterCard from '../../components/character/CharacterCard';

const Charcter = () => {
  const [selectedItem, setSelectedItem] = useState<string>('');
  const [selectImage, setSelectImage] = useState<string>('');
  const [selectId, setSelectId] = useState<number>();

  const navigate = useNavigate();

  const { data: Characters } = useQuery<CharacterList[]>({
    queryKey: ['Character'],
    queryFn: useGetCharacter,
  });

  console.log(Characters);

  const handleSelect = (item: string) => {
    const newItem = item === selectedItem ? '' : item;
    setSelectedItem(newItem);
  };

  const handleImage = (image: string) => {
    setSelectImage(image);
  };

  const handleId = (id: number) => {
    setSelectId(id);
  };

  return (
    <Container>
      <BackBox>
        <TitleBox>
          <Title>성장시킬 동물을 선택해 주세요!</Title>
        </TitleBox>
        <ImgBox>
          <AnimalImageBox>
            <Animal src={selectImage && Pola}></Animal>
          </AnimalImageBox>
          <TreeImageBox>
            <Tree src={TreeImg}></Tree>
          </TreeImageBox>
        </ImgBox>
        <SelectBox>
          <CardBox>
            {Characters?.map((item, idx) => (
              <CharacterCard
                key={idx}
                Characters={item}
                isSelected={selectedItem === item.name}
                handleSelect={handleSelect}
                handleImage={handleImage}
                handleId={handleId}
              />
            ))}
          </CardBox>
          <ButtonBox>
            <Button
              $bgColor={'blue'}
              width='90%'
              height='50px'
              $textColor='lightGray'
              onClick={() => navigate(`/selected?character=${selectedItem}&id=${selectId}`)}
            >
              확인
            </Button>
          </ButtonBox>
        </SelectBox>
      </BackBox>
    </Container>
  );
};

export default Charcter;

const BackBox = styled.div`
    width:100%;
    height: 100%;
    background-image: url(${back});
    background-size: cover;
`;

const TitleBox = styled.div`
    width:100%;
    height: 15%;
    color:#fff;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Title = styled.p`
    font-size: ${props => props.theme.font.size.priceText};
    font-weight: ${props => props.theme.font.weight.bold};
    border: 1px solid #fff;
    display: inline-block;
    padding: 15px;
    border-radius: 20px;
`;

const Animal = styled.img`
    width:50%;
`;

const Tree = styled.img`
    width:70%;
    position: relative;
    bottom: 20px;
`;

const ImgBox = styled.div`
    width:100%;
    color:#fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 40%;
`;

const SelectBox = styled.div`
    background-color: #fff;
    height: 45%;
    border-radius: 20px 20px 0px 0px;
    padding:15px;
    position: relative;
    z-index: 1;
`;

const CardBox = styled.div`
    width:100%;
    height: 75%;
    background-color: #fff;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 10px;
`;

const ButtonBox = styled.div`
    display: flex;
    justify-content: center;
    height: 25%;
    padding-top: 3px;
`;

const AnimalImageBox = styled.div`
  width: 100%;
  height: 70%;
  z-index: 1;
  display: flex;
  justify-content: center;
  z-index: 2;
  position: relative;
`;

const TreeImageBox = styled.div`
  width: 100%;
  height: 30%;
  z-index: 1;
  display: flex;
  justify-content: center;
  z-index: 1;
  position: relative;
`;
