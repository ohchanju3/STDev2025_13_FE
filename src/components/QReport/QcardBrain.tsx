import { getTopEmotions } from "@apis/getEmotionFive";
import { getEmotionSummary } from "@apis/getEmotionSummary";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const QcardBrain = () => {
  const [emotions, setEmotions] = useState<string[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEmotions = async () => {
      const data = await getTopEmotions();
      if (data) {
        const onlyEmotions = data.map((item) => item.emotion);
        setEmotions(onlyEmotions);
      } else {
        setEmotions([]);
      }
    };

    fetchEmotions();
  }, []);

  const handleEmotionClick = async (emotion: string) => {
    try {
      const response = await getEmotionSummary(emotion);

      navigate("/qreportDetail", {
        state: { emotion, data: response },
      });
    } catch (error) {}
  };

  return (
    <>
      <QCardBrain>
        <QcardBrainTitle>- 브레인 클라우드</QcardBrainTitle>
        <QcardBrainContainer>
          <QcardBrainImg>
            <QcardBrainText1 onClick={() => handleEmotionClick(emotions[0])}>
              {emotions[0]}
            </QcardBrainText1>
            <QcardBrainText2 onClick={() => handleEmotionClick(emotions[1])}>
              {emotions[1]}
            </QcardBrainText2>
            <QcardBrainText3 onClick={() => handleEmotionClick(emotions[2])}>
              {emotions[2]}
            </QcardBrainText3>
            <QcardBrainText4 onClick={() => handleEmotionClick(emotions[3])}>
              {emotions[3]}
            </QcardBrainText4>
            <QcardBrainText5 onClick={() => handleEmotionClick(emotions[4])}>
              {emotions[4]}
            </QcardBrainText5>
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
  left: 47%;
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
