import { GetPrescriptions } from "@api/prescriptions/get-prescriptions";
import { IonContent } from "@ionic/react";
import { lazy, useEffect } from "react";
import { useTranslation } from "react-i18next";

const LocalizeCalendar = lazy(() => import("@components/Calendar"));
const LatestNotification = lazy(() => import("@components/LatestNotification"));
const MonthlyOrders = lazy(() => import("@components/MonthlyOrders"));
const PrescriptionStatistics = lazy(
  () => import("@components/PrescriptionStatistics"),
);
const Statistics = lazy(() => import("@components/Statistics"));
const UsersStatistic = lazy(() => import("@components/UsersStatistic"));
const DailySales = lazy(() => import("@components/DailySales"));

const Home: React.FC = () => {
  const { t } = useTranslation(["translations"]);
  const { prescription } = GetPrescriptions();

  useEffect(() => {
    document.title = t("titles.dashboard");
  }, []);

  return (
    <IonContent fullscreen>
      <div className="flex flex-col gap-5 p-5 sm:gap-6 sm:p-6 md:gap-8 md:p-8">
        {/* statistics */}
        <Statistics />

        {/* admin utilities & components*/}
        <div className="flex flex-col gap-3 sm:gap-4">
          <div className="grid grid-flow-row grid-cols-1 gap-3 xs:grid-cols-2 sm:gap-4 md:grid-flow-col md:grid-cols-4 md:grid-rows-2">
            <MonthlyOrders />
            <DailySales />
            <LatestNotification />
            <UsersStatistic />

            {/* calendar */}
            <div className="shadows grid flex-col justify-between gap-5 rounded-md bg-white-50 px-6 py-7 font-iranyekan-regular text-white-950 dark:bg-big-stone-950 dark:text-white-200 xs:col-span-2 md:row-span-2">
              {/* top detais */}
              <div className="flex flex-col gap-2">
                <h3 className="font-iranyekan-extrabold text-lg">تقویم</h3>
                <small className="text-xs opacity-60">
                  با استفاده از این تقویم می توانید زمان دریافت نسخه یا تحویل
                  دارو را مشاهده کنید.
                </small>
              </div>

              {/* calendar */}
              <div className="flex">
                <LocalizeCalendar />
              </div>
            </div>
          </div>

          <div className="flex">
            <PrescriptionStatistics />
          </div>
        </div>

        {/* patient utilities & components*/}
      </div>
    </IonContent>
  );
};

export default Home;
