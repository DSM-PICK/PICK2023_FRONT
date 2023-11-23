import styled from "@emotion/styled";
import { logo } from "../../assets/logo";
import { Button } from "@semicolondsm/ui";
import Input from "../../components/common/Input";
import { useState } from "react";
import { Login } from "../../utils/apis/login";
import cookies from "react-cookies";

interface AuthType {
  account_id: string;
  password: string;
}

const LoginPage = () => {
  const [inputs, setInputs] = useState<AuthType>({
    account_id: "",
    password: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const { mutate: loginMutate } = Login();

  const onClickLogin = () => {
    cookies.remove("accessToken");
    cookies.remove("refreshToken");
    loginMutate(inputs);
  };

  return (
    <LoginContainer>
      <LoginWrapper
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <img src={logo} width={50} height={50} alt="logo" />
        <InputContainer>
          <Input
            onChange={(e) => onChange(e)}
            placeholder="아이디를 입력하세요"
            name="account_id"
            type={"text"}
          />
          <Input
            onChange={(e) => onChange(e)}
            placeholder="비밀번호를 입력하세요"
            name="password"
            type={"password"}
          />
        </InputContainer>
        <LoginButton fullWidth fill="purple" onClick={onClickLogin}>
          로그인
        </LoginButton>
      </LoginWrapper>
    </LoginContainer>
  );
};

const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  justify-content: center;
  background-size: cover;
`;

const LoginWrapper = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 50px 60px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  box-shadow: 0px 2px 8px rgba(33, 33, 33, 0.25);
  background-color: ${({ theme }) => theme.colors.white};
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 300px;
`;

const LoginButton = styled(Button)`
  border-radius: 12px;
`;

export default LoginPage;
