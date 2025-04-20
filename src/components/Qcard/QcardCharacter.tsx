import { useEmotionStore } from "src/state/emotionStore";
import { useUserStore } from "src/state/userStore";
import styled from "styled-components";

const QcardCharacterWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 24px;

  @media (max-width: 320px) {
    padding: 0px;
  }
`;

const QCardCharaterImg = styled.div`
  width: 100px;
  height: 170px;
  background-image: url("/images/Main/mainLogo1.png");
  background-size: cover;
  background-position: center;
  position: relative;
`;

const QCardCharacterEmotion = styled.img`
  width: 21px;
  position: absolute;
  top: 110px;
  right: 41px;
`;

const QCardTextbox = styled.div`
  position: relative;
  width: 108.894px;
  height: 82.515px;
  margin-top: 30px;
  background-image: url("/images/qcard/TextBox.png");
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  text-align: center;
`;

const QCardText = styled.p`
  text-align: center;
  color: #000;
  font-size: 20px;
  font-weight: bolder;
  text-align: center;
`;

const QcardCharacter = () => {
  const { selectedEmotion } = useEmotionStore();
  const name = useUserStore((state) => state.name);
  const emotionSrc = selectedEmotion
    ? `/images/emotion/${selectedEmotion}.png`
    : "";

  return (
    <QcardCharacterWrapper>
      <QCardCharaterImg>
        {emotionSrc && <QCardCharacterEmotion src={emotionSrc} />}
      </QCardCharaterImg>
      <QCardTextbox>
        <QCardText>
          {selectedEmotion ? (
            `#${selectedEmotion}`
          ) : (
            <>
              지금 당신의
              <br />
              감정은 어떤가요?
            </>
          )}
        </QCardText>
      </QCardTextbox>
    </QcardCharacterWrapper>
  );
};

export default QcardCharacter;
