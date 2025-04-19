import { useState } from "react";
import BottomButton from "@components/Common/button/BottomButton";
import Header from "@components/Common/layout/Header";
import QcardCharacter from "@components/Qcard/QcardCharacter";
import EmotionContainer from "@components/Qcard/QcardEmotion";
import styled from "styled-components";

const QcardPage = () => {
  const [selectedEmotion, setSelectedEmotion] = useState<string>("");

  return (
    <>
      <Header title="Oh! 카드 생성" />
      <QcardCharacter />
      <QCardPageWrapper>
        <EmotionContainer
          selectedEmotion={selectedEmotion}
          setSelectedEmotion={(emotion) => {
            console.log("선택된 감정:", emotion);
            setSelectedEmotion(emotion);
          }}
        />
        <BottomButton />
      </QCardPageWrapper>
    </>
  );
};

const QCardPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default QcardPage;
