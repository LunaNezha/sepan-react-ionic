import Tooltip from "@components/Tooltip";
import { Positions } from "@enums/positions.enum";
import { cn } from "@utils/classnames";
import { InputHTMLAttributes } from "react";
import { DatePicker } from "zaman";
import { DatePickerOnChange } from "zaman/dist/packages/DatePicker/DatePicker.types";

export interface IJalaliDatePickerProps {
  defaultValue?: Date | any;
  accentColor?: string;
  range?: boolean;
  show?: boolean;
  position?: "right" | "left" | "center";
  errors?: any;
  inputAttributes?: InputHTMLAttributes<HTMLInputElement>;
  onChange?: (value: DatePickerOnChange) => void;
}

const JalaliDatePicker: React.FC<IJalaliDatePickerProps> = ({
  defaultValue = new Date().toLocaleDateString(),
  accentColor = "#2666fa",
  position,
  range,
  show,
  errors,
  inputAttributes,
}) => {
  return (
    <div
      className={cn(
        "shadows group flex items-center gap-4 rounded-full border-2 border-transparent bg-white-50 px-6 py-4 text-white-950 dark:bg-big-stone-950 dark:text-white-200",
        errors && "border-rose-300",
      )}
    >
      <DatePicker
        round="x2"
        defaultValue={defaultValue}
        accentColor={accentColor}
        range={range}
        show={show}
        onChange={(e) => console.log(e)}
        position={position}
        inputAttributes={inputAttributes}
        inputClass="outline-none w-full rounded-full text-sm font-iranyekan-regular bg-transparent"
      />

      {/* clear icon */}
      <i className="fi fi-rr-cross-small cursor-pointer text-rose-400 duration-300 ease-out hover:text-rose-600"></i>

      {/* error message */}
      {errors && (
        <Tooltip position={Positions.Top} message={errors}>
          <i className="fi fi-rr-exclamation text-rose-400 duration-300 ease-out"></i>
        </Tooltip>
      )}

      {/* open calendar button */}
      <i className="fi fi-rr-calendar text-white-950 duration-300 ease-out group-hover:text-blue-600 dark:text-white-200"></i>
    </div>
  );
};

export default JalaliDatePicker;
