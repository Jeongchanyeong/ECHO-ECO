import { Container } from '../../share/utils/GlobalStyle';
import styled from 'styled-components';
import Header from '../../components/common/Header';
import StorePoint from '../../assets/StorePoint.png';
import Button from '../../components/common/Button';
import Point from '../../components/common/Point';
import { useNavigate, useParams } from 'react-router-dom';
import { useMutation, useQuery } from '@tanstack/react-query';
import { DetailItem } from '../../model/storeType';
import { useState } from 'react';
import ItemModal from '../../components/Modal/ItemModal';
import { userData } from '../../share/recoil/userAtom';
import { useSetRecoilState } from 'recoil';
import { useDetailItems } from '../../apis/item/getDetailItem';
import { useBuyItem } from '../../apis/item/buyItem';

const StoreDetail = () => {
  const [isModal, setIsModal] = useState(false);
  const setUserdata = useSetRecoilState(userData);
  const navigate = useNavigate();
  const { id } = useParams();

  const { data: item } = useQuery<DetailItem>({
    queryKey: ['ItemDetail', id],
    queryFn: () => useDetailItems(id as string),
  });

  const Calnum = (item?.userPoint ?? 0) - (item?.itemResponse?.price ?? 0);

  const BuyItem = useMutation({
    mutationFn: useBuyItem,
    onSuccess: data => {
      setIsModal(true);
      setUserdata(prev => ({
        ...prev,
        level: prev.level + data.levelUp,
      }));
    },
  });

  return (
    <>
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
          <ItemImage>
            <img src={item?.itemResponse.imageUrl} />
          </ItemImage>
          <Text>{item?.itemResponse.name}</Text>
          <PriceBox>
            <p>{item?.itemResponse.price}</p>
            <img
              src={StorePoint}
              alt='포인트'
            />
          </PriceBox>
        </DetailBox>
        <Line></Line>
        <InfoBox>
          <InfoText>레벨 상승</InfoText>
          <InfoText>Lv +{item?.itemResponse.levelUp}</InfoText>
        </InfoBox>
        <InfoBox>
          <InfoText>
            <img
              src={StorePoint}
              alt='포인트'
            />
            내 포인트
          </InfoText>
          <InfoText>{item?.userPoint} P</InfoText>
        </InfoBox>
        <InfoBox>
          <InfoText>
            <img
              src={StorePoint}
              alt='포인트'
            />
            구매 후 잔여포인트
          </InfoText>
          <InfoText> {Calnum >= 0 ? `${Calnum} P` : '구매불가'} </InfoText>
        </InfoBox>

        {Calnum > 0 ? (
          <ButtonBox>
            <Button
              $bgColor='lightGray'
              $textColor='gray'
              width='45%'
              height='50px'
              onClick={() => navigate(-1)}
            >
              취소
            </Button>
            <Button
              $bgColor='blue'
              $textColor='lightGray'
              width='45%'
              height='50px'
              onClick={() => BuyItem.mutate(item?.itemResponse.id)}
            >
              구매하기
            </Button>
          </ButtonBox>
        ) : (
          <NoPayButtonBox>
            <NoPayButton disabled={true}>구매 불가</NoPayButton>
          </NoPayButtonBox>
        )}
        <ModalBox $isModal={isModal}>{isModal && <ItemModal item={item} />}</ModalBox>
      </Container>
    </>
  );
};

export default StoreDetail;

const DetailBox = styled.div`
    margin-top: 80px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;
const ModalBox = styled.div<{ $isModal: boolean }>`
  position: absolute;
  width:100%;
  max-width: 480px;
  opacity: ${({ $isModal }) => ($isModal ? 1 : 0)};
  transition: opacity 0.7s ease-in-out; 
`;

const ItemImage = styled.div`
    width: 300px;
    height: 300px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
      width: 100%;
      height: 100%;
    }
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
    width: 20px;
    margin-left: 5px;
  }
  `;

const Line = styled.div`
  height: 20px;
  background-color: #f5f5f5;
  margin: 20px 0px;
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
    width: 20px;
    margin-right: 5px;
  }
`;

const ButtonBox = styled.div`
    padding: 15px 25px;
    display: flex;
    justify-content: center;
    button:nth-child(1){
      margin-right: 10px;
      width: 50%;
    }
    button:nth-child(2){
      width: 50%;
    }
`;

const NoPayButtonBox = styled.div`
    padding: 15px 25px;
    display: flex;
    justify-content: center;
`;

const NoPayButton = styled.button`
  width: 90%;
  height: 50px;
  background-color: #D9D9D9;
  color: #EBEBEB;
  border-radius: 10px;
  font-size: ${props => props.theme.font.size.buttonText};
  font-weight: ${props => props.theme.font.weight.bold};
  margin-top: 20px;
  width: 100%;
`;
