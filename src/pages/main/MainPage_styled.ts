import styled from "styled-components";

export const MainWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const MainText = styled.h1`
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  text-align: center;
`;

export const CardContainer = styled.section`
  display: flex;
  padding-top: 35px;
  gap: 1rem;

  @media (max-width: 320px) {
    gap: 0px;
  }
`;
