import Heading from "./Pure Component/Heading";
import SmallHeading from "./Pure Component/SmallHeading";
import { FundamentalLeftSideTable, FundamentalRightSideTable } from "./helper";
import Range from "./RangeComponent";

const Performance = () => {
  return (
    <div className="bg-white  rounded mt-5 p-7">
      <Heading headingText="Performance" />

      <div className="flex mt-5 justify-between">
        <p className="text-center w-28 text-sm mr-2 ">
          Today's Low <p className="text-base font-semibold">$46,930.22</p>
        </p>
        <Range min={46930} max={49343} />

        <p className="text-center w-28 text-sm ml-2">
          Today's High <p className="text-base font-semibold">$49,343.76</p>
        </p>
      </div>

      <div className="flex mt-5 justify-between">
        <p className="text-center w-28 text-sm mr-2">
          52W Low <p className="text-base font-semibold">$45,330.44</p>
        </p>

        <Range min={45330} max={49343} />

        <p className="text-center w-28 text-sm ml-2">
          52W High <p className="text-base font-semibold">$49,343.89</p>
        </p>
      </div>
      <div className="mt-14">
        <SmallHeading headingText="Fundamentals" />

        <div className="flex justify-between flex-wrap">
          <div className="grow w-fit">
            {FundamentalLeftSideTable.map((item) => (
              <div className="flex h-[64px] border border-b-slate-400 border-x-0 border-t-0  max-w-[500px] justify-between pr-3 items-center">
                <div className="text-slate-600 w-110 sm:w-[170px]">
                  {item.label}
                </div>
                <div className="text-end w-[200px]">{item.value}</div>
              </div>
            ))}
          </div>
          <div className="grow w-auto block lg:flex flex-col items-start lg:items-end">
            {FundamentalRightSideTable.map((item) => (
              <div className="flex h-[64px] border border-b-slate-400 border-x-0 border-t-0 xl:min-w-[500px] min-w-max max-w-[500px] justify-between pr-3 items-center">
                <div className="text-slate-600 w-110 sm:w-[170px]">
                  {item.label}
                </div>
                <div className="w-[200px] flex flex-col  items-end">
                  <div className="flex justify-end">
                    {" "}
                    <div className="mr-2">{item.value}</div>
                    {item.percentage && (
                      <div className="text-red-500">{item.percentage}%</div>
                    )}
                  </div>
                  <div className="text-sm">{item.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Performance;
