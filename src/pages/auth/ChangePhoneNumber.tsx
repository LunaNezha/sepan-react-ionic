import {
  NewPasswordValidation,
  PasswordValidation,
  UsernameValidation,
} from "@constants/form-schemas.const";
import { FieldErrors, SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import Input from "@components/Inputs";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@components/Buttons";
import { IonSpinner, IonText } from "@ionic/react";
import { useHistory } from "react-router";
import { PathNames } from "@constants/pathnames.const";

const ChangePhoneNumber = () => {
  type FormValues = z.infer<typeof FormSchema>;
  
  const { t } = useTranslation("translations");
  const history = useHistory();
  const FormSchema = z.object({
    username: UsernameValidation(),
    password: PasswordValidation(),
    new_password: NewPasswordValidation(),
  });
  const { register, handleSubmit, formState } = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
  });
  const { errors, isSubmitting, isLoading } = formState;

  const onSubmit: SubmitHandler<FormValues> = (res) => {
    console.log(res);
  };

  const onError = (error: FieldErrors<FormValues>) => {
    console.log(error);
  };

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit, onError)}
      className="flex flex-col gap-8"
    >
      <div className="flex flex-col gap-4">
        {/* username input */}
        <Input
          {...register("username")}
          type="text"
          icon="fi fi-rr-user"
          name="username"
          BorderRadius={"full"}
          placeholder={t("inputs.national_code")}
          errors={errors.username?.message}
        />

        {/* password input */}
        <Input
          {...register("password")}
          type="password"
          icon="fi fi-rr-key"
          name="password"
          BorderRadius={"full"}
          placeholder={t("inputs.password")}
          errors={errors.password?.message}
        />

        {/* new password input */}
        <Input
          {...register("new_password")}
          type="password"
          icon="fi fi-rr-key"
          name="new_password"
          BorderRadius={"full"}
          placeholder={t("inputs.new_password")}
          errors={errors.new_password?.message}
        />
      </div>

      <div className="flex flex-wrap items-center justify-between">
        {/* back button */}
        <Button
          onClick={() => history.push(PathNames.Auth.LoginFirstStep)}
          variant={"text-default"}
          size={"md"}
          round={"full"}
        >
          <IonText>{t("buttons.back")}</IonText>
        </Button>

        {/* submit button */}
        <Button
          type="submit"
          variant={"filled-green"}
          size={"md"}
          round={"full"}
        >
          <IonText>{t("buttons.submit")}</IonText>
          {isSubmitting && isLoading ? (
            <IonSpinner name="dots"></IonSpinner>
          ) : (
            <i className="fi fi-sr-check-circle"></i>
          )}
        </Button>
      </div>
    </form>
  );
};

export default ChangePhoneNumber;
