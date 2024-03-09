import AnalystEstimateBarGraph from "./AnalystBarGraph";
import SmallHeading from "./Pure Component/SmallHeading";

const AnalystEstimate = () => {
  return (
    <div className="">
      {" "}
      <SmallHeading headingText="Analyst Estimates" customClassName="mt-5" />
      <div className="flex content-center items-center">
        <div className="rounded-full bg-green-100 flex text-center justify-center items-center text-3xl text-green-400 h-24 w-24">
          76%
        </div>
        <div className="ml-4 w-32">
          <AnalystEstimateBarGraph
            label="Buy"
            percentage="w-[76%]"
            barColor="bg-green-500"
            percentageNumber="76"
          />
          <AnalystEstimateBarGraph
            label="Hold"
            percentage="w-[8%]"
            barColor="bg-gray-500"
            percentageNumber="8"
          />
          <AnalystEstimateBarGraph
            label="Sell"
            percentage="w-[16%]"
            barColor="bg-red-500"
            percentageNumber="16"
          />
        </div>
      </div>
    </div>
  );
};

export default AnalystEstimate;
