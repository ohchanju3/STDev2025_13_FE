import React from "react";
import styled from "styled-components";

interface CardItemProps {
  iconSrc: string;
  label: string;
  iconWidth?: string;
  marginTop?: string;
}

const CardWrapper = styled.div`
  width: 150px;
  height: 222px;
  border-radius: 25px;
  background-color: rgba(124, 124, 124, 0.3);
  position: relative;
  overflow: hidden;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  &:hover {
    border: 3px solid white;
  }

  @media (max-width: 320px) {
    scale: calc(0.9);
  }
`;

const CardIcon = styled.img<{ $iconWidth?: string; $marginTop?: string }>`
  width: ${({ $iconWidth }) => $iconWidth || "55%"};
  margin-top: ${({ $marginTop }) => $marginTop || "15px"};
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const CardBottom = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50px;
  background-color: #9ab6d1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardText = styled.span`
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  color: #ffffff;
`;

const Card: React.FC<CardItemProps> = ({
  iconSrc,
  label,
  iconWidth,
  marginTop,
}) => {
  return (
    <CardWrapper>
      <CardIcon
        src={iconSrc}
        $iconWidth={iconWidth}
        $marginTop={marginTop}
        alt="card icon"
      />
      <CardBottom>
        <CardText>{label}</CardText>
      </CardBottom>
    </CardWrapper>
  );
};

export default Card;
