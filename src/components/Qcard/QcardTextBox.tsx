import styled from "styled-components";

interface Qcardprops {
  text?: string;
}

const QcardTextBox = ({ text }: Qcardprops) => {
  return (
    <QcardTextBoxWrapper>
      <QcardTextBubble>{text}</QcardTextBubble>
    </QcardTextBoxWrapper>
  );
};

const QcardTextBoxWrapper = styled.div`
  position: relative;
  width: 310px;

  height: 180px;
  border-radius: 22.857px;
  background: #9ab6d1;
  box-shadow: 1.829px 1.829px 3.657px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
`;
const QcardTextBubble = styled.div`
  overflow: scroll;
  display: flex;
  font-size: 16.457px;
  font-style: normal;
  font-weight: 400;
  line-height: 21.943px;
  border-radius: 13.714px;
  background: #3a4e61;
  box-shadow: 0.914px 0.914px 4.571px 0px rgba(0, 0, 0, 0.25) inset;
  width: 90%;
  height: 140px;
  padding: 10px;
`;

export default QcardTextBox;
