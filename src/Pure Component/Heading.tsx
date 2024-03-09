import React from "react";

type HeadingType = {
  headingText: string;
  customClassName?: string;
};

const Heading: React.FC<HeadingType> = ({ headingText, customClassName }) => {
  return (
    <div
      className={`text-3xl font-semibold ${
        customClassName ? customClassName : ""
      }`}
    >
      {headingText}
    </div>
  );
};

export default Heading;
