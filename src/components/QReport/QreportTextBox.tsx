import styled from "styled-components";

interface Qcardprops {
  data?: { date: string; title: string }[];
  wrapperHeight?: string;
  containerHeight?: string;
}

const QreportTextBox = ({
  data,
  wrapperHeight = "180px",
  containerHeight = "150px",
}: Qcardprops) => {
  return (
    <QcardTextBoxWrapper height={wrapperHeight}>
      <TextContainer height={containerHeight}>
        {data?.map((item, index) => (
          <TextItem key={index}>
            <DateText>{item.date}</DateText>
            <TitleText>{item.title}</TitleText>
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
  font-size: 16.457px;
  font-style: normal;
  font-weight: 400;
  line-height: 21.943px;
  padding: 5px;
  margin-bottom: 5px;
  width: 100%;
  gap: 20px;
  font-size: 15.385px;
  cursor: pointer;

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
