// src/apis/getQcardResultData.ts
import { patchResponse } from "./instance";

type QcardImageResponse = {
  base64Image: string;
};

type QcardTextResponse = {
  statusCode: number;
  message: string;
  data: {
    summaryTitle: string;
    summary: string;
  };
};

export const getQcardResultData = async (processId: string) => {
  try {
    const [imageRes, textRes] = await Promise.allSettled([
      patchResponse<null, QcardImageResponse>(
        `/api/processes/${processId}/image`
      ),
      patchResponse<null, QcardTextResponse>(
        `/api/processes/${processId}/summary`
      ),
    ]);

    // 결과 분기
    const imageSuccess =
      imageRes.status === "fulfilled" && imageRes.value?.base64Image;
    const textSuccess = textRes.status === "fulfilled" && textRes.value?.data;

    if (!textSuccess) {
      throw new Error("텍스트 요약 실패");
    }

    return {
      success: true,
      data: {
        base64Image: imageSuccess ? imageRes?.value?.base64Image : null,
        backTitle: textRes?.value?.data.summaryTitle,
        backContent: textRes?.value?.data.summary,
      },
    };
  } catch (error) {
    console.error("getQcardResultData error:", error);
    return { success: false };
  }
};
