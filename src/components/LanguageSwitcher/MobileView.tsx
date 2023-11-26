import { Button } from "@components/Buttons";
import { EN, ENGLISH, FA, PERSIAN } from "@constants/langs.const";
import { Directions } from "@enums/directions.enum";
import { IonAlert } from "@ionic/react";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

interface IProps {
  changeDirection: (dir: Directions) => void;
}

const MobileView: React.FC<IProps> = ({ changeDirection }) => {
  const { i18n, t } = useTranslation();
  const [isAlertOpen, setAlertOpen] = useState(false);

  return (
    <>
      <Button
        className="h-9 w-9 p-0"
        variant={"filled-default"}
        round={"full"}
        onClick={() => setAlertOpen(true)}
      >
        <i className="fi fi-rr-globe"></i>
      </Button>

      <IonAlert
        isOpen={isAlertOpen}
        header={t("choose_lang.header")}
        inputs={[
          {
            label: PERSIAN,
            type: "radio",
            value: FA,
            checked: true,
            handler: () => {
              changeDirection(Directions.RTL);
              i18n.changeLanguage(FA);
              setAlertOpen(false);
            },
          },
          {
            label: ENGLISH,
            type: "radio",
            value: EN,
            handler: () => {
              changeDirection(Directions.LTR);
              i18n.changeLanguage(EN);
              setAlertOpen(false);
            },
          },
        ]}
        buttons={[]}
        onDidDismiss={() => setAlertOpen(false)}
      ></IonAlert>
    </>
  );
};

export default MobileView;
