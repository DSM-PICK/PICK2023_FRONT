import styled from "@emotion/styled";

export interface QuestionType {
  question: string;
  children: JSX.Element;
  isEssential: boolean;
}

interface QuestionBlockProps {
  value: QuestionType;
}

const QuestionBlock = ({ value }: QuestionBlockProps) => {
  return (
    <Container key={value.question}>
      <Question>
        {value.question}
        {value.isEssential && <RedText>*</RedText>}
      </Question>
      {value.children}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
`;

const Question = styled.p`
  color: ${({ theme }) => theme.colors.gray800};
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  display: flex;
`;

const RedText = styled.p`
  color: red;
`;

export default QuestionBlock;
