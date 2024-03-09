import React from "react";

type CalculateTabType = {
  imgSrc: string;
  heading: string;
  backgroundColor: string;
};

const CalculateTab: React.FC<CalculateTabType> = ({
  imgSrc,
  heading,
  backgroundColor,
}) => (
  <div className="mt-5">
    <div
      className={`h-[151px] w-[388px] bg-gradient-to-r mr-4 flex item px-3 rounded-md ${backgroundColor}`}
    >
      <img src={imgSrc} alt="SVG as an image" height={128} width={128} />
      <div className="ml-4">
        <div className="text-white font-semibold text-lg w-40 mt-4">
          {heading}
        </div>
        <button className="bg-white rounded-md  font-medium h-[32px] w-[132px] flex justify-center items-center mt-2">
          Check Now <img src="/svjphoto/rightarrow.svg" alt="SVG as an image" />
        </button>
      </div>
    </div>
  </div>
);

export default CalculateTab;
