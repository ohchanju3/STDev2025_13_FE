import { getResponse } from "./instance";

interface EmotionType {
  emotion: string;
  count: number;
}

interface ApiResponse {
  data: EmotionType[];
  message: string;
  statusCode: number;
}

// 상위 감정 5개 GET
export const getTopEmotions = async (): Promise<EmotionType[] | null> => {
  try {
    const response = await getResponse<ApiResponse>(
      "/api/members/top-emotions"
    );

    if (!response || !response.data) {
      return null;
    }

    return response.data;
  } catch (error) {
    console.error("API 요청 실패:", error);
    return null;
  }
};
