import Tooltip from "@components/Tooltip";
import { Positions } from "@enums/positions.enum";
import { IonDatetime, IonDatetimeButton, IonModal } from "@ionic/react";
import { cn } from "@utils/classnames";
import React from "react";

export interface IDefaultDatePickerProps {
  errors?: any;
}

const DefaultDatePicker: React.FC<IDefaultDatePickerProps> = ({ errors }) => {
  return (
    <>
      <div
        className={cn(
          "shadows group flex items-center gap-4 rounded-full border-2 border-transparent bg-white-50 px-6 py-4 text-white-950 dark:bg-big-stone-950 dark:text-white-200",
          errors && "border-rose-300",
        )}
      >
        <IonDatetimeButton
          datetime="datetime"
          className="w-full justify-start partNative:m-0 partNative:bg-transparent partNative:p-0 partNative:text-left partNative:text-sm partNative:text-white-950 partNative:dark:text-white-200"
        />

        {/* error message */}
        {errors && (
          <Tooltip position={Positions.Top} message={errors}>
            <i className="fi fi-rr-exclamation text-rose-400 duration-300 ease-out"></i>
          </Tooltip>
        )}

        {/* open calendar button */}
        <i className="fi fi-rr-calendar text-white-950 duration-300 ease-out group-hover:text-blue-600 dark:text-white-200"></i>
      </div>

      <IonModal keepContentsMounted={true}>
        <IonDatetime dir="ltr" id="datetime" color="#2d7dff" presentation="date"></IonDatetime>
      </IonModal>
    </>
  );
};

export default DefaultDatePicker;
