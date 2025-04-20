import { useEffect, useState } from "react";
import styled from "styled-components";
import QreportTextBox from "./QreportTextBox";
import { getReportAll } from "@apis/getReportAll";
import dayjs from "dayjs"; // ✅ 추가

interface ReportType {
  createdAt: string;
  summaryTitle: string;
}

const formatDate = (createdAt: string): string => {
  return dayjs(createdAt).format("YYYY.MM.DD");
};

const QcardArchiving = () => {
  const [reportData, setReportData] = useState<ReportType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getReportAll();
      if (data) {
        setReportData(data);
      }
    };

    fetchData();
  }, []);

  const sortedData = reportData
    .map((item) => ({
      createdAt: formatDate(item.createdAt),
      summaryTitle: item.summaryTitle,
      rawDate: item.createdAt,
    }))
    .sort(
      (a, b) => new Date(b.rawDate).getTime() - new Date(a.rawDate).getTime()
    );

  return (
    <>
      <QcardBrainTitle>- Oh! 아카이빙</QcardBrainTitle>
      <QcardContainer>
        <QreportTextBox data={sortedData} />
      </QcardContainer>
    </>
  );
};

const QcardBrainTitle = styled.p`
  font-size: 28px;
  margin-top: 2rem;
`;

const QcardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export default QcardArchiving;
