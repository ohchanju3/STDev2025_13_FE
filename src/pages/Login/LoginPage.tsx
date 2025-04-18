import * as S from "./Login_styled";

const Login = () => {
  const handleLogin = (provider: "kakao" | "google") => {
    const backendLoginUrl =
      provider === "kakao"
        ? ` https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${
            import.meta.env.VITE_KAKAO_CLIENT_ID
          }&redirect_uri=${import.meta.env.VITE_KAKAO_REDIRECT_URI}`
        : ` https://accounts.google.com/o/oauth2/v2/auth?client_id=${
            import.meta.env.VITE_GOOGLE_CLIENT_URL
          }&redirect_uri=${
            import.meta.env.VITE_GOOGlE_REDIRECT_URI
          }&response_type=code&scope=https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email`;

    window.location.href = backendLoginUrl;
  };
  return (
    <>
      <S.LoginWrapper>
        <S.LoginLogoTextContainer>
          <S.LoginLogo src="images/Login/LoginLogo.png" />
          <S.LoginDes>
            로그인 후에 <br />
            Q-리포트 아카이빙까지 즐겨보세요
          </S.LoginDes>
        </S.LoginLogoTextContainer>
        <S.LoginImg src="/images/Login/LoginIcon.png" />
        <S.LoginImgContainer>
          <S.LoginBtn
            src="/images/Login/kakao.png"
            onClick={() => handleLogin("kakao")}
          />
          <S.LoginBtn
            src="/images/Login/google.png"
            onClick={() => handleLogin("google")}
          />
        </S.LoginImgContainer>
      </S.LoginWrapper>
    </>
  );
};

export default Login;
