import React from "react";

interface IProps {
  payload: { value: string; color: string }[];
}

const LegendContent: React.FC<IProps> = (props) => {
  const { payload } = props;

  return (
    <ul className="flex relative flex-wrap items-center justify-center gap-4">
      {payload.map((entry, index) => (
        <li
          key={`item-${index}`}
          style={{ color: entry.color }}
          className="flex items-center gap-1"
        >
          <i className="fi fi-rr-dot-circle"></i>
          <span className="font-iranyekan-bold text-xs">{entry.value}</span>
        </li>
      ))}
    </ul>
  );
};

export default LegendContent;
