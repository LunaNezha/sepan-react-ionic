import { IonProgressBar } from "@ionic/react";

const MonthlyOrders = () => {
  return (
    <div className="shadows flex flex-1 flex-col justify-between gap-10 rounded-md bg-white-50 px-6 py-7 font-iranyekan-regular text-white-950 dark:bg-big-stone-950 dark:text-white-200">
      {/* top detais */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <h3 className="font-iranyekan-extrabold text-lg">3,800</h3>

          <div className="badge badge-success">
            <span>40,2%</span>
            <i className="fi fi-rr-arrow-small-up"></i>
          </div>
        </div>
        <small className="text-xs opacity-60">سفارشات ماهانه</small>
      </div>

      {/* progress */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center justify-between font-iranyekan-medium text-xs opacity-50">
          <span>پیشرفت</span>
          <span>56%</span>
        </div>

        <IonProgressBar
          value={20}
          className="partProgress:bg-blue-600 h-1.25 rounded-full partTrack:bg-white-100 partTrack:dark:bg-ebony-950"
        ></IonProgressBar>
      </div>
    </div>
  );
};

export default MonthlyOrders;
