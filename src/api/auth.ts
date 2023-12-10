import apiClient from "@constants/axios.const";
import { APIResponse } from "src/@types/api-responses.type";
import { AuthDetails, LoginRequest } from "src/@types/auth.type";

export const LoginAPI = async (props: LoginRequest) => {
  const response = await apiClient.post<APIResponse<AuthDetails>>("Auth/login", props);
  return response;
};

export const RefreshTokenAPI = async () => {
  const response = await apiClient.get<any>("Auth/refreshToken");
  return response;
};