import Header from "@components/Common/layout/Header";
import QcardArchiving from "@components/QReport/QcardArchiving";
import QcardBrain from "@components/QReport/QcardBrain";
import styled from "styled-components";

const QcardReportPage = () => {
  return (
    <>
      <Header title="Oh! Archive" customBackPath="/main" />
      <QcardReportWrapper>
        <QcardBrain />
        <QcardArchiving />
      </QcardReportWrapper>
    </>
  );
};

const QcardReportWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  gap: 2rem;
`;
export default QcardReportPage;
