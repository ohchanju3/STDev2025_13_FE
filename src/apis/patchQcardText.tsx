// src/apis/getQcardResultData.ts
import { patchResponse } from "./instance";

type QcardImageResponse = {
  statusCode: number;
  message: string;
  data: {
    base64: string;
  };
};

type QcardTextResponse = {
  statusCode: number;
  message: string;
  data: {
    summaryTitle: string;
    summary: string;
  };
};

// export const getQcardResultData = async (processId: string) => {
//   try {
//     const [imageRes, textRes] = await Promise.allSettled([
//       patchResponse<null, QcardImageResponse>(
//         `/api/processes/${processId}/image`
//       ),
//       patchResponse<null, QcardTextResponse>(
//         `/api/processes/${processId}/summary`
//       ),
//     ]);

//     // 결과 분기
//     const imageSuccess =
//       imageRes.status === "fulfilled" && imageRes.value?.data;
//     const textSuccess = textRes.status === "fulfilled" && textRes.value?.data;

//     if (!textSuccess) {
//       throw new Error("텍스트 요약 실패");
//     }

//     return {
//       success: true,
//       data: {
//         base64: imageSuccess ? imageRes?.value?.data?.base64 : null,
//         backTitle: textRes?.value?.data.summaryTitle,
//         backContent: textRes?.value?.data.summary,
//       },
//     };
//   } catch (error) {
//     console.error("getQcardResultData error:", error);
//     return { success: false };
//   }
// };

export const getQcardResultData = async (processId: string) => {
  try {
    // 이미지 데이터
    const imageRes = await patchResponse<null, QcardImageResponse>(
      `/api/processes/${processId}/image`
    );

    if (!imageRes?.data.base64) {
      throw new Error("이미지 실패");
    }

    const textRes = await patchResponse<null, QcardTextResponse>(
      `/api/processes/${processId}/summary`
    );

    return {
      success: true,
      data: {
        base64: imageRes?.data?.base64 || null,
        backTitle: textRes?.data?.summaryTitle,
        backContent: textRes?.data?.summary,
      },
    };
  } catch (error) {
    console.error("getQcardResultData error:", error);
    return { success: false };
  }
};
