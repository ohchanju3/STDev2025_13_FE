import styled from "styled-components";

const ButtonContainer = styled.button<{ $isWhiteBg?: boolean }>`
  width: 100px;
  height: 50px;
  border-radius: 20px;
  background: ${({ $isWhiteBg }) => ($isWhiteBg ? "white" : "#999")};
  box-shadow: inset 5px 5px 10px 5px rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;

const ButtonImage = styled.img`
  width: 19.167px;
  height: 18.333px;
  object-fit: contain;
`;

interface ButtonProps {
  imgSrc: string;
  alt?: string;
  onClick?: () => void;
  $isWhiteBg?: boolean;
}

const Button = ({
  imgSrc,
  alt = "button",
  onClick,

  $isWhiteBg,
}: ButtonProps) => {
  return (
    <ButtonContainer onClick={onClick} $isWhiteBg={$isWhiteBg}>
      <ButtonImage src={imgSrc} alt={alt} />
    </ButtonContainer>
  );
};

export default Button;
