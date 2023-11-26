import Input from "@components/Inputs";
import {
  Controller,
  FieldErrors,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { useTranslation } from "react-i18next";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { IonDatetime, IonDatetimeButton, IonModal } from "@ionic/react";
import { FA } from "@constants/langs.const";
import LocalizeDatePicker from "@components/DatePicker";

const Register = () => {
  type FormValues = z.infer<typeof FormSchema>;

  const { t, i18n } = useTranslation("translations");
  const FormSchema = z.object({
    firstname: z.string().min(1, t("validations.requireds.firstname")),
    lastname: z.string().min(1, t("validations.requireds.lastname")),
    birthDate: z.date(),
  });
  const { control, register, handleSubmit, formState } = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
  });
  const { errors } = formState;

  const onSubmit: SubmitHandler<FormValues> = (res) => {
    console.log(res);
  };

  const onError = (error: FieldErrors<FormValues>) => {
    console.log(error);
  };

  // const date = new Intl.DateTimeFormat("fa-IR").format(new Date().toISOString());

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit, onError)}
      className="flex flex-col gap-8"
    >
      <div className="grid grid-cols-2 gap-4">
        <Input
          {...register("firstname")}
          type="text"
          icon="fi fi-rr-user"
          name="firstname"
          BorderRadius={"full"}
          placeholder={t("inputs.firstname")}
          errors={errors.firstname?.message}
        />

        <Input
          {...register("lastname")}
          type="text"
          icon="fi fi-rr-user"
          name="lastname"
          BorderRadius={"full"}
          placeholder={t("inputs.lastname")}
          errors={errors.lastname?.message}
        />

        <Controller
          control={control}
          name="birthDate"
          render={({ field }) => (
            <LocalizeDatePicker />
          )}
        />
      </div>
    </form>
  );
};

export default Register;
