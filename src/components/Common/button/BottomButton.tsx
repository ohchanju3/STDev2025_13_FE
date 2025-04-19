// BottomButton.tsx
import styled from "styled-components";
import Button from "./Button";

interface buttonProps {
  onclickLeft?: () => void;
  onclickRight?: () => void;
  isLeftActive?: boolean;
  isRightActive?: boolean;
}

const BottomButton = ({
  onclickLeft,
  onclickRight,
  isLeftActive = true,
  isRightActive = false,
}: buttonProps) => {
  return (
    <BottomButtonContainer>
      <Button
        imgSrc="/images/common/arrowLeft.png"
        onClick={onclickLeft}
        $isWhiteBg={isLeftActive}
      />
      <Button
        imgSrc="/images/common/arrowRight.png"
        onClick={isRightActive ? onclickRight : undefined}
        $isWhiteBg={isRightActive}
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
