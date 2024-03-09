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
      className={`h-[151px] sm:w-[388px] w-auto bg-gradient-to-r mr-0 sm:mr-4 flex item px-3 rounded-md ${backgroundColor}`}
    >
      <img src={imgSrc} alt="SVG as an image" height={128} width={128} />
      <div className="sm:ml-4 ml-2">
        <div className="text-white font-semibold text-base sm:text-lg w-20 sm:w-40 mt-4">
          {heading}
        </div>
        <button className="bg-white rounded-md text-xs sm:text-base sm:font-semibold   h-[32px] w-[100px] sm:w-[132px] flex justify-center items-center mt-2">
          Check Now <img src="/svjphoto/rightarrow.svg" alt="SVG as an image" />
        </button>
      </div>
    </div>
  </div>
);

export default CalculateTab;
