// @apis/getEmotionSummary.ts
import { getResponse } from "./instance";

interface SummaryItem {
  createdAt: string;
  summaryTitle: string;
}

export const getEmotionSummary = async (
  emotion: string
): Promise<SummaryItem[] | null> => {
  const url = `/api/members/my-summary?emotion=${encodeURIComponent(emotion)}`;
  return await getResponse<SummaryItem[]>(url);
};
