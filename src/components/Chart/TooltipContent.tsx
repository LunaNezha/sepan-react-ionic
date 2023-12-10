import React from "react";

type Props = {
  active: boolean;
  label: string;
  payload: { name: string; value: string; color: string }[];
};

const TooltipContent: React.FC<Props> = ({ active, payload, label }) => {
  if (active && payload?.length) {
    return (
      <div className="flex flex-col gap-4 rounded-xl bg-white-50 p-4 shadow-md dark:bg-ebony-950 dark:shadow-lg">
        <strong className="font-iranyekan-extrabold">{label}</strong>

        <div className="flex flex-col gap-2">
          {payload.map((entry, index) => (
            <div
              key={`item-${index}`}
              className="flex items-center gap-3 text-xs"
            >
              <strong>{entry.name}:</strong>
              <strong>{entry.value}</strong>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return null;
};

export default TooltipContent;
