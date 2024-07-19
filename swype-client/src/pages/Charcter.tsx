import { Container } from '../share/utils/GlobalStyle';
import styled from 'styled-components';
import back from '../assets/Grass_Land.png';
import TreeImg from '../assets/tree.png';
import Pola from '../assets/Pola.png';
import CharacterCard from '../components/CharacterCard';
import Button from '../components/common/Button';
import { useState } from 'react';

export default function Charcter() {
  const [selectedItem, setSelectedItem] = useState<string>('');

  const handleSelect = (item: string) => {
    const newItem = item === selectedItem ? '' : item;
    setSelectedItem(newItem);
  };
  const [CardItem, setCardItem] = useState<string[]>([
    '폴라',
    '뤄카',
    '붉은 팬더',
    '바다 거북',
    '코알라',
  ]);

  return (
    <Container>
      <BackBox>
        <TitleBox>
          <Title>성장시킬 동물을 선택해 주세요!</Title>
        </TitleBox>
        <ImgBox>
          <Animal src={Pola}></Animal>
          <Tree src={TreeImg}></Tree>
        </ImgBox>
        <SelectBox>
          <CardBox>
            {CardItem.map((item, idx) => (
              <CharacterCard
                key={idx}
                item={item}
                isSelected={selectedItem === item}
                handleSelect={handleSelect}
              />
            ))}
          </CardBox>
          <ButtonBox>
            <Button
              bgColor={'blue'}
              width='90%'
              height='50px'
              textColor='lightGray'
            >
              확인
            </Button>
          </ButtonBox>
        </SelectBox>
      </BackBox>
    </Container>
  );
}

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
    width:40%;
    z-index: 1;
`;

const Tree = styled.img`
    width:60%;
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
