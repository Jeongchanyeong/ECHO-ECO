import { keyframes } from 'styled-components';

export const StageFloat = keyframes`
  0% {
    transform: translateY(0);
  }
  25% {
    transform:  translateY(-4px);
  }
  50% {
    transform: translateY(-2px);
  }
  75% {
    transform:  translateY(-4px);
  }
  100% {
    transform: translateY(0);
  }
`;

export const PollutedFloat = keyframes`
  0% {
    transform: translateX(0) translateY(0);
  }
  25% {
    transform: translateX(-5px) translateY(-10px);
  }
  50% {
    transform: translateX(0) translateY(-5px);
  }
  75% {
    transform: translateX(5px) translateY(-10px);
  }
  100% {
    transform: translateX(0) translateY(0);
  }
`;
