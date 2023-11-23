import { useMutation } from "react-query";
import instance from "../../axios";
import { setToken } from "../../functions/TokenManager";
import { useNavigate } from "react-router-dom";

interface UserLogin {
  account_id: string;
  password: string;
}

interface UserToken {
  access_token: string;
  refresh_token: string;
  expire_at: string;
  role: string;
}

export const Login = () => {
  const navigate = useNavigate();
  return useMutation(
    async (param: UserLogin) =>
      instance.post<UserToken>("/users/login", {
        ...param,
        device_token: "web_pick_admin",
      }),
    {
      onError: () => alert("비밀번호가 틀렸습니다."),
      onSuccess: ({ data }) => {
        if (data.role === "SCH") {
          setToken(
            data.access_token,
            data.refresh_token,
            new Date(data.expire_at)
          );
          navigate("/main");
        } else {
          alert("권한이 없는 계정입니다.");
        }
      },
    }
  );
};
