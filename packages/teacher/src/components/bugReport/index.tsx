import styled from "@emotion/styled";
import { bugReportOption, ISortOption } from "@/constants/DropDownItem";
import { useState } from "react";
import DropDown from "./DropDown";
import QuestionBlock, { QuestionType } from "./QuestionBlock";
import Header from "./Header";

const BugReport = () => {
  const [defail, setDetail] = useState<string>("");
  const [dropDownValue, setDropDownValue] = useState<ISortOption>(
    bugReportOption[0]
  );

  let isSubmitEnabled: boolean = defail !== "";

  const handleReportCliCk = () => {};

  const QUESTION: QuestionType[] = [
    {
      question: "어디서 버그가 발생했나요?",
      children: (
        <DropDown
          dropDownValue={dropDownValue}
          setDropDownValue={setDropDownValue}
        />
      ),
      isEssential: true,
    },
    {
      question: "사진을 첨부해주세요.",
      children: <ImgBox />,
      isEssential: false,
    },
    {
      question: "버그에 대해 요약해서 설명해주세요.",
      children: (
        <BugDetailInput
          placeholder="설명을 입력해주세요."
          onChange={(e) => setDetail(e.target.value)}
        />
      ),
      isEssential: true,
    },
  ];

  return (
    <Wrapper>
      <Header
        isSubmitEnabled={isSubmitEnabled}
        handleReportCliCk={handleReportCliCk}
      />
      <Section>
        {QUESTION.map((value) => (
          <QuestionBlock value={value} />
        ))}
      </Section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 16px;
`;

const Section = styled.div`
  display: flex;
  padding: 16px 0;
  gap: 24px;
  flex-direction: column;
`;

const ImgBox = styled.span`
  width: 160px;
  height: 160px;
  background-color: ${({ theme }) => theme.colors.gray50};
  border-radius: 8px;
`;

const BugDetailInput = styled.textarea`
  font-size: 14px;
  line-height: 20px;
  width: 100%;
  height: 20vh;
  background-color: ${({ theme }) => theme.colors.gray50};
  border-radius: 8px;
  padding: 12px 16px;
  border: none;
  outline: none;
  color: ${({ theme }) => theme.colors.gray800};
  font-weight: 400;
  ::placeholder {
    color: ${({ theme }) => theme.colors.gray500};
  }
`;

export default BugReport;
