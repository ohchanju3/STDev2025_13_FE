import styled from "styled-components";
import { useRef } from "react";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";

const QcardResultBox = ({
  flipped,
  setFlipped,
  base64,
  backTitle,
  backContent,
  formattedDate,
}: {
  flipped: boolean;
  setFlipped: (val: boolean) => void;
  base64: string;
  backTitle: string;
  backContent: string;
  formattedDate?: string;
}) => {
  const today = new Date().toISOString().split("T")[0].replace(/-/g, ".");
  const cardRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (cardRef.current) {
      const canvas = await html2canvas(cardRef.current, {
        backgroundColor: null,
        useCORS: true,
      });
      canvas.toBlob((blob) => {
        if (blob) {
          saveAs(blob, "나의 oh카드.png");
        }
      });
    }
  };

  return (
    <QcardFlipContainer onClick={() => setFlipped(!flipped)}>
      <QcardInner flipped={flipped}>
        <QcardFront ref={cardRef}>
          <QcardResultContent src={base64} alt="Q카드 이미지" />
          <QcardResultDate>{formattedDate ?? today}</QcardResultDate>
          <QcardResultDown
            src="/images/common/download.svg"
            onClick={(e) => {
              e.stopPropagation();
              handleDownload();
            }}
          />
        </QcardFront>
        <QcardBack>
          <QcardBackContainer>
            <QcardBackTitle>{backTitle}</QcardBackTitle>
            <QcardBackContent>{backContent}</QcardBackContent>
          </QcardBackContainer>
        </QcardBack>
      </QcardInner>
    </QcardFlipContainer>
  );
};

export default QcardResultBox;

// ----- Styled Components -----

const QcardFlipContainer = styled.div`
  width: 80%;
  max-width: 260px;
  height: 320px;
  perspective: 1000px;
`;

const QcardInner = styled.div<{ flipped: boolean }>`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  transform: ${({ flipped }) =>
    flipped ? "rotateY(180deg)" : "rotateY(0deg)"};
  cursor: pointer;
`;

const QcardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 30px;
  backface-visibility: hidden;
  background-color: #9ab6d1;
  overflow: hidden;
`;

const QcardFront = styled(QcardFace)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const QcardBack = styled(QcardFace)`
  transform: rotateY(180deg);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  font-size: 1.2rem;
  color: white;
  margin-top: 2rem;
`;

const QcardResultContent = styled.img`
  border-radius: 20px;
  width: 90%;
  height: 65%;
  object-fit: cover;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -70%);
`;

const QcardResultDate = styled.div`
  color: #fff;
  text-align: center;
  font-size: 3rem;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  position: absolute;
  top: 85%;
  left: 45%;
  transform: translate(-50%, -70%);
`;

const QcardResultDown = styled.img`
  width: 10%;
  position: absolute;
  top: 85%;
  left: 80%;
  transform: translate(-50%, -70%);
  cursor: pointer;
`;

const QcardBackContainer = styled.section`
  border-radius: 20px;
  background: #3c4956;
  box-shadow: 0.914px 0.914px 4.571px 0px rgba(0, 0, 0, 0.25) inset;
  width: 100%;
  height: 100%;
  padding: 15px;
`;

const QcardBackTitle = styled.h1`
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  margin-bottom: 1rem;
`;

const QcardBackContent = styled.span`
  font-size: 16px;
`;
