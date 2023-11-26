import Man1 from "@assets/images/avatars/man-1.png";
import Man2 from "@assets/images/avatars/man-2.png";
import Woman1 from "@assets/images/avatars/woman-1.png";
import Woman2 from "@assets/images/avatars/woman-2.png";

const UsersStatistic = () => {
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
        <small className="text-xs opacity-60">کاربران جدید این ماه</small>
      </div>

      {/* progress */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between font-iranyekan-medium text-xs opacity-50">
          <span>افزایش</span>
          <span>40%</span>
        </div>

        <div className="flex w-full">
          <div className="flex">
            {userItems.map((item, index) => (
              <div
                key={index}
                className="-mx-1 flex h-8 w-8 items-end justify-center overflow-hidden rounded-full border-2 border-white-50 bg-white-100 px-0 pt-0 dark:border-ebony-950 dark:bg-big-stone-950"
              >
                <img
                  src={item.image}
                  alt="avatar"
                  key={index}
                  className="-mb-[2px] object-contain"
                />
              </div>
            ))}
          </div>
          <div className="z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-white-50 bg-white-100 p-0 text-xs text-white-950 dark:border-ebony-950 dark:bg-big-stone-950 dark:text-white-200">
            +45
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersStatistic;
