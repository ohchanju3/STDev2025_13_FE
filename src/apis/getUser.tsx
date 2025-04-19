// src/api/user.ts
import { getResponse } from "./instance";

interface UsernameResponse {
  statusCode: number;
  message: string;
  data: {
    name: string;
  };
}

// 사용자 이름 가져오기
export const getUsername = async (): Promise<string | null> => {
  const data = await getResponse<UsernameResponse>("/api/members/name");
  return data ? data.data.name : null;
};
