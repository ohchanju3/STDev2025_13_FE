import * as S from "./Login_styled";

const Login = () => {
  const handleKakaoLogin = () => {
    const kakaoLoginUrl = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${
      import.meta.env.VITE_KAKAO_CLIENT_ID
    }&redirect_uri=${import.meta.env.VITE_KAKAO_REDIRECT_URI}`;

    window.location.href = kakaoLoginUrl;
  };

  return (
    <>
      <S.LoginWrapper>
        <S.LoginLogoTextContainer>
          <S.LoginLogo src="images/Login/LoginLogo.png" />
          <S.LoginDes>
            로그인 후에 <br />
            Oh! 리포트 아카이빙까지 즐겨보세요
          </S.LoginDes>
        </S.LoginLogoTextContainer>
        <S.LoginImg src="/images/Login/LoginIcon.png" />
        <S.LoginImgContainer>
          <S.LoginBtn
            src="/images/Login/kakao.png"
            onClick={handleKakaoLogin}
          />
        </S.LoginImgContainer>
      </S.LoginWrapper>
    </>
  );
};

export default Login;
