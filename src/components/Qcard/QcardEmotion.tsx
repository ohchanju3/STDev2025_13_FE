import styled from "styled-components";
import EmotionBox from "./QcardEmotionBox";
import { useEmotionStore } from "src/state/emotionStore";

const EmotionWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  width: 100%;
  justify-content: center;
  padding: 0 20px;
  margin-bottom: 30px;
  @media (max-width: 320px) {
    transform: scale(0.7);
    transform-origin: top center;
    margin-bottom: -80px;
    margin-top: 30px;
  }
`;

const EmotionContainer = () => {
  const { selectedEmotion, setSelectedEmotion } = useEmotionStore();

  const emotions = [
    { src: "/images/emotion/행복.png", des: "행복" },
    { src: "/images/emotion/기대.png", des: "기대" },
    { src: "/images/emotion/뿌듯.png", des: "뿌듯" },
    { src: "/images/emotion/평온.png", des: "평온" },
    { src: "/images/emotion/무기력.png", des: "무기력" },
    { src: "/images/emotion/실망.png", des: "실망" },
    { src: "/images/emotion/불안.png", des: "불안" },
    { src: "/images/emotion/슬픔.png", des: "슬픔" },
    { src: "/images/emotion/분노.png", des: "분노" },
  ];

  return (
    <EmotionWrapper>
      {emotions.map((emotion) => (
        <EmotionBox
          key={emotion.des}
          imgSrc={emotion.src}
          emotionDes={emotion.des}
          selected={selectedEmotion === emotion.des}
          onClick={() => setSelectedEmotion(emotion.des)}
        />
      ))}
    </EmotionWrapper>
  );
};

export default EmotionContainer;
