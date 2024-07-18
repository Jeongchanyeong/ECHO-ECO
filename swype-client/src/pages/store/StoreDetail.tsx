import { Container } from '../../share/utils/GlobalStyle';
import styled from 'styled-components';
import Header from '../../components/common/Header';
import StorePoint from '../../assets/StorePoint.png';
import Button from '../../components/common/Button';

import Point from '../../components/Point';
import { useNavigate } from 'react-router-dom';

export default function StoreDetail() {
  const navigate = useNavigate();
  return (
    <Container>
      <Header
        onClick={() => {
          navigate(-1);
        }}
        buttonText={' 〈 '}
        title={'아이템'}
        rightChild={<Point />}
      />
      <DetailBox>
        <ItemImage></ItemImage>
        <Text>북극곰 먹이</Text>
        <PriceBox>
          <p>2,500</p>
          <img
            src={StorePoint}
            alt='포인트'
          />
        </PriceBox>
      </DetailBox>
      <Line></Line>
      <InfoBox>
        <InfoText>레벨 상승</InfoText>
        <InfoText>Lv +3</InfoText>
      </InfoBox>
      <InfoBox>
        <InfoText>
          <img
            src={StorePoint}
            alt='포인트'
          />
          내 포인트
        </InfoText>
        <InfoText>5,000 P</InfoText>
      </InfoBox>
      <InfoBox>
        <InfoText>
          <img
            src={StorePoint}
            alt='포인트'
          />
          구매 후 잔여포인트
        </InfoText>
        <InfoText>2,500 P</InfoText>
      </InfoBox>
      <ButtonBox>
        <Button
          bgColor='lightGray'
          textColor='gray'
          width='45%'
          height='60px'
        >
          취소
        </Button>
        <Button
          bgColor='blue'
          textColor='lightGray'
          width='45%'
          height='60px'
        >
          구매하기
        </Button>
      </ButtonBox>
    </Container>
  );
}

const DetailBox = styled.div`
    margin-top: 80px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

const ItemImage = styled.div`
    background-color: ${props => props.theme.colors.bgColor.gray};
    width: 300px;
    height: 300px;
    border-radius: 50%;
`;

const Text = styled.div`
  display: flex;
  align-items: center;
  font-size: ${props => props.theme.font.size.quizHeader2};
  font-weight: ${props => props.theme.font.weight.extraBold};
  letter-spacing: -0.3px;
  margin-top: 20px;
`;

const PriceBox = styled.div`
  display: flex;
  justify-content: end;
  width:100%;
  margin: 10px 20px 0px 0px;
  p{
    font-weight: ${props => props.theme.font.weight.extraBold};
    font-size: ${props => props.theme.font.size.priceText2};
    letter-spacing: -0.3px;
  }
  img{
    margin-left: 5px;
  }
  `;

const Line = styled.div`
  height: 20px;
  background-color: #f5f5f5;
  margin: 40px 0px;
`;

const InfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding:15px 25px;
`;

const InfoText = styled.p`
  font-size: ${props => props.theme.font.size.body};
  font-weight: ${props => props.theme.font.weight.bold};
  letter-spacing: -0.3px;
  color : #858585;
  display: flex;
  align-items: center;

  img{
    margin-right: 5px;
  }
`;

const ButtonBox = styled.div`
    margin:40px 25px;
    display: flex;
    justify-content: center;
button{
  margin-right: 10px;
}
`;
