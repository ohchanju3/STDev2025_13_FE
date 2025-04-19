import styled from "styled-components";

interface ProgressBarProps {
  totalSteps: number;
  currentStep: number;
}

const ProgressBar = ({ totalSteps, currentStep }: ProgressBarProps) => {
  return (
    <ProgressWrapper>
      {Array.from({ length: totalSteps }).map((_, idx) => (
        <Dot key={idx} $isActive={idx + 1 === currentStep} />
      ))}
    </ProgressWrapper>
  );
};

export default ProgressBar;

const ProgressWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 10px;
  gap: 8px;
`;

const Dot = styled.div<{ $isActive: boolean }>`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: ${({ $isActive }) => ($isActive ? "white" : "#969696")};
  transition: background-color 0.3s;
`;
