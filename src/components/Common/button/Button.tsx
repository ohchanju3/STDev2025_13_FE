import styled from "styled-components";

const ButtonContainer = styled.button`
  width: 100px;
  height: 50px;
  border-radius: 20px;
  background: #999;
  box-shadow: inset 5px 5px 10px 5px rgb(0, 0, 0, 0.2);
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
}

const Button = ({ imgSrc, alt = "button", onClick }: ButtonProps) => {
  return (
    <ButtonContainer onClick={onClick}>
      <ButtonImage src={imgSrc} alt={alt} />
    </ButtonContainer>
  );
};

export default Button;
