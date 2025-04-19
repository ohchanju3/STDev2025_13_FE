import BottomButton from "@components/Common/button/BottomButton";
import Header from "@components/Common/layout/Header";
import ProgressBar from "@components/Qcard/ProgressBar";
import QcardCharacter from "@components/Qcard/QcardCharacter";
import EmotionContainer from "@components/Qcard/QcardEmotion";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEmotionStore } from "src/state/emotionStore";
import { postSelectedImage } from "@apis/postEmotion";
import { useState } from "react";

const QcardPageCreate = () => {
  const navigate = useNavigate();
  const { selectedEmotion } = useEmotionStore();

  const [responseData, setResponseData] = useState<{
    emotion: string;
    processesId: number;
    question: string;
  } | null>(null);

  const handleNextBtn = async () => {
    if (!selectedEmotion) {
      console.log("감정이 선택되지 않았습니다.");
      return;
    }

    const response = await postSelectedImage(selectedEmotion);
    console.log(selectedEmotion);

    if (response && response.statusCode === 200) {
      const { emotion, processesId, question } = response.data;

      setResponseData({
        emotion,
        processesId,
        question,
      });

      console.log(response);

      navigate("/qcardQna", {
        state: { emotion, processesId, question },
      });
    } else {
      console.log("감정 전송 실패");
    }
  };

  return (
    <QCardPageWrapper>
      <Header title="Oh! 카드 생성" customBackPath="/main" />
      <ProgressBar totalSteps={4} currentStep={1} />
      <QcardCharacter />
      <EmotionContainer />

      {responseData && (
        <div>
          <h2>응답 데이터:</h2>
          <p>감정: {responseData.emotion}</p>
          <p>질문: {responseData.question}</p>
          <p>프로세스 ID: {responseData.processesId}</p>
        </div>
      )}

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
