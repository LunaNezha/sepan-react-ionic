import apiClient from "@constants/axios.const";
import { IAddPrescription } from "src/@types/prescriptions.type";
import { useMutation } from "@tanstack/react-query";

export const AddPrescription = () => {
  return useMutation({
    mutationKey: ["prescription"],
    mutationFn: async () => {
      const { data } = await apiClient.post("prescription", {});
      return data as IAddPrescription;
    },
  });
};
