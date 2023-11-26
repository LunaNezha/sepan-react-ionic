import { isPlatform } from "@ionic/react";

export const isWebView = () => {
  return isPlatform("desktop" || "pwa" || "electron");
};

export const isMobileView = () => {
  return isPlatform(
    "android" ||
      "ios" ||
      "ipad" ||
      "iphone" ||
      "mobile" ||
      "mobileweb" ||
      "phablet",
  );
};
