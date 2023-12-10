import NotFoundImage from "@assets/images/404-error.svg";
import { Button } from "@components/Buttons";
import { PathNames } from "@constants/pathnames.const";
import { IonText } from "@ionic/react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";

const NotFound = () => {
  const history = useHistory();
  const { t } = useTranslation("translations");

  useEffect(() => {
    document.title = t("titles.not_found");
  }, []);

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-6 bg-white-100 p-2 dark:bg-big-stone-950 sm:p-4 md:p-6">
      <img
        className="w-auto object-contain md:h-4/5"
        src={NotFoundImage}
        alt="404 error image"
      />

      <div>
        <Button
          variant={"filled-blue"}
          round={"full"}
          onClick={() => history.push(PathNames.Home)}
        >
          <i className="fi fi-rr-house-chimney"></i>
          <IonText>{t("buttons.back_home")}</IonText>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
