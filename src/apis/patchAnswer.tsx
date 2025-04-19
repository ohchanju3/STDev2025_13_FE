// src/api/qcardApi.ts
import { patchResponse } from "./instance";

export const submitAnswer = async (processId: number, answer: string) => {
  try {
    const response = await patchResponse(
      `/api/processes/${processId}/first-result`,
      { answer }
    );
    console.log(response);
    return response;
  } catch (error) {
    console.error("답변 전송 실패:", error);
    throw new Error("답변 전송에 실패했습니다 :( 다시 시도해주세요!");
  }
};
