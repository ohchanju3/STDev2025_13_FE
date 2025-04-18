import styled from "styled-components";
import { floating } from "@components/Login/animation";

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  height: 100vh;
  align-items: center;
`;

export const LoginLogoTextContainer = styled.section`
  margin-top: 4rem;
  gap: 1rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
`;

export const LoginIntroText = styled.p`
  font-size: 1.5rem;
`;

export const LoginLogo = styled.img`
  width: 70%;
`;

export const LoginDes = styled.p`
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;

export const LoginImg = styled.img`
  width: 200px;
  position: absolute;
  top: 38%;
  transform: translate3d(-50%, -50%, 0);
  animation: ${floating} 4s infinite linear;
`;

export const LoginImgContainer = styled.section`
  display: flex;
  flex-direction: column;
  position: absolute;
  align-items: center;
  bottom: 0;
  margin-bottom: 5rem;
  gap: 5px;
`;

export const LoginBtn = styled.img`
  cursor: pointer;
  width: 280px;
`;

//intro
export const IntroImg = styled.img`
  width: 150px;
  position: absolute;
  top: 38%;
  transform: translate3d(-50%, -50%, 0);
  animation: ${floating} 4s infinite linear;
`;

export const IntroBtnContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: absolute;
  align-items: center;
  bottom: 0;
  margin-bottom: 3rem;
  gap: 5px;
`;

export const IntroBtn = styled.button`
  background-color: white;
  width: 320px;
  height: 50px;
  border-radius: 20px;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  cursor: pointer;
`;
