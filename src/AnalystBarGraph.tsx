type AnalystEstimateBarGraphType = {
  label: string;
  percentage: string;
  barColor: string;
  percentageNumber: string;
};

//Note:- number in percentage and percentageNumber should be same

const AnalystEstimateBarGraph: React.FC<AnalystEstimateBarGraphType> = ({
  label,
  percentage,
  barColor,
  percentageNumber,
}) => {
  return (
    <div className=" flex relative w-min mt-6">
      <div className="w-10">{label}</div>
      <div className=" ml-4  w-56 sm:w-96 pt-3">
        <div className={`${percentage} ${barColor} h-3 rounded-2xl relative`}>
          <div className="absolute -top-2  -right-9">{percentageNumber}%</div>
        </div>
      </div>
    </div>
  );
};

export default AnalystEstimateBarGraph;
