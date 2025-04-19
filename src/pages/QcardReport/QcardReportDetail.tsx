import { useLocation } from "react-router-dom";
import Header from "@components/Common/layout/Header";
import QreportTextBox from "@components/QReport/QreportTextBox";
import styled from "styled-components";

const QcardReportDetail = () => {
  const location = useLocation();
  const { emotion, data } = location.state || { emotion: "", data: [] };

  return (
    <>
      <Header title="Oh! Archive" />
      <QcardReportDetailWrapper>
        <QCardReportDetailTitle>- {emotion}</QCardReportDetailTitle>
        <QcardReportDetailContainer>
          <QreportTextBox
            data={data}
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
