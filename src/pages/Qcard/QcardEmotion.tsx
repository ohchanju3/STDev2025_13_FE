import BottomButton from "@components/Common/button/BottomButton";
import Header from "@components/Common/layout/Header";
import ProgressBar from "@components/Qcard/ProgressBar";
import QcardCharacter from "@components/Qcard/QcardCharacter";
import EmotionContainer from "@components/Qcard/QcardEmotion";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEmotionStore } from "src/state/emotionStore";

const QcardPageCreate = () => {
  const navigate = useNavigate();
  const { selectedEmotion } = useEmotionStore();

  const handleNextBtn = () => {
    navigate("/qcardQna");
  };

  return (
    <QCardPageWrapper>
      <Header title="Oh! 카드 생성" customBackPath="/main" />
      <ProgressBar totalSteps={4} currentStep={1} />
      <QcardCharacter />
      <EmotionContainer />
      <BottomButton
        onclickRight={handleNextBtn}
        isLeftActive={false}
        isRightActive={selectedEmotion !== ""}
      />
    </QCardPageWrapper>
  );
};

const QCardPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default QcardPageCreate;
