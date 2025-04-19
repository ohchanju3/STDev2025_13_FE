import styled from "styled-components";
import QreportTextBox from "./QreportTextBox";

const QcardArchiving = () => {
  // 더미 데이터 예시: 날짜와 제목
  const dummyData = [
    { date: "2025.04.20", title: "제목" },
    { date: "2025.04.19", title: "행복은 우리의 것" },
    { date: "2025.04.18", title: "새로운 시작" },
    { date: "2025.04.18", title: "새로운 시작" },
    { date: "2025.04.18", title: "새로운 시작" },
  ];

  return (
    <>
      <QcardBrainTitle>- Oh! 아카이빙</QcardBrainTitle>
      <QcardContainer>
        <QreportTextBox data={dummyData} />
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
