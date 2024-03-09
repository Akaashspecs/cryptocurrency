//Note:- number in percentage and percentageNumber should be same

import Heading from "./Pure Component/Heading";
import SmallHeading from "./Pure Component/SmallHeading";
import { Chart } from "react-google-charts";
import { TokenomicsText } from "./helper";

const TokEnomics = () => {
  const data = [
    ["Task", "Hours per Day"],
    ["Crowdsale investors", 80],
    ["Foundation", 20],
  ];

  const options = {
    pieHole: 0.5,
    is3D: false,
    colors: ["#00AEEF", "#FF5733"],
  };
  return (
    <div className=" mt-5 bg-white p-7">
      <Heading headingText="Tokenomics" />
      <SmallHeading headingText="Initial Distribution" customClassName="mt-3" />
      <Chart
        chartType="PieChart"
        className="w-[300px]  sm:w-[500px] lg-[600px] h-[300px]  sm:h-[500px] lg-[600px] "
        data={data}
        options={options}
      />

      <p className="text-slate-700">{TokenomicsText}</p>
    </div>
  );
};

export default TokEnomics;
