import React from "react";
import DefaultDatePicker, { IDefaultDatePickerProps } from "./Default";
import JalaliDatePicker, { IJalaliDatePickerProps } from "./Jalali";

const views = {
  default: DefaultDatePicker,
  jalali: JalaliDatePicker,
};

interface IProps extends IJalaliDatePickerProps, IDefaultDatePickerProps {
  locale: {
    types: "default" | "jalali";
  };
}

const LocalizeDatePicker: React.FC<IProps> = (props) => {
  const CurrentDatePicker = views[props.locale.types];

  return <CurrentDatePicker {...props} />;
};

export default LocalizeDatePicker;
