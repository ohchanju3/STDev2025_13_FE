// src/apis/qreport.ts
import { getResponse } from "./instance";

export const fetchQcardDetail = async (summaryTitle: string) => {
  const query = `/api/members/process-detail?summaryTitle=${encodeURIComponent(
    summaryTitle
  )}`;
  return await getResponse<{ data: any }>(query);
};
