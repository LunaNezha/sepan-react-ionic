import { useQuery } from "@tanstack/react-query";
import { axios } from "@constants/axios.const";
import { IPrescriptions } from "@interfaces/prescriptions.interface";

export const GetPrescriptions = () => {
  const { data, error } = useQuery({
    queryKey: ["get-prescriptions"],
    queryFn: async () => {
      const { data } = await axios.get("prescriptions").then((res) => {
        return res;
      });

      return data as IPrescriptions;
    },
  });

  return { prescription: data, error };
};
