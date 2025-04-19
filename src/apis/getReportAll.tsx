// src/api/user.ts
import { getResponse } from "./instance";

interface ReportType {
  createdAt: string;
  summaryTitle: string;
}

interface UsernameResponse {
  statusCode: number;
  message: string;
  data: ReportType[];
}

export const getReportAll = async (): Promise<ReportType[] | null> => {
  try {
    const response = await getResponse<UsernameResponse>(
      "/api/members/process-detail/all"
    );

    if (!response || !response.data) {
      return null;
    }
    return response.data;
  } catch (error) {
    return null;
  }
};
