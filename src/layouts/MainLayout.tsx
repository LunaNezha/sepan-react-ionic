import {
  IonApp,
  IonContent,
  IonPage,
  IonRouterOutlet,
  IonSplitPane,
  IonTabs,
} from "@ionic/react";
import {
  fileTrayFullOutline,
  headsetOutline,
  homeOutline,
  personCircleOutline,
} from "ionicons/icons";
import React, { lazy } from "react";
import { isWebView } from "@constants/platforms.const";
import { IonIcon, IonLabel, IonTabBar, IonTabButton } from "@ionic/react";
import { useTranslation } from "react-i18next";

const Menu = lazy(() => import("@components/Menu"));
const Header = lazy(() => import("@components/Header"));

const MainLayout: React.FC<any> = ({ children }) => {
  const { t } = useTranslation(["translations"]);

  const tabItems = [
    {
      name: t("tabs.home"),
      icon: homeOutline,
      tabName: "home",
      href: "/",
    },
    {
      name: t("tabs.request"),
      icon: fileTrayFullOutline,
      tabName: "request",
      href: "/",
    },
    {
      name: t("tabs.support"),
      icon: headsetOutline,
      tabName: "support",
      href: "/",
    },
    {
      name: t("tabs.profile"),
      icon: personCircleOutline,
      tabName: "profile",
      href: "/",
    },
  ];

  return (
    <IonSplitPane contentId="main">
      {/* sidebar menu */}
      <Menu />

      <IonPage id="main">
        {/* header component */}
        <Header />

        <IonContent className="ion-padding">
          {/* tab (only shown in ios and android) */}
          <IonTabs>
            {/* router outlet */}
            <IonRouterOutlet id="main">{children}</IonRouterOutlet>

            {/* tab bars */}
            <IonTabBar
              slot="bottom"
              selectedTab="home"
              className={`${
                isWebView() ? "hidden" : "flex"
              } h-18 rounded-tl-2xl rounded-tr-2xl border-0 bg-white-50 shadow-tabbar-light dark:bg-big-stone-950 dark:shadow-tabbar-dark`}
            >
              {tabItems.map((item, index) => (
                <IonTabButton
                  tab={item.tabName}
                  key={index}
                  href={item.href}
                  className="ionic-tab-button bg-white-50 text-white-950 partNative:flex dark:bg-big-stone-950 dark:text-white-200 "
                >
                  <IonIcon icon={item.icon} className="text-2xl" />
                  {item.name && (
                    <IonLabel className="font-iranyekan-medium">
                      {item.name}
                    </IonLabel>
                  )}
                </IonTabButton>
              ))}
            </IonTabBar>
          </IonTabs>
        </IonContent>
      </IonPage>
    </IonSplitPane>
  );
};

export default MainLayout;
