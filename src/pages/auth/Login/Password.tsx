import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { enqueueSnackbar } from "notistack";
import { useTranslation } from "react-i18next";
import { useHistory, useLocation } from "react-router";
import { FieldErrors, SubmitHandler, useForm } from "react-hook-form";
import { useEffect } from "react";
import Input from "@components/Inputs";
import { Button } from "@components/Buttons";
import { IonSpinner, IonText } from "@ionic/react";
import { PathNames } from "@constants/pathnames.const";
import { nationalCodeRegex } from "@utils/regexPatterns";
import {
  PasswordValidation,
  UsernameValidation,
} from "@constants/form-schemas.const";

const Password = () => {
  type FormValues = z.infer<typeof FormSchema>;
  const history = useHistory();
  const { t, i18n } = useTranslation("translations");
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const username = params.get("username");
  const FormSchema = z.object({
    username: UsernameValidation(),
    password: PasswordValidation(),
  });

  const { register, handleSubmit, formState, reset, setValue } =
    useForm<FormValues>({
      resolver: zodResolver(FormSchema),
    });
  const { errors, isSubmitting, isLoading, isSubmitSuccessful } = formState;

  useEffect(() => {
    document.title = t("titles.login");
    setValue("username", String(username));
  }, []);

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const onSubmit: SubmitHandler<FormValues> = (res) => {
    reset();
  };

  const onError = (error: FieldErrors<FormValues>) => {
    enqueueSnackbar(error.password?.message, { variant: "error" });
  };

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit, onError)}
      className="flex flex-col gap-8"
    >
      <div className="flex flex-col gap-4">
        {/* username */}
        <Input
          {...register("username")}
          readOnly
          type="text"
          icon="fi fi-rr-user"
          name="username"
          BorderRadius={"full"}
          placeholder={t("inputs.national_code")}
        />

        {/* password */}
        <Input
          {...register("password")}
          type="password"
          icon="fi fi-rr-key"
          name="password"
          BorderRadius={"full"}
          placeholder={t("inputs.password")}
          errors={errors.password?.message}
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

        {/* login button */}
        <Button
          type="submit"
          variant={"filled-green"}
          size={"md"}
          round={"full"}
        >
          <IonText>{t("buttons.continue")}</IonText>
          {isSubmitting && isLoading ? (
            <IonSpinner name="dots"></IonSpinner>
          ) : (
            <i
              className={
                i18n.language === "fa"
                  ? "fi fi-rr-arrow-small-left"
                  : "fi fi-rr-arrow-small-right"
              }
            ></i>
          )}
        </Button>
      </div>
    </form>
  );
};

export default Password;
