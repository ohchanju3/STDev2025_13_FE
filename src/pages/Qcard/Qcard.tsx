// QcardPage.tsx

import { useState } from "react";
import BottomButton from "@components/Common/button/BottomButton";
import Header from "@components/Common/layout/Header";
import QcardCharacter from "@components/Qcard/QcardCharacter";
import EmotionContainer from "@components/Qcard/QcardEmotion";
import styled from "styled-components";

const QcardPage = () => {
  const [selectedEmotion, setSelectedEmotion] = useState<string>("");

  const emotionsMap: Record<string, string> = {
    행복: "/images/emotion/happy.png",
    기대: "/images/emotion/excited.png",
    뿌듯: "/images/emotion/proud.png",
    평온: "/images/emotion/calm.png",
    무기력: "/images/emotion/lethargic.png",
    실망: "/images/emotion/disappointed.png",
    불안: "/images/emotion/anxious.png",
    슬픔: "/images/emotion/sad.png",
    분노: "/images/emotion/angry.png",
  };

  const selectedEmotionSrc = emotionsMap[selectedEmotion];

  return (
    <QCardPageWrapper>
      <Header title="Oh! 카드 생성" />
      <QcardCharacter emotionSrc={selectedEmotionSrc} />
      <EmotionContainer
        selectedEmotion={selectedEmotion}
        setSelectedEmotion={(emotion) => {
          console.log("선택된 감정:", emotion);
          setSelectedEmotion(emotion);
        }}
      />
      <BottomButton />
    </QCardPageWrapper>
  );
};

const QCardPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default QcardPage;
