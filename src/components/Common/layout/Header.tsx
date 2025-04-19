import * as S from "./Header_styled";

interface HeaderProps {
  title?: string;
  onClick?: () => void;
}

const Header = ({ title, onClick }: HeaderProps) => {
  return (
    <S.Header>
      <S.HeaderBackBtn src="/images/common/backBtn.png" onClick={onClick} />
      <S.HeaderTitle>{title}</S.HeaderTitle>
    </S.Header>
  );
};

export default Header;
