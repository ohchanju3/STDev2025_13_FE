import Header from "@components/Common/layout/Header";
import { floatingSmall } from "@components/Login/animation";
import ProgressBar from "@components/Qcard/ProgressBar";
import QcardResultBox from "@components/Qcard/QcardResultBox";
import styled from "styled-components";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const QcardResult = () => {
  const [flipped, setFlipped] = useState(false);
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const location = useLocation();
  const { base64Image, backTitle, backContent } = location.state || {};

  const handleArchivingClick = () => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
      navigate("/main");
    }, 1000);
  };

  return (
    <QCardPageWrapper>
      <Header title="Oh! 카드 생성" customBackPath="/main" />
      <ProgressBar totalSteps={4} currentStep={4} />
      <QCardResultContainer>
        <QcardResultBox
          flipped={flipped}
          setFlipped={setFlipped}
          base64Image={base64Image}
          backTitle={backTitle}
          backContent={backContent}
        />
        {!flipped ? (
          <QcardResultClickBtn src="/images/common/clickBtn.png" />
        ) : (
          <ArchivingButton onClick={handleArchivingClick}>
            Oh! 아카이빙
          </ArchivingButton>
        )}
      </QCardResultContainer>

      {showPopup && (
        <Popup>
          <PopupImg src="/images/common/check.png" />
          <PopupText>완료</PopupText>
        </Popup>
      )}
    </QCardPageWrapper>
  );
};

export default QcardResult;

const QCardPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const QCardResultContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin-top: 2rem;
  gap: 1rem;
`;

const QcardResultClickBtn = styled.img`
  width: 20%;
  animation: ${floatingSmall} 5s infinite linear;
`;

const ArchivingButton = styled.button`
  width: 60%;
  height: 50px;
  color: white;
  border: none;
  border-radius: 20px;
  padding: 0.7rem 1.5rem;
  font-size: 1.2rem;
  cursor: pointer;
  margin-top: 3rem;
  color: black;
  background: #fff;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.4) inset;
`;

const Popup = styled.div`
  position: fixed;
  width: 100%;
  max-width: 393px;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
`;

const PopupImg = styled.img`
  width: 200px;
  height: 200px;
  margin-bottom: 1rem;
`;

const PopupText = styled.p`
  font-size: 1.4rem;
  text-align: center;
`;
