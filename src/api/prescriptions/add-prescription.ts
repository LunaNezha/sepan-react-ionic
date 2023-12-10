import apiClient from "@constants/axios.const";
import { useMutation } from "@tanstack/react-query";
import { AddPrescription } from "src/@types/prescriptions.type";

export const AddPrescriptionAPI = () => {
  return useMutation({
    mutationKey: ["prescription"],
    mutationFn: async () => {
      const { data } = await apiClient.post("prescription", {});
      return data as AddPrescription;
    },
  });
};
