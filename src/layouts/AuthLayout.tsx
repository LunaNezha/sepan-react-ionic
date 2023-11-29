import CirclePattern from "@assets/images/circle-pattern";
import { DARK, LIGHT, THEME } from "@constants/theme.const";
import LightLogo from "@assets/images/logo.png";
import DarkLogo from "@assets/images/logo-dark.png";
import React from "react";
import { IonContent, IonHeader, IonText } from "@ionic/react";
import { useTranslation } from "react-i18next";
import ThemeSwitcher from "@components/ThemeSwitcher";
import LanguageSwitcher from "@components/LanguageSwitcher/Index";
import { isWebView } from "@constants/platforms.const";
import secureLocalStorage from "react-secure-storage";
import { Button } from "@components/Buttons";
import useTheme from "@hooks/useTheme";
import { cn } from "@utils/classnames";

interface IAuthDesignProps {
  children: React.ReactNode;
  lightImage: string;
  darkImage: string;
  sidebarTitle: string;
  className?: React.HTMLAttributes<HTMLElement> | string;
  formClassName?: React.HTMLAttributes<HTMLElement> | string;
  imageClassName?: React.HTMLAttributes<HTMLElement> | string;
}

const AuthLayout = (props: IAuthDesignProps) => {
  const { t } = useTranslation("translations");
  const { theme } = useTheme();
  const {
    className,
    lightImage,
    darkImage,
    sidebarTitle,
    children,
    imageClassName,
    formClassName,
    ...rest
  } = props;

  return (
    <div className="flex h-full bg-white-100 dark:bg-ebony-950">
      {/* image */}
      <div
        className={cn(
          imageClassName,
          "md:p-12 relative h-screen flex-col items-center justify-center gap-7 overflow-hidden bg-blue-600 text-center dark:bg-big-stone-950",
        )}
      >
        <img
          className="md:w-80 lg:w-auto object-contain drop-shadow-2xl"
          src={
            secureLocalStorage.getItem(THEME) == DARK ? darkImage : lightImage
          }
          alt="authentication sidebar image"
        />

        <h2 className="font-iranyekan-extrabold md:text-lg lg:text-xl xl:text-2xl leading-10 text-white-50 dark:text-white-200 md:w-4/6">
          {sidebarTitle}
        </h2>

        <CirclePattern className="absolute -right-14 -top-0" />
        <CirclePattern className="absolute -bottom-14 -left-8" />
      </div>

      {/* form */}
      <div className={cn(formClassName, "flex flex-col")}>
        <IonHeader>
          <div className="flex items-center justify-between gap-4 bg-white-100 p-4 sm:px-8 sm:py-6 dark:bg-ebony-950">
            <Button variant={"filled-default"} round={"full"} size={"sm"}>
              <i className="fi fi-rr-book"></i>
              <IonText class="text-xs">{t("buttons.system_guide")}</IonText>
            </Button>

            <div className="flex items-center gap-2">
              <ThemeSwitcher />
              <LanguageSwitcher
                platform={isWebView() ? { view: "web" } : { view: "mobile" }}
              />
            </div>
          </div>
        </IonHeader>

        <IonContent>
          <div
            className={cn(
              className,
              "m-auto flex flex-col justify-center gap-8",
            )}
          >
            <header className="flex flex-col items-center justify-center gap-4 text-center">
              <div className="flex h-20 w-20 items-center rounded-3xl bg-white-50 p-3 shadow-lg dark:bg-big-stone-950 dark:shadow-xl">
                <img
                  className="h-full w-full object-contain"
                  alt="logo"
                  src={
                    theme === DARK
                      ? LightLogo
                      : theme === LIGHT
                      ? DarkLogo
                      : LightLogo
                  }
                />
              </div>

              <div className="flex flex-col gap-2 text-white-950 dark:text-white-200">
                <h2 className="font-iranyekan-black text-lg md:text-2xl">
                  {t("app_title")}
                </h2>
                <h4 className="font-iranyekan-extrabold text-base md:text-lg">
                  {t("app_complete_title")}
                </h4>
              </div>
            </header>

            {children}
          </div>
        </IonContent>
      </div>
    </div>
  );
};

export default AuthLayout;
