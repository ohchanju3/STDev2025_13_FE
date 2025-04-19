import { getResponse, postNoResponse } from "@apis/instance";

// 텍스트 가져오기
export const getQcardText = async () => {
  const res = await getResponse<string>("/api/get/머시기");
  console.log("받아온 text:", res);
  return res ?? "";
};

// 카드 생성하기
export const postQcardText = async (text: string) => {
  console.log("POST 보낼 텍스트:", text);
  return await postNoResponse("/api/pos", { text });
};
