import BottomButton from "@components/Common/button/BottomButton";
import Header from "@components/Common/layout/Header";
import QcardCharacter from "@components/Qcard/QcardCharacter";
import EmotionContainer from "@components/Qcard/QcardEmotion";
import styled from "styled-components";

const QcardPage = () => {
  return (
    <QCardPageWrapper>
      <Header title="Oh! 카드 생성" />
      <QcardCharacter />
      <EmotionContainer />
      <BottomButton />
    </QCardPageWrapper>
  );
};

const QCardPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default QcardPage;
