// @apis/getEmotionSummary.ts
import { getResponse } from "./instance";

interface SummaryItem {
  createdAt: string;
  summaryTitle: string;
}

interface SummaryResponse {
  statusCode: number;
  message: string;
  data: SummaryItem[];
}

export const getEmotionSummary = async (
  emotion: string
): Promise<SummaryItem[] | null> => {
  const url = `/api/members/my-summary?emotion=${encodeURIComponent(emotion)}`;
  const response = await getResponse<SummaryResponse>(url);

  const filtered = response?.data?.filter(
    (item) => item.summaryTitle.trim() !== ""
  );

  return filtered ?? null;
};
