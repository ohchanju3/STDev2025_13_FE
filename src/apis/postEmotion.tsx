import { postResponse } from "./instance";

interface EmotionResponse {
  statusCode: number;
  message: string;
  data: {
    emotion: string;
    processesId: number;
    question: string;
  };
}

export const postSelectedImage = async (
  selectedImage: string
): Promise<EmotionResponse | null> => {
  try {
    const response = await postResponse<{ emotion: string }, EmotionResponse>(
      "/api/processes/emotion",
      { emotion: selectedImage }
    );

    if (response && response.statusCode === 200) {
      return response;
    }

    return null;
  } catch (error) {
    console.error("Error posting selected image:", error);
    return null;
  }
};
