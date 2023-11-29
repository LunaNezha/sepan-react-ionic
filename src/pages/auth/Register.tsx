import Input from "@components/Inputs";
import {
  Controller,
  FieldErrors,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import {
  BirthDateValidation,
  ConfirmPasswordValidation,
  DiseaseTypeValidation,
  FirstNameValidation,
  GenderValidation,
  LastNameValidation,
  PasswordValidation,
  PhoneNumberValidation,
  PrivacyPolicyValidation,
  UsernameValidation,
} from "@constants/form-schemas.const";
import { Trans, useTranslation } from "react-i18next";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import LocalizeDatePicker from "@components/DatePicker/Index";
import { FA } from "@constants/langs.const";
import { useMaskito } from "@maskito/react";
import options from "@constants/input-masks.const";
import Select from "@components/Select";
import { isWebView } from "@constants/platforms.const";
import {
  IonCheckbox,
  IonSelectOption,
  IonSpinner,
  IonText,
} from "@ionic/react";
import React from "react";
import { Button } from "@components/Buttons";
import { PathNames } from "@constants/pathnames.const";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import DiseaseTypes from "@constants/disease-type.const";
import Genders from "@constants/genders.const";

const Register = () => {
  type FormValues = z.infer<typeof RegisterFormSchema>;

  const { t, i18n } = useTranslation("translations");
  const history = useHistory();
  const phoneNumberRef = useMaskito({ options });
  const RegisterFormSchema = z.object({
    firstname: FirstNameValidation(),
    lastname: LastNameValidation(),
    birthDate: BirthDateValidation(),
    username: UsernameValidation(),
    password: PasswordValidation(),
    confirmPassword: ConfirmPasswordValidation(),
    phoneNumber: PhoneNumberValidation(),
    gender: GenderValidation(),
    diseaseType: DiseaseTypeValidation(),
    privacyPolicy: PrivacyPolicyValidation(),
  });

  const { control, register, handleSubmit, formState } = useForm<FormValues>({
    resolver: zodResolver(RegisterFormSchema),
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
      {/* inputs */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
        {/* first name */}
        <Input
          {...register("firstname")}
          type="text"
          icon="fi fi-rr-id-badge"
          name="firstname"
          BorderRadius={"full"}
          placeholder={t("inputs.firstname")}
          errors={errors.firstname?.message}
        />

        {/* last name */}
        <Input
          {...register("lastname")}
          type="text"
          icon="fi fi-rr-id-badge"
          name="lastname"
          BorderRadius={"full"}
          placeholder={t("inputs.lastname")}
          errors={errors.lastname?.message}
        />

        {/* birth date */}
        <Controller
          control={control}
          name="birthDate"
          render={() => (
            <LocalizeDatePicker
              inputAttributes={{ placeholder: t("inputs.birthdate") }}
              errors={errors.birthDate?.message}
              locale={
                i18n.language === FA
                  ? { types: "jalali" }
                  : { types: "default" }
              }
            />
          )}
        />

        {/* username */}
        <Input
          {...register("username")}
          type="text"
          icon="fi fi-rr-user"
          name="username"
          BorderRadius={"full"}
          placeholder={t("inputs.national_code")}
          errors={errors.username?.message}
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

        {/* confirm password */}
        <Input
          {...register("confirmPassword")}
          type="password"
          icon="fi fi-rr-key"
          name="confirmPassword"
          BorderRadius={"full"}
          placeholder={t("inputs.confirm_password")}
          errors={errors.confirmPassword?.message}
        />

        {/* phone number */}
        <Input
          {...register("phoneNumber")}
          ref={phoneNumberRef}
          type="tel"
          dir="ltr"
          icon="fi fi-rr-phone-call"
          name="phoneNumber"
          BorderRadius={"full"}
          placeholder="+98 xxx xxx-xxxx"
          errors={errors.phoneNumber?.message}
        />

        {/* gender */}
        <Controller
          control={control}
          name="gender"
          render={() => (
            <Select
              platform={isWebView() ? "web" : "mobile"}
              placeholder={t("inputs.gender")}
              icon="fi fi-rr-venus-mars"
              alertTitle={t("alert_titles.gender")}
              errors={errors.gender?.message}
            >
              {Genders().map((item, index) => (
                <React.Fragment key={index}>
                  <IonSelectOption value={item.value}>
                    {item.name}
                  </IonSelectOption>
                </React.Fragment>
              ))}
            </Select>
          )}
        />

        {/* disease type */}
        <Controller
          control={control}
          name="diseaseType"
          render={() => (
            <Select
              className="sm:col-span-2 sm:row-span-5 md:col-span-1 lg:col-span-2 lg:row-span-5"
              platform={isWebView() ? "web" : "mobile"}
              placeholder={t("inputs.disease_type")}
              icon="fi fi-rr-medicine"
              multiple={true}
              alertTitle={t("alert_titles.disease_type")}
              errors={errors.diseaseType?.message}
            >
              {DiseaseTypes().map((item, index) => (
                <React.Fragment key={index}>
                  <IonSelectOption value={item.value}>
                    {item.name}
                  </IonSelectOption>
                </React.Fragment>
              ))}
            </Select>
          )}
        />
      </div>

      {/* terms and condition */}
      <div className="flex items-center gap-4">
        <IonCheckbox {...register("privacyPolicy")} name="privacyPolicy" />

        <div className="flex flex-col">
          {/* policy accept */}
          <IonText className="font-iranyekan-regular text-sm leading-6 text-white-950 dark:text-white-200">
            <Trans
              i18nKey="checkboxes.register_copyright"
              t={t}
              components={{
                TermsConditionLink: (
                  <Link
                    to="/terms-and-conditions"
                    className="font-iranyekan-bold text-blue-600"
                  >
                    {t("titles.terms_and_conditions")}
                  </Link>
                ),
                PrivacyLink: (
                  <Link
                    to="/privacy-policy"
                    className="font-iranyekan-bold text-blue-600"
                  >
                    {t("titles.privacy")}
                  </Link>
                ),
              }}
            ></Trans>
          </IonText>

          {/* show error */}
          {errors && (
            <span className="font-iranyekan-bold text-xs text-rose-400">
              {errors.privacyPolicy?.message}
            </span>
          )}
        </div>
      </div>

      {/* buttons */}
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
          <IonText>{t("buttons.register")}</IonText>
          {isSubmitting && isLoading ? (
            <IonSpinner name="dots"></IonSpinner>
          ) : (
            <i className="fi fi-rr-user-add"></i>
          )}
        </Button>
      </div>
    </form>
  );
};

export default Register;
