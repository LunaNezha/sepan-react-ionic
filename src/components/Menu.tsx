import { NavLink } from "react-router-dom";
import {
  IonContent,
  IonItem,
  IonLabel,
  IonMenu,
  IonMenuToggle,
} from "@ionic/react";
import { DARK, LIGHT } from "@constants/theme.const";
import LightLogo from "@assets/images/logo.png";
import DarkLogo from "@assets/images/logo-dark.png";
import { Directions } from "@enums/directions.enum";
import classNames from "classnames";
import { useEffect } from "react";
import i18next from "i18next";
import { EN } from "@constants/langs.const";
import { WindowSize } from "@constants/window-size.const";
import { useTranslation } from "react-i18next";
import { Roles } from "@enums/roles.enum";
import { IMenus } from "src/@types/menus.type";
import useTheme from "@hooks/useTheme";

const Menu: React.FC = () => {
  let currentDirection = document.body.dir;
  const menuElement = document.getElementById("menu");
  const { t } = useTranslation("translations");
  const [width] = WindowSize();
  const { theme } = useTheme();

  const appPages: IMenus[] = [
    {
      title: t("menus.dashboard"),
      url: "/",
      icon: "fi fi-rr-house-chimney",
      role: [Roles.PATIENT, Roles.ADMIN],
    },
    {
      title: t("menus.prescription_tracking"),
      url: "/prescription-tracking",
      icon: "fi fi-rr-search-alt",
      role: Roles.PATIENT,
    },
    {
      title: t("menus.notifications"),
      url: "/notifications",
      icon: "fi fi-rr-bell",
      role: Roles.PATIENT,
    },
    {
      title: t("menus.rare_drugs"),
      url: "/rare-drugs",
      icon: "fi fi-rr-medicine",
      role: Roles.PATIENT,
    },
    {
      title: t("menus.patients"),
      url: "/patients",
      icon: "fi fi-rr-users",
      role: Roles.ADMIN,
    },
    {
      title: t("menus.prescription_acceptance_list"),
      url: "/requests/lists",
      icon: "fi fi-rr-document-signed",
      role: Roles.ADMIN,
    },
    {
      title: t("menus.temporary_prescriptions"),
      url: "/requests/unassignments",
      icon: "fi fi-rr-folder-times",
      role: Roles.ADMIN,
    },
    {
      title: t("menus.prescription_delivery"),
      url: "/requests/delivering",
      // type: UserTypesNumbers.WrappingPrescription,
      icon: "fi fi-rr-folder-download",
      role: Roles.ADMIN,
    },
    {
      title: t("menus.prescription_archive"),
      url: "/requests/archive",
      icon: "fi fi-rr-archive",
      role: Roles.ADMIN,
    },
    {
      title: t("menus.sms"),
      icon: "fi fi-rr-comment-alt",
      url: "/sms/list",
      role: Roles.ADMIN,
    },
    {
      title: t("menus.news"),
      url: "/news",
      icon: "fi fi-rr-calendar",
      role: Roles.ADMIN,
    },
    {
      title: t("menus.guide"),
      url: "/guide",
      icon: "fi fi-rr-interrogation",
      role: Roles.ADMIN,
    },
    {
      title: t("menus.settings"),
      url: "/settings",
      icon: "fi fi-rr-settings",
      role: [Roles.ADMIN, Roles.PATIENT],
    },
  ];

  function handleMenuSizeAndDirection() {
    if (currentDirection == Directions.LTR) {
      menuElement?.setAttribute("side", "start");
      menuElement?.setAttribute("dir", "ltr");
    } else if (width <= 992) {
      menuElement?.setAttribute("side", "end");
      menuElement?.setAttribute("dir", "ltr");
    } else {
      menuElement?.setAttribute("side", "start");
      menuElement?.setAttribute("dir", "rtl");
    }
  }

  useEffect(() => {
    handleMenuSizeAndDirection();

    i18next.on("languageChanged", function (lang) {
      currentDirection = lang == EN ? Directions.LTR : Directions.RTL;
      handleMenuSizeAndDirection();
    });
  }, [WindowSize()]);

  return (
    <IonMenu id="menu" contentId="main" type="overlay">
      <IonContent>
        <div className=" flex flex-col gap-6 p-6 sm:gap-10 sm:p-9">
          {/* logo & title */}
          <div className="flex flex-col items-center justify-center gap-4 text-center sm:gap-5 lg:flex-row lg:text-right">
            <img
              className="flex h-20 w-20 p-3 items-center rounded-2xl bg-white-100 dark:bg-ebony-950"
              alt="logo"
              src={theme === DARK ? LightLogo : DarkLogo}
            />
            <IonLabel class="font-iranyekan-extrabold text-base xl:text-lg">
              ســــامانه پــــذیــــرش الکترونیکی نســــخه
            </IonLabel>
          </div>

          {/* menu items */}
          <div className="flex flex-1 flex-col sm:gap-1">
            {appPages.map((appPage, index) => {
              return (
                <IonMenuToggle key={index} autoHide={false}>
                  <NavLink to={appPage.url}>
                    <IonItem
                      lines="none"
                      detail={false}
                      className={
                        location.pathname === appPage.url ? "selected" : ""
                      }
                    >
                      <i
                        className={classNames(appPage.icon, {
                          " ml-4": document.body.dir == Directions.RTL,
                          " mr-4": document.body.dir == Directions.LTR,
                        })}
                      ></i>
                      <IonLabel class="font-iranyekan-medium">
                        {appPage.title}
                      </IonLabel>
                    </IonItem>
                  </NavLink>
                </IonMenuToggle>
              );
            })}
          </div>
        </div>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
