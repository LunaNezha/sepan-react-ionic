import { WindowSize } from "@constants/window-size.const";
import { Bar, BarChart, ResponsiveContainer, Tooltip } from "recharts";

const DailySales = () => {
  const [width] = WindowSize();
  const chartDatas = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <div className="shadows flex flex-1 flex-col justify-between gap-8 rounded-md bg-white-50 px-6 py-7 font-iranyekan-regular text-white-950 dark:bg-big-stone-950 dark:text-white-200">
      {/* top detais */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <h3 className="font-iranyekan-extrabold text-lg">5,5 میلیون</h3>

          <div className="badge badge-danger">
            <span>5,7%</span>
            <i className="fi fi-rr-arrow-small-down"></i>
          </div>
        </div>
        <small className="text-xs opacity-60">درآمد روزانه</small>
      </div>

      {/* chart details */}
      <ResponsiveContainer width="100%" height={100} className="max-w-full">
        <BarChart
          data={chartDatas}
          barCategoryGap={width <= 640 ? 12 : 15}
          className="w-full max-w-full"
        >
          <Tooltip />
          <Bar
            radius={50}
            dataKey="uv"
            className="flex items-center justify-center fill-violet-400"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DailySales;
