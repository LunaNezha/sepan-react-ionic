import { PathNames } from "@constants/pathnames.const";
import AuthLayout from "@layouts/AuthLayout";
import React, { lazy } from "react";
import { Redirect, Route } from "react-router-dom";
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
      {/* redirect /auth/login to /auth/login/username */}
      {/* <Redirect
        from={PathNames.Auth.Login}
        to={PathNames.Auth.LoginFirstStep}
      /> */}

      {/* route to /auth/login/username */}
      <Route
        exact
        path={PathNames.Auth.LoginFirstStep}
        render={() => (
          <AuthLayout
            className="w-11/12"
            imageClassName="flex-1"
            formClassName="flex-1"
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
            className="w-11/12"
            imageClassName="flex-1"
            formClassName="flex-1"
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
            lightImage={LightVerifyCodeImage}
            darkImage={DarkVerifyCodeImage}
            imageClassName="flex-1"
            formClassName="flex-1"
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
            className="w-11/12"
            lightImage={LightChangeNumberImage}
            darkImage={DarkChangeNumberImage}
            imageClassName="flex-1"
            formClassName="flex-1"
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
            lightImage={LightRegisterImage}
            darkImage={DarkRegisterImage}
            formClassName="flex-100"
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
