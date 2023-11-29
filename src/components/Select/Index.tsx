import React from "react";
import SelectMobileView from "./MobileView";
import SelectWebView, { ISelectWebViewProps } from "./WebView";

const views = {
  mobile: SelectMobileView,
  web: SelectWebView,
};

interface IProps extends ISelectWebViewProps {
  platform: {
    view: "mobile" | "web";
  };
}

const Select: React.FC<IProps> = (props) => {
  const CurrentSelect = views[props.platform.view];
  
  return <CurrentSelect {...props}>{props.children}</CurrentSelect>;
};

export default Select;
