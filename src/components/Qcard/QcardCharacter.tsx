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

const QCardCharaterImg = styled.img`
  width: 103.954px;
  height: 173.215px;
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
  font-size: 13.857px;
  font-style: normal;
  font-weight: 400;
  text-align: center;
`;

const QcardCharacter = () => {
  return (
    <QcardCharacterWrapper>
      <QCardCharaterImg src="/images/Main/mainLogo1.png" />
      <QCardTextbox>
        {" "}
        <QCardText>
          지금 00님의
          <br />
          감정은 어떤가요?
        </QCardText>
      </QCardTextbox>
    </QcardCharacterWrapper>
  );
};
export default QcardCharacter;
