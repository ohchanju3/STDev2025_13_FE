import styled from "styled-components";

const QcardBrain = () => {
  return (
    <>
      <QCardBrain>
        <QcardBrainTitle>- 브레인 클라우드</QcardBrainTitle>
        <QcardBrainContainer>
          <QcardBrainImg>
            <QcardBrainText1>무기력</QcardBrainText1>
            <QcardBrainText2>슬픔</QcardBrainText2>
            <QcardBrainText3>분노</QcardBrainText3>
            <QcardBrainText4>기대</QcardBrainText4>
            <QcardBrainText5>행복</QcardBrainText5>
          </QcardBrainImg>
        </QcardBrainContainer>
      </QCardBrain>
    </>
  );
};

const QCardBrain = styled.div``;

const QcardBrainTitle = styled.p`
  font-size: 28px;
  margin-top: 2rem;
`;

const QcardBrainContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const QcardBrainImg = styled.div`
  background-image: url("/images/qreport/brain.png");
  width: 80%;
  height: 300px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  margin-top: 2rem;
  position: relative;
`;

const QcardBrainText1 = styled.p`
  position: absolute;
  font-size: 40px;
  top: 28%;
  left: 42%;
  cursor: pointer;
`;

const QcardBrainText2 = styled.p`
  position: absolute;
  font-size: 28px;
  top: 17%;
  left: 35%;
  cursor: pointer;
`;

const QcardBrainText3 = styled.p`
  position: absolute;
  font-size: 26px;
  top: 35%;
  left: 33%;
  cursor: pointer;
`;

const QcardBrainText4 = styled.p`
  position: absolute;
  font-size: 22px;
  top: 40%;
  left: 60%;
  cursor: pointer;
`;

const QcardBrainText5 = styled.p`
  position: absolute;
  font-size: 18px;
  top: 30%;
  left: 70%;
  cursor: pointer;
`;

export default QcardBrain;
