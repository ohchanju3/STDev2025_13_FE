import Card from "@components/Main/Card";
import * as S from "./MainPage_styled";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <S.MainWrapper>
      <S.MainText>
        OO님 오늘도 <br />
        감정에서 숨겨진 호기심을 발견해봐요!
      </S.MainText>
      <S.CardContainer>
        <Link to="/qcard">
          <Card iconSrc="/images/Main/mainLogo1.png" label="Oh! 카드 생성" />
        </Link>
        <Link to="/qreport">
          <Card
            iconSrc="/images/Login/LoginIcon.png"
            label="Oh! 아카이브"
            iconWidth="75%"
            marginTop="45px"
          />
        </Link>
      </S.CardContainer>
    </S.MainWrapper>
  );
};

export default MainPage;
