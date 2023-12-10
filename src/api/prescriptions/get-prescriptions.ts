import apiClient from "@constants/axios.const";
import { useQuery } from "@tanstack/react-query";
import { Prescriptions } from "@type/prescriptions.type";

export const GetPrescriptions = () => {
  const { data, error } = useQuery({
    queryKey: ["get-prescriptions"],
    queryFn: async () => {
      const { data } = await apiClient.get("prescriptions").then((res) => {
        return res;
      });

      return data as Prescriptions;
    },
  });

  return { prescription: data, error };
};
