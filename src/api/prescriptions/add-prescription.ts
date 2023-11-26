import { axios } from "@constants/axios.const";
import { IAddPrescription } from "@interfaces/prescriptions.interface";
import { useMutation } from "@tanstack/react-query";

export const AddPrescription = () => {
  return useMutation({
    mutationKey: ["prescription"],
    mutationFn: async () => {
      const { data } = await axios.post("prescription", {});
      return data as IAddPrescription;
    },
  });
};
