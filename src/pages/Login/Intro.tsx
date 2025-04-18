import { Link } from "react-router-dom";
import * as S from "./Login_styled";

const Intro = () => {
  return (
    <S.LoginWrapper>
      <S.LoginLogoTextContainer>
        <S.LoginLogo src="images/Login/LoginLogo.png" />
        <S.LoginDes>
          감정으로 호기심을 유도하는
          <br />
          다정한 과학 서비스
        </S.LoginDes>
      </S.LoginLogoTextContainer>
      <S.IntroImg src="/images/Login/IntroCharacter.png" />
      <S.IntroBtnContainer>
        <Link to="/login">
          <S.IntroBtn>시작하기</S.IntroBtn>
        </Link>
      </S.IntroBtnContainer>
    </S.LoginWrapper>
  );
};

export default Intro;
