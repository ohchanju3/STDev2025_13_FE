import { useEffect, useState } from "react";
import styled from "styled-components";
import QreportTextBox from "./QreportTextBox";
import { getReportAll } from "@apis/getReportAll";

interface ReportType {
  createdAt: string;
  summaryTitle: string;
}

const formatDate = (createdAt: string): string => {
  const date = new Date(createdAt);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${year}.${month}.${day}`;
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
