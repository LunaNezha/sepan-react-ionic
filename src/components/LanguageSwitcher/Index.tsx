import React, { useEffect, useState } from "react";
import MobileView from "./MobileView";
import { WebView } from "./WebView";
import { Directions } from "@enums/directions.enum";
import { useTranslation } from "react-i18next";

const views = {
  mobile: MobileView,
  web: WebView,
};

interface Props {
  platform: {
    view: "mobile" | "web";
  };
}

const LanguageSwitcher: React.FC<Props> = ({ platform }) => {
  const { t } = useTranslation(["translations"]);
  const CurrentView = views[platform.view];
  const [direction, setDirection] = useState(Directions.RTL);

  const handleChangeDirection = (dir: Directions) => {
    setDirection(dir);
  };

  useEffect(() => {
    document.body.dir = direction;
    document.title = t("app_title");
  }, [t]);

  return <CurrentView changeDirection={handleChangeDirection} />;
};

export default LanguageSwitcher;
