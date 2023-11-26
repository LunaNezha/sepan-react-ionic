import React, { lazy } from "react";
import { IonButtons, IonHeader, IonMenuButton } from "@ionic/react";
import { isWebView } from "@constants/platforms.const";
import LightUser from "@assets/images/user-light.png";
import DarkUser from "@assets/images/user-dark.png";
import { Button } from "./Buttons";
import useTheme from "@hooks/useTheme";
import { DARK, LIGHT } from "@constants/theme.const";

const ThemeSwitcher = lazy(() => import("@components/ThemeSwitcher"));
const LanguageSwitcher = lazy(() => import("./LanguageSwitcher/Index"));

const Header: React.FC = () => {
  const { theme } = useTheme();

  return (
    <IonHeader class="border-0">
      <div className="flex items-center justify-between bg-white-100 px-4 py-3 dark:bg-ebony-950 sm:p-4 md:px-6 md:py-5">
        {/* right actions */}
        <div className="flex gap-1">
          {/* menu toggle button */}
          <IonButtons slot="start">
            <IonMenuButton class="text-white-950 dark:text-white-200" />
          </IonButtons>

          {/* user details */}
          <div className="hidden items-center gap-3 sm:flex">
            <img
              className="h-9 w-9 rounded-full object-contain md:h-12 md:w-12"
              alt="user avatar"
              src={theme === LIGHT ? LightUser : DarkUser}
            />
            <div className="flex flex-col gap-1 text-white-950 dark:text-white-200">
              <label className="font-iranyekan-bold text-sm">پیمان حسینی</label>
              <small className="text-xs opacity-70">برنامه نویس ارشد</small>
            </div>
          </div>
        </div>

        {/* left actions */}
        <div className="flex items-center gap-2">
          {/* theme switcher */}
          <ThemeSwitcher />

          {/* language switcher */}
          <LanguageSwitcher
            platform={isWebView() ? { view: "web" } : { view: "mobile" }}
          />

          {/* notification */}
          <Button
            className="h-9 w-9 p-0"
            variant={"filled-default"}
            round={"full"}
          >
            <i className="fi fi-rr-bell text-lg"></i>
          </Button>

          {/* logout */}
          <Button
            className="h-9 w-9 p-0"
            variant={"filled-default"}
            round={"full"}
          >
            <i className="fi fi-rr-power text-lg"></i>
          </Button>
        </div>
      </div>
    </IonHeader>
  );
};

export default Header;
