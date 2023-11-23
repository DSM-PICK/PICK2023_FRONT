import styled from "@emotion/styled";
import { ChangeEvent, HTMLAttributes } from "react";

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  placeholder?: string;
  type: string;
}

const Input = ({ type, ...props }: InputProps) => {
  return (
    <InputContainer>
      <InputBox type={type} {...props} />
    </InputContainer>
  );
};
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const InputBox = styled.input`
  width: 100%;
  height: 44px;
  border: 1px solid ${({ theme }) => theme.colors.gray300};
  border-radius: 12px;
  color: ${({ theme }) => theme.colors.gray800};
  padding: 10px 16px;
  outline: none;
  font-size: 16px;
  font-weight: 400;
`;
export default Input;
