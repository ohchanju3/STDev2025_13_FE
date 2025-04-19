import * as S from "./Header_styled";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  title?: string;
  customBackPath?: string;
}

const Header = ({ title, customBackPath }: HeaderProps) => {
  const navigate = useNavigate();

  const backBtn = () => {
    if (customBackPath) {
      navigate(customBackPath);
    } else {
      navigate(-1);
    }
  };

  return (
    <S.Header>
      <S.HeaderBackBtn src="/images/common/backBtn.png" onClick={backBtn} />
      <S.HeaderTitle>{title}</S.HeaderTitle>
    </S.Header>
  );
};

export default Header;
