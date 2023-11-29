import Tooltip from "@components/Tooltip";
import { Positions } from "@enums/positions.enum";
import { IonSelect } from "@ionic/react";
import { cn } from "@utils/classnames";
import React from "react";

export interface ISelectWebViewProps
  extends React.HTMLAttributes<HTMLIonSelectOptionElement> {
  className?: string;
  errors?: any;
  icon?: string;
  multiple?: boolean;
  children: React.ReactNode;
}

const SelectWebView = (
  {
    className,
    errors,
    children,
    icon,
    multiple = false,
    ...props
  }: ISelectWebViewProps,
  ref: React.Ref<HTMLIonSelectElement>,
) => {
  return (
    <div
      className={cn(
        className,
        "shadows group relative flex items-center gap-4 rounded-full border-2 border-transparent bg-white-50 px-6 py-1 dark:bg-big-stone-950",
        errors && "border-rose-300",
      )}
    >
      <IonSelect
        className="flex-1 partText:font-iranyekan-regular partText:text-sm partText:text-white-950 partContainer:w-full partIcon:text-white-950 partPlaceholder:font-iranyekan-regular partPlaceholder:text-sm partPlaceholder:text-white-950 partText:dark:text-white-200 partIcon:dark:text-white-200 partPlaceholder:dark:text-white-200"
        ref={ref}
        multiple={multiple}
        interface="popover"
        {...props}
      >
        {children}
      </IonSelect>

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
            "text-white-950 duration-300 ease-out group-hover:text-blue-600 dark:text-white-200",
          )}
        ></i>
      ) : null}
    </div>
  );
};

const forwardSelectWebView = React.forwardRef(SelectWebView);

export default forwardSelectWebView;
