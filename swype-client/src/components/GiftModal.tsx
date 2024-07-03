import styled from 'styled-components';
import { Container } from '../common/GlobalStyle';
import coffee from '../assets/coffee.png';
import EmailIcon from '../assets/EmailIcon.png';
import Button from '../common/Button';

export default function GiftModal() {
  return (
    <Container>
      <ModalBox>
        <InfoModal>
          <Title> 기프티콘 발송 안내</Title>
          <Info>이메일을 입력하고 기프티콘을 받아요</Info>
          <Img src={coffee} />
          <Tag>[빽다방]</Tag>
          <SubInfo>아이스 아메리카노</SubInfo>
          <InputBox>
            <EmailInput placeholder='example@ecoecho.com'></EmailInput>
            <Icon src={EmailIcon} />
          </InputBox>
          <Button
            bgColor='blue'
            textColor='white'
            width='100%'
            height='50px'
          >
            확인
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
    border-radius: 20px;
    width: 100%;
    background-color: #fff;
    padding:20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Title = styled.p`
    font-size: ${props => props.theme.font.size.quizHeader1};
    font-weight: ${props => props.theme.font.weight.extraBold};
`;

const Info = styled.p`
    font-size: ${props => props.theme.font.size.body};
    font-weight: ${props => props.theme.font.weight.bold};
    color : ${props => props.theme.colors.text.darkGray};
    margin: 15px 0px;
`;

const Img = styled.img`
    border: 1px solid #EBEBEB;
    width: 100px;
    height: 100px;
    border-radius: 20px;
    margin-bottom: 15px;
`;

const Tag = styled.p`
    font-size: ${props => props.theme.font.size.choose};
    font-weight: ${props => props.theme.font.weight.bold};
    color : ${props => props.theme.colors.text.darkGray};
    margin: 10px 0px;
`;

const SubInfo = styled.p`
    font-size: ${props => props.theme.font.size.chipText};
    font-weight: ${props => props.theme.font.weight.bold};
    margin-bottom: 40px;
`;

const InputBox = styled.div`
    width:100%;
    position: relative;
    display: flex;
    align-items: center;
    margin-bottom: 15px;
`;

const EmailInput = styled.input`
    background-color: #f6f7f9;
    border: none;
    border-radius: 12px;
    width:100%;
    height: 40px;
    outline: none;
    padding:10px 10px 10px 10px;
`;

const Icon = styled.img`
position: absolute;
right: 0;
padding-right: 15px;
`;
