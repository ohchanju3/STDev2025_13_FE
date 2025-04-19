// src/pages/QcardQnA.tsx
import { useEffect, useState } from "react";
import BottomButton from "@components/Common/button/BottomButton";
import Header from "@components/Common/layout/Header";
import ProgressBar from "@components/Qcard/ProgressBar";
import QnaBox from "@components/Qcard/QnABox";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { submitAnswer, getQuestion } from "@apis/patchAnswer";

const QcardQnA = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // 질문 가져오기
    const fetchQuestion = async () => {
      try {
        const data = await getQuestion();
        setQuestion(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchQuestion();
  }, []);

  const handleBackBtn = () => {
    navigate(-1);
  };

  //answer 제출하기
  const handleSubmit = async () => {
    console.log("사용자 답변:", answer);

    try {
      const res = await submitAnswer(answer);
      console.log("서버 응답:", res);
      navigate("/qcardText");
    } catch (err) {
      console.error("전송 실패:", err);
      alert("문제가 생겼어요! 다시 시작해주세요 :(");
    }
  };

  return (
    <>
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
