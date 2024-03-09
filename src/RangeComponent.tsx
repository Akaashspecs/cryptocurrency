import React, { useState } from "react";
import "./Performance.css";

type RangeType = {
  min: number;
  max: number;
};

const Range: React.FC<RangeType> = ({ min, max }) => {
  const [value, setValue] = useState(min);
  const [tooltipPosition, setTooltipPosition] = useState(0);

  const handleRangeChange = (e: any) => {
    const newValue = e.target.value;
    setValue(newValue);
    const totalValue = max - min;
    const givenValue = newValue - min;
    const percentage = (givenValue / totalValue) * 100;
    setTooltipPosition(percentage);
  };

  return (
    <div className="range-slider-container w-full">
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={handleRangeChange}
        className=" w-96"
      />
      <div
        className="tooltip "
        style={{ left: `calc(${tooltipPosition}% - 30px)` }}
      >
        {value}
      </div>
    </div>
  );
};

export default Range;
