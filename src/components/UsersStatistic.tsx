import Man1 from "@assets/images/avatars/man-1.png";
import Man2 from "@assets/images/avatars/man-2.png";
import Woman1 from "@assets/images/avatars/woman-1.png";
import Woman2 from "@assets/images/avatars/woman-2.png";
import { useTranslation } from "react-i18next";

const UsersStatistic = () => {
  const { t } = useTranslation("translations");
  const userItems = [
    { image: Man1 },
    { image: Man2 },
    { image: Woman1 },
    { image: Woman2 },
  ];

  return (
    <div className="shadows flex flex-1 flex-col justify-between gap-10 rounded-md bg-white-50 px-6 py-7 font-iranyekan-regular text-white-950 dark:bg-big-stone-950 dark:text-white-200">
      {/* top detais */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <h3 className="font-iranyekan-extrabold text-lg">1,500</h3>

          <div className="badge badge-success">
            <span>50,2%</span>
            <i className="fi fi-rr-arrow-small-up"></i>
          </div>
        </div>
        <small className="text-xs opacity-60">
          {t("titles.this_month_users")}
        </small>
      </div>

      {/* progress */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between font-iranyekan-medium text-xs opacity-50">
          <span>{t("globals.increase")}</span>
          <span>40%</span>
        </div>

        <div className="flex justify-center -space-x-2">
          {userItems.map((item, index) => (
            <div
              key={index}
              className="h-8 w-8 overflow-hidden rounded-full bg-white-100 ring-2 ring-white-950 dark:bg-big-stone-950 dark:ring-white-200"
            >
              <img
                className="z-10 mt-1 rounded-full"
                src={item.image}
                alt="avatar"
              />
            </div>
          ))}
          <div className="z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white-100 p-0 text-xs text-white-950 ring-2 ring-white-950 dark:bg-big-stone-950  dark:text-white-200 dark:ring-white-200">
            +45
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersStatistic;
