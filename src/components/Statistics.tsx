import classNames from "classnames";
import { Roles } from "@enums/roles.enum";
import { Cell, Pie, PieChart } from "recharts";
import { useTranslation } from "react-i18next";

const Statistics = () => {
  const { t } = useTranslation(["translations"]);

  const statisticItems = [
    {
      name: t("messages.delivered_prescription"),
      icon: "fi fi-rr-memo-circle-check",
      href: "/",
      role: Roles.ADMIN,
      count: 375,
    },
    {
      name: t("messages.rejected_prescription"),
      icon: "fi fi-rr-vote-nay",
      href: "/",
      role: Roles.ADMIN,
      count: 50,
    },
    {
      name: t("messages.canceled_prescription"),
      icon: "fi fi-rr-delete-document",
      href: "/",
      role: Roles.ADMIN,
      count: 140,
    },
  ];

  return (
    <div className="flex flex-wrap gap-3 sm:gap-4">
      {statisticItems.map((item, statisticIndex) => {
        // chart data items
        const chartDatas = [{ value: 100 }, { value: Number(`${item.count}`) }];

        return (
          <a
            key={statisticIndex}
            className="shadows bg-white-50 flex flex-1 cursor-pointer items-center justify-between gap-5 rounded-md p-5 dark:bg-big-stone-950 sm:flex-auto"
          >
            {/* statistic information (icon, count, name) */}
            <div className="flex items-center justify-start gap-5">
              <i
                className={classNames(item.icon, "rounded-lg p-4 text-xl", {
                  "bg-emerald-400/10 text-emerald-400": statisticIndex == 0,
                  "bg-orange-400/10 text-orange-400": statisticIndex == 1,
                  "bg-rose-400/10 text-rose-400": statisticIndex == 2,
                })}
              ></i>

              <div className="text-white-950 dark:text-white-200 flex flex-col">
                <h3 className="flex items-center gap-3 font-iranyekan-bold text-xl">
                  {item.count}
                  <i
                    className={classNames("text-lg", {
                      "fi fi-rr-arrow-trend-down text-rose-400":
                        item.count <= 50,
                      "fi fi-rr-arrow-trend-up text-emerald-400":
                        item.count > 50,
                    })}
                  ></i>
                </h3>
                <small className="font-iranyekan-regular text-xs opacity-60">
                  {item.name}
                </small>
              </div>
            </div>

            {/* statistic chart */}
            <div className="flex items-center justify-center">
              <PieChart width={50} height={50}>
                <Pie
                  className="flex items-center justify-center"
                  data={chartDatas}
                  innerRadius={15}
                  outerRadius={20}
                  fill="#8884d8"
                  dataKey="value"
                  stroke="none"
                  strokeWidth={2}
                >
                  {chartDatas.map((chart, chartIndex) => (
                    <Cell
                      key={`cell-${chartIndex}`}
                      className={classNames({
                        "fill-white-100 dark:fill-ebony-950":
                          chart.value == 100,
                        "fill-emerald-400 ": statisticIndex == 0,
                        "fill-orange-400 ": statisticIndex == 1,
                        "fill-rose-400 ": statisticIndex == 2,
                      })}
                    />
                  ))}
                </Pie>
              </PieChart>
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default Statistics;
