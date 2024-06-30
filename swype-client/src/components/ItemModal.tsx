import React from 'react';
import styled from 'styled-components';
import Leeca from '../assets/LeeCa.png';
import { Container } from '../common/GlobalStyle';
import Button from '../common/Button';

export default function ItemModal() {
  return (
    <Container>
      <ModalBox>
        <ImgBox>
          <Img src={Leeca} />
        </ImgBox>
        <InfoModal>
          <Title>
            북극곰 먹이 <br />
            구매완료!
          </Title>
          <LevelBox>
            <Level>Lv + 3</Level>
          </LevelBox>
          <Info>
            북극에 사는 북극곰의 먹이는 뤼카이며 북극곰은 귀엽고 북극곰은 흰색이다. 멸종위기 종
            북극곰을 지켜주자
          </Info>
          <PointBox>
            <PointText>남은 포인트 :</PointText>
            <Point>2,500 P</Point>
          </PointBox>

          <Button
            bgColor='blue'
            textColor='white'
            width='100%'
            height='50px'
          >
            스테이지로 바로가기
          </Button>
        </InfoModal>
      </ModalBox>
    </Container>
  );
}

const ModalBox = styled.div`
    margin: 100px auto;
    width:80%;
`;

const InfoModal = styled.div`
    border-radius: 10px;
    width: 100%;
    background-color: #F9F9F9;
    border: 1px solid #f2f2f2;
    padding:20px;
`;

const ImgBox = styled.div`
    display: flex;
    justify-content: center;
`;

const Img = styled.img`
`;

const Title = styled.p`
    font-size: ${props => props.theme.font.size.quizHeader1};
    font-weight: ${props => props.theme.font.weight.extraBold};
    line-height: 1.3;
    display: flex;
    justify-content: center;
    text-align: center;
`;

const LevelBox = styled.div`
    display: flex;
    justify-content: center;
    margin: 10px 0px;
`;

const Level = styled.p`
    display: inline-block;
    padding:10px;
    border-radius: 15px;
    background-color: ${props => props.theme.colors.bgColor.blue};
    font-size: ${props => props.theme.font.size.levelText};
    font-weight: ${props => props.theme.font.weight.bold};
    color:${props => props.theme.colors.text.white};
`;

const Info = styled.div`
    display: flex;
    justify-content: center;
    line-height: 1.3;
    color: ${props => props.theme.colors.text.darkGray};
    font-size: ${props => props.theme.font.size.body};
   font-weight: ${props => props.theme.font.weight.bold};
`;

const PointBox = styled.div`
    display: flex;
    justify-content: center;
    margin: 25px 0px;
`;

const PointText = styled.p`
    color: ${props => props.theme.colors.text.darkGray};
    font-size: ${props => props.theme.font.size.quizHeader2};
    font-weight: ${props => props.theme.font.weight.bold};
`;

const Point = styled.p`
    color: ${props => props.theme.colors.text.blue};
    font-size: ${props => props.theme.font.size.quizHeader2};
    font-weight: ${props => props.theme.font.weight.bold};
    margin-left: 10px;
`;
