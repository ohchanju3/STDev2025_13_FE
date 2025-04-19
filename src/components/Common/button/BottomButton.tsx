import styled from "styled-components";
import Button from "./Button";

const BottomButton = () => {
  return (
    <BottomButtonContainer>
      <Button imgSrc="/images/common/arrowLeft.png" />
      <Button imgSrc="/images/common/arrowRight.png" />
    </BottomButtonContainer>
  );
};

const BottomButtonContainer = styled.section`
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 393px;
  margin-bottom: 40px;
`;

export default BottomButton;
