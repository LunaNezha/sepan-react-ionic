import React from "react";
import DefaultDatePicker, { DefaultDatePickerProps } from "./Default";
import JalaliDatePicker, { JalaliDatePickerProps } from "./Jalali";

const views = {
  default: DefaultDatePicker,
  jalali: JalaliDatePicker,
};

type Props = JalaliDatePickerProps &
  DefaultDatePickerProps & {
    locale: {
      types: "default" | "jalali";
    };
  };

const LocalizeDatePicker: React.FC<Props> = (props) => {
  const CurrentDatePicker = views[props.locale.types];

  return <CurrentDatePicker {...props} />;
};

export default LocalizeDatePicker;
