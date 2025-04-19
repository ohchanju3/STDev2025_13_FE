// BottomButton.tsx
import styled from "styled-components";
import Button from "./Button";
import { useEmotionStore } from "src/state/emotionStore";

const BottomButton = () => {
  const { selectedEmotion } = useEmotionStore();

  return (
    <BottomButtonContainer>
      <Button imgSrc="/images/common/arrowLeft.png" />
      <Button
        imgSrc="/images/common/arrowRight.png"
        $isWhiteBg={selectedEmotion !== ""}
      />
    </BottomButtonContainer>
  );
};

const BottomButtonContainer = styled.section`
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 393px;
  margin-bottom: 40px;
  transition: background-color 0.3s ease;
`;

export default BottomButton;
