import { PathNames } from "@constants/pathnames.const";
import AuthLayout from "@layouts/AuthLayout";
import React, { lazy } from "react";
import { Route } from "react-router-dom";
import { useTranslation } from "react-i18next";

import LightLoginImage from "@assets/images/sign-in-light.svg";
import DarkLoginImage from "@assets/images/sign-in-dark.svg";
import LightVerifyCodeImage from "@assets/images/verify-code-light.svg";
import DarkVerifyCodeImage from "@assets/images/verify-code-dark.svg";
import LightChangeNumberImage from "@assets/images/change-phone-number-light.svg";
import DarkChangeNumberImage from "@assets/images/change-phone-number-dark.svg";
import LightRegisterImage from "@assets/images/register-light.svg";
import DarkRegisterImage from "@assets/images/register-dark.svg";

const Username = lazy(() => import("@pages/auth/Login/Username"));
const Password = lazy(() => import("@pages/auth/Login/Password"));
const VerifyCode = lazy(() => import("@pages/auth/VerifyCode"));
const ChangePhoneNumber = lazy(() => import("@pages/auth/ChangePhoneNumber"));
const Register = lazy(() => import("@pages/auth/Register"));

const AuthRoutes: React.FC = () => {
  const { t } = useTranslation("translations");

  return (
    <>
      {/* route to /auth/login/username */}
      <Route
        exact
        path={PathNames.Auth.LoginFirstStep}
        render={() => (
          <AuthLayout
            className="w-10/12 px-4 py-6 sm:w-8/12 sm:p-8 md:w-11/12 md:p-8 lg:w-9/12 xl:w-8/12"
            imageClassName="hidden md:flex md:flex-[50%] flex-1"
            formClassName="md:flex-[50%] flex-1"
            lightImage={LightLoginImage}
            darkImage={DarkLoginImage}
            sidebarTitle={t("messages.login_welcome")}
          >
            <Username />
          </AuthLayout>
        )}
      />

      {/* route to /auth/login/password?username= */}
      <Route
        exact
        path={PathNames.Auth.LoginSecondStep}
        render={() => (
          <AuthLayout
            className="w-10/12 px-4 py-6 sm:w-8/12 sm:p-8 md:w-11/12 md:p-8 lg:w-9/12 xl:w-8/12"
            imageClassName="hidden md:flex md:flex-[50%] flex-1"
            formClassName="md:flex-[50%] flex-1"
            lightImage={LightLoginImage}
            darkImage={DarkLoginImage}
            sidebarTitle={t("messages.login_welcome")}
          >
            <Password />
          </AuthLayout>
        )}
      />

      {/* route to /auth/verify-code */}
      <Route
        exact
        path={PathNames.Auth.VerifyCode}
        render={() => (
          <AuthLayout
            className="w-full px-4 py-6 sm:w-10/12 sm:p-8 md:w-full md:p-8 lg:w-10/12 "
            imageClassName="hidden md:flex md:flex-[50%] flex-1"
            formClassName="md:flex-[50%] flex-1"
            lightImage={LightVerifyCodeImage}
            darkImage={DarkVerifyCodeImage}
            sidebarTitle={t("messages.login_welcome")}
          >
            <VerifyCode />
          </AuthLayout>
        )}
      />

      {/* route to /auth/change-phone-number */}
      <Route
        exact
        path={PathNames.Auth.ChangePhoneNumber}
        render={() => (
          <AuthLayout
            className="w-10/12 px-4 py-6 sm:w-8/12 sm:p-8 md:w-11/12 md:p-8 lg:w-9/12 xl:w-8/12"
            imageClassName="hidden md:flex md:flex-[50%] flex-1"
            formClassName="md:flex-[50%] flex-1"
            lightImage={LightChangeNumberImage}
            darkImage={DarkChangeNumberImage}
            sidebarTitle={t("messages.login_welcome")}
          >
            <ChangePhoneNumber />
          </AuthLayout>
        )}
      />

      {/* route to /auth/register */}
      <Route
        exact
        path={PathNames.Auth.Register}
        render={() => (
          <AuthLayout
            className="w-full px-5 py-6 sm:px-12 sm:py-6 md:w-10/12 md:px-6 lg:w-11/12 lg:p-8"
            formClassName="flex-[60%]"
            imageClassName="hidden md:flex md:flex-[40%]"
            lightImage={LightRegisterImage}
            darkImage={DarkRegisterImage}
            sidebarTitle={t("messages.login_welcome")}
          >
            <Register />
          </AuthLayout>
        )}
      />
    </>
  );
};

export default AuthRoutes;
