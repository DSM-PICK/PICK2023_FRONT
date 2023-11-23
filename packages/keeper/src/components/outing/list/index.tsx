import styled from "@emotion/styled";
import { OutingStudentListType } from "../../../models/outing/response";

const StudentBlock = (props: OutingStudentListType) => {
  const { end_time, student_name, student_number } = props;

  return (
    <Wrapper>
      <TextContainer>
        <p>{student_number + " " + student_name}</p>
        <p>{end_time} 도착 예정</p>
      </TextContainer>
    </Wrapper>
  );
};

export default StudentBlock;

const Wrapper = styled.div`
  padding: 0 16px;
  width: 100%;
  height: 56px;
  background: ${({ theme }) => theme.colors.gray50};
  color: ${({ theme }) => theme.colors.gray900};
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border-radius: 12px;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-between;
  font-family: "Noto Sans KR";
`;

const TextContainer = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;
  gap: 16px;
  font-size: 20px;
  font-weight: 500;
`;
