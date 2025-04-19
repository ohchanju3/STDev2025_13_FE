import styled from "styled-components";

export const Header = styled.section`
  position: relative;
  align-items: center;
  justify-content: center;
  display: flex;
  background: rgba(217, 217, 217, 0.2);
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.25);
  padding: 18px;
`;

export const HeaderBackBtn = styled.img`
  width: 0.7rem;
  cursor: pointer;
  position: absolute;
  left: 20px;
`;

export const HeaderTitle = styled.h1`
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  justify-content: center;
`;
