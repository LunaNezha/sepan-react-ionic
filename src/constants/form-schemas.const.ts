import { z } from "zod";
import { useTranslation } from "react-i18next";
import { nationalCodeRegex } from "@utils/regexPatterns";

export const UsernameValidation = () => {
  const { t } = useTranslation("translations");

  return z
    .string({ required_error: t("validations.requireds.national_code") })
    .min(1, t("validations.requireds.national_code"))
    .min(5, t("validations.minimum.national_code"))
    .max(30, t("validations.maximum.national_code"))
    .regex(nationalCodeRegex, {
      message: t("validations.national_code_format"),
    });
};

export const PasswordValidation = () => {
  const { t } = useTranslation("translations");

  return z
    .string({ required_error: t("validations.requireds.password") })
    .min(1, t("validations.requireds.password"))
    .min(6, { message: t("validations.minimum.password") });
};

export const VerifyCodeValidation = () => {
  const { t } = useTranslation("translations");

  return z.number();
};

export const FirstNameValidation = () => {
  const { t } = useTranslation("translations");

  return z
    .string({ required_error: t("validations.requireds.firstname") })
    .min(1, t("validations.requireds.firstname"));
};

export const LastNameValidation = () => {
  const { t } = useTranslation("translations");

  return z
    .string({ required_error: t("validations.requireds.lastname") })
    .min(1, t("validations.requireds.lastname"));
};

export const BirthDateValidation = () => {
  const { t } = useTranslation("translations");

  return z.date({ required_error: t("validations.requireds.birthdate") });
};

export const ConfirmPasswordValidation = () => {
  const { t } = useTranslation("translations");

  return z
    .string({ required_error: t("validations.requireds.confirm_password") })
    .min(1, t("validations.requireds.confirm_password"));
};

export const NewPasswordValidation = () => {
  const { t } = useTranslation("translations");

  return z
    .string({ required_error: t("validations.requireds.new_password") })
    .min(1, t("validations.requireds.new_password"));
};

export const PhoneNumberValidation = () => {
  const { t } = useTranslation("translations");

  return z.string({ required_error: t("validations.requireds.phone_number") });
};

export const GenderValidation = () => {
  const { t } = useTranslation("translations");

  return z.string({ required_error: t("validations.requireds.gender") });
};

export const DiseaseTypeValidation = () => {
  const { t } = useTranslation("translations");

  return z.string({ required_error: t("validations.requireds.disease_type") });
};

export const PrivacyPolicyValidation = () => {
  const { t } = useTranslation("translations");

  return z.literal(true, {
    errorMap: () => ({
      message: t("validations.requireds.terms_and_conditions"),
    }),
  });
};

export const RememberMeValidation = () => {
  const { t } = useTranslation("translations");

  return z.boolean().default(false).optional();
};
