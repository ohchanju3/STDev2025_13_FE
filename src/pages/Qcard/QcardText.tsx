import Header from "@components/Common/layout/Header";
import ProgressBar from "@components/Qcard/ProgressBar";
import QcardTextBox from "@components/Qcard/QcardTextBox";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { getQcardText, postQcardText } from "@apis/patchQcardText";
import { useNavigate } from "react-router-dom";
import { floatingSmall } from "@components/Login/animation";
import Loading from "@components/Common/loading/Loading";

const QcardText = () => {
  const [text, setText] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchText = async () => {
      setIsLoading(true);
      const data = await getQcardText();

      if (!data || data.startsWith("<!DOCTYPE html>")) {
        setIsLoading(true);
        setText("");
      } else {
        setText(data);
        setIsLoading(false);
      }
    };

    fetchText();
  }, []);

  const submitCard = async () => {
    const success = await postQcardText(text);
    if (success) {
      alert("카드가 생성되었습니다!");
      navigate("/qcardResult");
    } else {
      alert("카드 생성에 실패했습니다 :(");
      navigate("/qcardResult");
    }
  };

  return (
    <>
      {isLoading && (
        <Overlay>
          <Loading text="카드 텍스트 생성 중" />
        </Overlay>
      )}
      <Header title="Oh! 카드 생성" />
      <ProgressBar totalSteps={4} currentStep={3} />
      <QCardPageWrapper>
        <ContentWrapper>
          <QcardCharacter src="/images/qcard/QcardText.png" />
          <QcardTextBox text={text} />
        </ContentWrapper>
        <QcardTextBtn onClick={submitCard}>카드 생성하기</QcardTextBtn>
      </QCardPageWrapper>
    </>
  );
};

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const QCardPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 0px 20px;
  gap: 1rem;
  width: 100%;
  max-width: 393px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const QcardCharacter = styled.img`
  width: 20vh;
  animation: ${floatingSmall} 5s infinite linear;
`;

const QcardTextBtn = styled.button`
  border-radius: 20px;
  background: #fff;
  box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.25);
  width: 100%;
  height: 40px;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  cursor: pointer;
  margin-top: 2rem;
`;

export default QcardText;
