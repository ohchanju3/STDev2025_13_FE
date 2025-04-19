// api/emotion.ts
import { postNoResponse } from "./instance";

export const postSelectedImage = async (
  selectedImage: string
): Promise<boolean> => {
  try {
    const response = await postNoResponse("/api/processes/emotion", {
      emotion: selectedImage,
    });
    return response;
  } catch (error) {
    console.error("Error posting selected image:", error);
    return false;
  }
};
