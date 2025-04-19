import { useEffect, useState } from "react";
import Card from "@components/Main/Card";
import * as S from "./MainPage_styled";
import { Link } from "react-router-dom";
import { getUsername } from "@apis/getUser";

const MainPage = () => {
  const [name, setUsername] = useState("");

  useEffect(() => {
    const fetchUsername = async () => {
      try {
        const name = await getUsername();
        if (name) setUsername(name);
      } catch (error) {
        console.error("유저 이름을 불러오는데 실패했습니다:", error);
      }
    };

    fetchUsername();
  }, []);

  return (
    <S.MainWrapper>
      <S.MainText>
        {name}님 오늘도 <br />
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
