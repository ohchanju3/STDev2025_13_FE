// QnaBox.tsx

import styled from "styled-components";

interface QnaBoxProps {
  title: string;
  text: string;
  isEditable?: boolean;
  onChange?: (value: string) => void;
}

const QnaBox = ({ title, text, isEditable = false, onChange }: QnaBoxProps) => {
  return (
    <QnaBoxWrapper>
      <QLetter>{title}</QLetter>
      <Bubble>
        {isEditable ? (
          <StyledTextarea
            value={text}
            onChange={(e) => onChange?.(e.target.value)}
            placeholder="오늘 감정에 맞는 답변을 작성해주세요 :)"
          />
        ) : (
          <span>{text}</span>
        )}
      </Bubble>
    </QnaBoxWrapper>
  );
};

const QnaBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  background: #9fb8cf;
  border-radius: 23px;
`;

const QLetter = styled.div`
  font-size: 64px;
  font-weight: bold;
  color: white;
  margin-right: 10px;
`;

const Bubble = styled.div`
  background: #394b5a;
  width: 220px;
  min-height: 64px;
  color: white;
  font-size: 18px;
  font-weight: bold;
  padding: 10px;
  border-radius: 13.714px;
  display: flex;
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  height: 100%;
  font-size: 18px;
  background: transparent;
  color: white;
  border: none;
  resize: none;
  outline: none;

  ::placeholder {
    color: white;
  }
`;

export default QnaBox;
