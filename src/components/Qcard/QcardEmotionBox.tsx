import styled from "styled-components";

interface ButtonProps {
  imgSrc: string;
  alt?: string;
  emotionDes: string;
  onClick?: () => void;
  selected?: boolean;
}

const EmotionBox = ({
  imgSrc,
  alt,
  onClick,
  emotionDes,
  selected,
}: ButtonProps) => {
  return (
    <EmotionBoxContainer onClick={onClick} $selected={selected}>
      <EmotionBoxImage src={imgSrc} alt={alt} />
      <EmotionBoxDes>{emotionDes}</EmotionBoxDes>
    </EmotionBoxContainer>
  );
};

const EmotionBoxContainer = styled.button<{ $selected?: boolean }>`
  width: 100px;
  height: 100px;
  border-radius: 20px;
  background: rgba(217, 217, 217, 0.15);
  cursor: pointer;
  gap: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border: ${({ $selected }) =>
    $selected ? "3px solid white" : "3px solid transparent"};
`;

const EmotionBoxImage = styled.img`
  width: 42.347px;
  height: 37.936px;
  object-fit: contain;
`;

const EmotionBoxDes = styled.p`
  color: #fff;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
`;

export default EmotionBox;
