import { axios } from "@constants/axios.const";
import { PathNames } from "@constants/pathnames.const";
import { useQuery } from "@tanstack/react-query";
import { enqueueSnackbar } from "notistack";
import { useHistory } from "react-router";

export const CheckUsername = (username: string) => {
  const history = useHistory();

  const { data, error } = useQuery({
    queryKey: ["username"],
    queryFn: async () => {
      const { data } = await axios
        .get<string>(`user/checkUser/${username}`)
        .then((res) => {
          if (res.request.successfull == true) {
            if (res?.request?.hasAccess == true) {
              history.push(PathNames.Auth.LoginSecondStep);
            } else {
              history.push(PathNames.Auth.Register);
            }
          } else {
            enqueueSnackbar(error?.message, { variant: "error" });
          }

          return res;
        });
      return data as string;
    },
  });

  return { data, error , username: data};
};
