import { rotateY } from "@components/Login/animation";
import styled from "styled-components";

interface LoadingProps {
  text: string;
}

const Loading = ({ text }: LoadingProps) => {
  return (
    <LoadingWrapper>
      <LoadingImg src="/images/common/LoadingImg.png" />
      <LoadingText>{text}</LoadingText>
    </LoadingWrapper>
  );
};

//style
const LoadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  z-index: 999;
  width: 100%;
  height: 100%;
  gap: 1rem;
`;

const LoadingImg = styled.img`
  width: 80%;
  max-width: 300px;
  animation: ${rotateY} 4s ease-in-out infinite;
`;

const LoadingText = styled.span`
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  color: white;
`;

export default Loading;
