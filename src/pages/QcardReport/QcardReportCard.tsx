import Header from "@components/Common/layout/Header";
import QcardResultBox from "@components/Qcard/QcardResultBox";
import { useState } from "react";
import styled from "styled-components";

const QcardReportCard = () => {
  const [flipped, setFlipped] = useState(false);
  return (
    <>
      <Header title="Oh! Archive" />
      <QcardReportDetailWrapper>
        <QCardReportDetailTitle>- 2025/04/20</QCardReportDetailTitle>
        <QcardReportDetailContainer>
          <QcardResultBox flipped={flipped} setFlipped={setFlipped} />
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
