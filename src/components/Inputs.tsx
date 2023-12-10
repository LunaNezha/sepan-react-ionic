import { cn } from "@utils/classnames";
import {
  BorderRadiusProps,
  BorderRadiusVariants,
  PaddingProps,
  PaddingVariants,
  TextAlignsProps,
  TextAlignsVariants,
  TextSizesProps,
  TextSizesVariants,
} from "@utils/variants";
import React from "react";
import Tooltip from "./Tooltip";
import { Positions } from "@enums/positions.enum";

type InputProps = BorderRadiusProps &
  TextSizesProps &
  PaddingProps &
  TextAlignsProps &
  React.InputHTMLAttributes<HTMLInputElement> & {
    className?: string;
    icon?: string;
    errors?: any;
  };

const Input = (
  {
    className,
    errors,
    icon,
    BorderRadius,
    Padding,
    TextSizes,
    TextAligns,
    ...props
  }: InputProps,
  ref: React.LegacyRef<HTMLInputElement>,
) => {
  return (
    <div
      className={cn(
        className,
        BorderRadiusVariants({ BorderRadius }),
        PaddingVariants({ Padding }),
        "shadows group flex flex-nowrap items-center gap-4 border-2 border-transparent bg-white-50 text-white-950 dark:bg-big-stone-950 dark:text-white-200",
        errors && "border-rose-300",
      )}
    >
      <input
        ref={ref}
        className={cn(
          TextSizesVariants({ TextSizes }),
          TextAlignsVariants({ TextAligns }),
          "w-full border-0 bg-transparent font-iranyekan-regular focus:outline-0",
        )}
        {...props}
      />

      {/* error message */}
      {errors && (
        <Tooltip position={Positions.Top} message={errors}>
          <i className="fi fi-rr-exclamation text-rose-400 duration-300 ease-out"></i>
        </Tooltip>
      )}

      {/* input releavent icon */}
      {icon ? (
        <i
          className={cn(
            icon,
            "duration-300 ease-out group-hover:text-blue-600",
          )}
        ></i>
      ) : null}
    </div>
  );
};

const forwardInput = React.forwardRef(Input);

export default forwardInput;
