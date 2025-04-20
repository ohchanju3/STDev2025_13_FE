import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { fetchQcardDetail } from "@apis/getQreportDetail";
import dayjs from "dayjs";

interface Qcardprops {
  data?: { createdAt: string; summaryTitle: string }[];
  wrapperHeight?: string;
  containerHeight?: string;
}

const formatDate = (createdAt: string): string => {
  return dayjs(createdAt).format("YYYY.MM.DD");
};

const QreportTextBox = ({
  data,
  wrapperHeight = "180px",
  containerHeight = "150px",
}: Qcardprops) => {
  const navigate = useNavigate();

  const handleClick = async (summaryTitle: string, createdAt: string) => {
    const detailRes = await fetchQcardDetail(summaryTitle);

    if (detailRes?.data) {
      navigate("/qreportCard", {
        state: {
          ...detailRes.data,
          createdAt,
        },
      });
    } else {
      console.error("상세 데이터 없음 또는 에러 발생");
    }
  };

  const sortedData = data?.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  return (
    <QcardTextBoxWrapper height={wrapperHeight}>
      <TextContainer height={containerHeight}>
        {sortedData?.map((item, index) => (
          <TextItem
            key={index}
            onClick={() => handleClick(item.summaryTitle, item.createdAt)}
          >
            <DateText>{formatDate(item.createdAt)}</DateText>
            <TitleText>{item.summaryTitle}</TitleText>
          </TextItem>
        ))}
      </TextContainer>
    </QcardTextBoxWrapper>
  );
};

const QcardTextBoxWrapper = styled.div<{ height: string }>`
  position: relative;
  width: 310px;
  height: ${(props) => props.height};
  border-radius: 22.857px;
  background: #9ab6d1;
  box-shadow: 1.829px 1.829px 3.657px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 20px;
  overflow-y: auto;
`;

const TextContainer = styled.div<{ height: string }>`
  width: 100%;
  height: ${(props) => props.height};
  overflow-y: auto;
  border-radius: 13.714px;
  background: #3a4e61;
  padding: 10px;
`;

const TextItem = styled.div`
  display: flex;
  font-size: 15.385px;
  font-weight: 400;
  padding: 5px;
  margin-bottom: 5px;
  width: 100%;
  gap: 20px;
  cursor: pointer;
  color: white;
  padding: 10px;

  &:not(:last-child) {
    border-bottom: 1px solid #ffffff;
  }
`;

const DateText = styled.span`
  font-weight: bold;
  color: #ffffff;
`;

const TitleText = styled.span`
  color: #ffffff;
  text-align: left;
`;

export default QreportTextBox;
