import { GetPrescriptions } from "@api/prescriptions/get-prescriptions";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { WindowSize } from "@constants/window-size.const";
import { lazy } from "react";
import { useTranslation } from "react-i18next";

const LegendContent = lazy(() => import("./Chart/LegendContent"));
const TooltipContent = lazy(() => import("./Chart/TooltipContent"));

const PrescriptionMonthlyStatistics = () => {
  const { prescription } = GetPrescriptions();
  const { t } = useTranslation("translations");
  const [width] = WindowSize();

  return (
    <div className="shadows flex flex-1 flex-col justify-between gap-10 rounded-md bg-white-50 px-6 py-7 font-iranyekan-regular text-white-950 dark:bg-big-stone-950 dark:text-white-200">
      {/* top detais */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <h3 className="font-iranyekan-extrabold text-lg">745</h3>

          <div className="badge badge-success">
            <span>54,2%</span>
            <i className="fi fi-rr-arrow-small-up"></i>
          </div>
        </div>
        <small className="text-xs opacity-60">
          {t("titles.prescription_monthly_statistic")}
        </small>
      </div>

      {/* chart details */}
      <ResponsiveContainer width="100%" height={400} className="max-w-full">
        <LineChart data={prescription as any} className="w-full max-w-full">
          {/* background grid */}
          <CartesianGrid strokeDasharray="2" opacity={0.2} />

          {/* axis for web view */}
          {width >= 768 && (
            <>
              <XAxis dataKey="genderType" />
              <YAxis width={10} />
            </>
          )}

          {/* axis for mobile view */}
          {width <= 768 && (
            <>
              <XAxis />
              <YAxis dataKey="genderType" width={10} />
            </>
          )}

          {/* tooltip for showing details */}
          <Tooltip
            content={<TooltipContent active={false} payload={[]} label={""} />}
          />

          {/* for finding chart color and details */}
          <Legend content={<LegendContent payload={[]} />} />

          {/* these are details */}
          <Line
            type="monotone"
            dataKey="serialDocument"
            stroke="#8884d8"
            strokeWidth={1.2}
            name="شماره سریال"
            layout={width <= 768 ? "vertical" : "horizontal"}
          />
          <Line
            type="monotone"
            dataKey="patientNationalCode"
            stroke="#82ca9d"
            name="کد ملی"
            layout={width <= 768 ? "vertical" : "horizontal"}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PrescriptionMonthlyStatistics;
