import { IonButton, IonText } from "@ionic/react";

const LatestNotification = () => {
  return (
    <div className="shadows text-white-950 bg-white-50 dark:text-white-200 relative flex flex-1 flex-col justify-between gap-10 rounded-md px-6 py-7 font-iranyekan-regular dark:bg-big-stone-950">
      {/* top detais */}
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="bg-triangle-shape absolute inset-x-0 bottom-auto top-0 h-20 bg-cover bg-no-repeat"></div>
        <i className="fi fi-rr-envelope-dot flex h-14 w-14 items-center justify-center rounded-full bg-orange-400/10 text-xl text-orange-400"></i>

        <div className="flex flex-col justify-center text-center">
          <h3 className="font-iranyekan-extrabold text-lg">62</h3>
          <small className="text-xs opacity-60">اطلاعیه های اخیر</small>
        </div>
      </div>

      {/* progress */}
      <div className="flex flex-col gap-1">
        <IonButton
          size="small"
          expand="full"
          className="btn partNative:px-3 partNative:py-2 partNative:bg-white-100 partNative:dark:bg-ebony-950 text-white-950 dark:text-white-200 partNative:rounded-md font-iranyekan-bold hover:text-blue-600 hover:dark:text-blue-600"
        >
          <IonText>مشاهده همه</IonText>
          <i className="fi fi-rr-arrow-small-left mr-3 text-lg duration-300 ease-in"></i>
        </IonButton>
      </div>
    </div>
  );
};

export default LatestNotification;
