import React from "react";

type SmallHeadingType = {
  headingText: string;
  customClassName?: string;
};

const SmallHeading: React.FC<SmallHeadingType> = ({
  headingText,
  customClassName,
}) => {
  return (
    <div
      className={`text-xl font-semibold  flex  ${
        customClassName ? customClassName : ""
      }`}
    >
      {headingText}
    </div>
  );
};

export default SmallHeading;
