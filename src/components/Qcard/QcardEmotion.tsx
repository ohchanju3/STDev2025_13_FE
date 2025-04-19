import styled from "styled-components";
import EmotionBox from "./QcardEmotionBox";

interface EmotionContainerProps {
  selectedEmotion: string;
  setSelectedEmotion: (emotion: string) => void;
}

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

const EmotionContainer = ({
  selectedEmotion,
  setSelectedEmotion,
}: EmotionContainerProps) => {
  const emotions = [
    { src: "/images/emotion/happy.png", des: "행복" },
    { src: "/images/emotion/excited.png", des: "기대" },
    { src: "/images/emotion/proud.png", des: "뿌듯" },
    { src: "/images/emotion/calm.png", des: "평온" },
    { src: "/images/emotion/lethargic.png", des: "무기력" },
    { src: "/images/emotion/disappointed.png", des: "실망" },
    { src: "/images/emotion/anxious.png", des: "불안" },
    { src: "/images/emotion/sad.png", des: "슬픔" },
    { src: "/images/emotion/angry.png", des: "분노" },
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
