import { FA } from "@constants/langs.const";
import { IonDatetime, IonDatetimeButton, IonModal } from "@ionic/react";
import React from "react";
import { useTranslation } from "react-i18next";
import { DatePicker } from "zaman";

const LocalizeDatePicker = () => {
  const { i18n } = useTranslation("translations");

  return (
    <>
      {i18n.language === FA ? (
        <DatePicker round="x2" defaultValue={new Date().toLocaleDateString()} accentColor="#2666fa" />
      ) : (
        <>
          <IonDatetimeButton datetime="datetime"></IonDatetimeButton>

          <IonModal keepContentsMounted={true}>
            <IonDatetime
              dir="ltr"
              id="datetime"
              presentation="date"
            ></IonDatetime>
          </IonModal>
        </>
      )}
    </>
  );
};

export default LocalizeDatePicker;
