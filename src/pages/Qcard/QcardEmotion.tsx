import BottomButton from "@components/Common/button/BottomButton";
import Header from "@components/Common/layout/Header";
import ProgressBar from "@components/Qcard/ProgressBar";
import QcardCharacter from "@components/Qcard/QcardCharacter";
import EmotionContainer from "@components/Qcard/QcardEmotion";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEmotionStore } from "src/state/emotionStore";
import { postSelectedImage } from "@apis/postEmotion";

const QcardPageCreate = () => {
  const navigate = useNavigate();
  const { selectedEmotion } = useEmotionStore();

  const handleNextBtn = async () => {
    if (selectedEmotion !== "") {
      const success = await postSelectedImage(selectedEmotion);
      console.log(selectedEmotion);
      if (success) {
        navigate("/qcardQna");
      } else {
        console.log("감정 전송 실패");
      }
    } else {
      console.log("감정이 선택되지 않았습니다.");
    }
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
