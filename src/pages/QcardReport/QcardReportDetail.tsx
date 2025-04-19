import Header from "@components/Common/layout/Header";
import QreportTextBox from "@components/QReport/QreportTextBox";
import styled from "styled-components";

const QcardReportDetail = () => {
  const dummyData = [
    { date: "2025.04.20", title: "제목" },
    { date: "2025.04.19", title: "행복은 우리의 것" },
    { date: "2025.04.18", title: "새로운 시작" },
    { date: "2025.04.18", title: "새로운 시작" },
    { date: "2025.04.18", title: "새로운 시작" },
  ];

  return (
    <>
      <Header title="Oh! Archive" />
      <QcardReportDetailWrapper>
        <QCardReportDetailTitle>- 무기력</QCardReportDetailTitle>
        <QcardReportDetailContainer>
          <QreportTextBox
            data={dummyData}
            wrapperHeight="70vh"
            containerHeight="65vh"
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

const QCardReportDetailTitle = styled.h1`
  font-size: 28px;
  margin-bottom: 20px;
`;

const QcardReportDetailContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export default QcardReportDetail;
