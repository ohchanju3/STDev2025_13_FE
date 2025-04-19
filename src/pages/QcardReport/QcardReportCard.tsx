import Header from "@components/Common/layout/Header";
import QcardResultBox from "@components/Qcard/QcardResultBox";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";

const QcardReportCard = () => {
  const location = useLocation();
  const data = location.state;
  const [flipped, setFlipped] = useState(false);

  const formatDate = (createdAt: string): string => {
    const date = new Date(createdAt);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return `${year}.${month}.${day}`;
  };

  if (!data) return <div>데이터를 불러오는 중입니다...</div>;

  return (
    <>
      <Header title="Oh! Archive" />
      <QcardReportDetailWrapper>
        <QCardReportDetailTitle>
          - {formatDate(data.createdAt)}
        </QCardReportDetailTitle>
        <QcardReportDetailContainer>
          <QcardResultBox
            flipped={flipped}
            setFlipped={setFlipped}
            base64={data.image}
            backTitle={data.summaryTitle}
            backContent={data.summary}
            formattedDate={formatDate(data.createdAt)}
          />
        </QcardReportDetailContainer>
      </QcardReportDetailWrapper>
    </>
  );
};

const QcardReportDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
`;

const QcardReportDetailContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  position: absolute;
`;

const QCardReportDetailTitle = styled.h1`
  font-size: 28px;
  margin-bottom: 20px;
`;

export default QcardReportCard;
