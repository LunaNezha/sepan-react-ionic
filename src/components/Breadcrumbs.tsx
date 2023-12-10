import { IonBreadcrumb, IonBreadcrumbs } from "@ionic/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink, useLocation } from "react-router-dom";

type Props = {
  currentPageTitle: string;
};

const Breadcrumbs = ({ currentPageTitle }: Props) => {
  const { t } = useTranslation("translations");
  const location = useLocation();
  const [maxItems, setMaxItems] = useState(2);
  const pathnames = location.pathname.split("/").filter((x) => x);

  const handleClickMaxItems = () => {
    setMaxItems(0);
  };

  return (
    <IonBreadcrumbs
      maxItems={maxItems}
      onIonCollapsedClick={handleClickMaxItems}
    >
      {/* home */}
      <IonBreadcrumb className="partNative:text-white-950 partNative:dark:text-white-200">
        {location.pathname === "/" ? null : (
          <NavLink to="/">{t("titles.dashboard")}</NavLink>
        )}
      </IonBreadcrumb>

      {/* other breadcrumbs */}
      {pathnames.map((item, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;

        return (
          <>
            {last ? (
              <IonBreadcrumb key={to}>{currentPageTitle}</IonBreadcrumb>
            ) : (
              <IonBreadcrumb key={to}>
                <NavLink to={to}>{item}</NavLink>
              </IonBreadcrumb>
            )}
          </>
        );
      })}
    </IonBreadcrumbs>
  );
};

export default Breadcrumbs;
