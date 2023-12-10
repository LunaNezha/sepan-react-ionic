import Cookies from "js-cookie";
import secureLocalStorage from "react-secure-storage";
import { AUTH_TOKEN, TOKEN } from "@constants/local-storage.const";
import { APIResponse } from "src/@types/api-responses.type";
import {
  AddCustomerRequest,
  PersonDetailsRequest,
  UserDetails,
} from "src/@types/user.type";
import apiClient from "@constants/axios.const";

export const AccountDetailsAPI = async () => {
  if (
    (apiClient.defaults.headers["Token-Key"] &&
      apiClient.defaults.headers["Authorization"]
        ?.toString()
        .includes("undefined")) ||
    (apiClient.defaults.headers["Authorization"] &&
      apiClient.defaults.headers["Token-Key"] == "null")
  ) {
    apiClient.defaults.headers["Authorization"] = `Bearer ${Cookies.get(
      AUTH_TOKEN,
    )}`;
    apiClient.defaults.headers["Token-Key"] = `${secureLocalStorage.getItem(
      TOKEN,
    )}`;
  }
  const res = await apiClient.get<APIResponse<UserDetails>>("Account/details");
  return res;
};

export const PersonDetailsAPI = async (props: PersonDetailsRequest) => {
  const res = await apiClient.post<APIResponse<UserDetails>>(
    "Account/personDetails",
    props,
  );
  return res;
};

export const AddCustomerAPI = async (props: AddCustomerRequest) => {
  const res = await apiClient.post<APIResponse<UserDetails>>(
    "Account/addCustomer",
    props,
  );
  return res;
};
