import { IonDatetime, IonDatetimeButton, IonModal } from "@ionic/react";
import React from "react";

export interface IDefaultDatePickerProps {}

const DefaultDatePicker: React.FC<IDefaultDatePickerProps> = ({}) => {
  return (
    <>
      <IonDatetimeButton
        datetime="datetime"
        className="partNative:m-0 partNative:w-full partNative:rounded-full partNative:bg-white-50 partNative:px-6 partNative:py-4 partNative:text-left partNative:text-white-950 partNative:dark:bg-big-stone-950 partNative:dark:text-white-200 partNative:text-sm partNative:shadows"
      ></IonDatetimeButton>

      <IonModal keepContentsMounted={true}>
        <IonDatetime dir="ltr" id="datetime" color={"secondary"} presentation="date"></IonDatetime>
      </IonModal>
    </>
  );
};

export default DefaultDatePicker;
