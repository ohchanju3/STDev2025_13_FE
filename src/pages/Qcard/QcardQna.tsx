import { useState } from "react";
import BottomButton from "@components/Common/button/BottomButton";
import Header from "@components/Common/layout/Header";
import ProgressBar from "@components/Qcard/ProgressBar";
import QnaBox from "@components/Qcard/QnABox";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import { submitAnswer } from "@apis/patchAnswer";
import Loading from "@components/Common/loading/Loading";

// 응답 타입 정의
interface SubmitAnswerResponse {
  statusCode: number;
  message: string;
  data: {
    firstResult: string;
  };
}

const QcardQnA = () => {
  const [answer, setAnswer] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const location = useLocation();
  const { processesId, question } = location.state || {};

  if (!question) {
    return;
  }

  const handleBackBtn = () => {
    navigate(-1);
  };

  // answer 제출하기
  const handleSubmit = async () => {
    setIsLoading(true);

    try {
      const res = (await submitAnswer(
        processesId,
        answer
      )) as SubmitAnswerResponse;
      const firstResult = res.data.firstResult;

      setTimeout(() => {
        navigate("/qcardText", { state: { firstResult, processesId } });
      }, 1000);
    } catch (err) {
      console.error("전송 실패:", err);
      alert("문제가 생겼어요! 다시 시작해주세요 :(");
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading && (
        <Overlay>
          <Loading text="카드 텍스트 생성 중" />
        </Overlay>
      )}
      <Header title="Oh! 카드 생성" />

      <ProgressBar totalSteps={4} currentStep={2} />
      <QCardPageWrapper>
        <QcardCharacter src="/images/qcard/QcardQna.png" />
        <QnaBoxContainer>
          <QnaBox title="Q" text={question} />
          <QnaBox
            title="A"
            text={answer}
            isEditable
            onChange={(value) => setAnswer(value)}
          />
        </QnaBoxContainer>
        <BottomButton
          onclickLeft={handleBackBtn}
          isLeftActive={true}
          isRightActive={answer.trim() !== ""}
          onclickRight={handleSubmit}
        />
      </QCardPageWrapper>
    </>
  );
};

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const QCardPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
`;

const QcardCharacter = styled.img`
  width: 50%;
`;

const QnaBoxContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default QcardQnA;
