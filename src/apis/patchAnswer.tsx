// src/api/qcardApi.ts
import { patchResponse } from "./instance";

// 사용자 답변 전송
export const submitAnswer = async (answer: string) => {
  try {
    const response = await patchResponse("api endpoint", { answer });
    return response;
  } catch (error) {
    console.error("답변 전송 실패:", error);
    throw new Error("답변 전송에 실패했습니다.");
  }
};

// 질문 가져오기 (임시로 작성한 예시 API)
export const getQuestion = async () => {
  try {
    const question = await fakeGetQuestion();
    return question;
  } catch (error) {
    console.error("질문 가져오기 실패:", error);
    throw new Error("질문을 가져오는 데 실패했습니다.");
  }
};

// 임시 백엔드 시뮬레이션
const fakeGetQuestion = async () => {
  return "왜 사람은 무기력해지는걸까요?";
};
