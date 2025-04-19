// src/styles/animations.ts
import { keyframes } from "styled-components";

// 위아래로 동동 뜨는 애니메이션
export const floating = keyframes`
  from {
    transform: translateY(30px);
  }
  25% {
    transform: translateY(-15px);
  }
  50% {
    transform: translateY(20px);
  }
  75% {
    transform: translateY(-10px);
  }
  to {
    transform: translateY(30px);
  }
`;

export const floatingSmall = keyframes`
  from {
    transform: translateY(10px);
  }
  25% {
    transform: translateY(-5px);
  }
  50% {
    transform: translateY(10px);
  }
  75% {
    transform: translateY(-5px);
  }
  to {
    transform: translateY(10px);
  }
`;

export const rotateY = keyframes`
  0% {
    transform: rotateY(0deg) scale(1);

  }
  50% {
    transform: rotateY(180deg) scale(1.1);

  }
  100% {
    transform: rotateY(360deg) scale(1);

  }
`;
