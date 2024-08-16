import styled, { keyframes } from 'styled-components';

export default function LoadingSpinner() {
  return (
    <LoadingSpinnerContainer>
      <Spinner />
    </LoadingSpinnerContainer>
  );
}

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  border: 8px solid rgba(0, 0, 0, 0.1);
  border-top: 8px solid #23A1F8;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: ${rotate} 1s linear infinite;
`;

const LoadingSpinnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
