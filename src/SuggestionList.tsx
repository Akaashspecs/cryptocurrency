import React, { useRef } from "react";
import Heading from "./Pure Component/Heading";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

type SuggestionListType = {
  heading: string;
  cryptoCoins: {
    item: {
      small: string;
      symbol: string;
      data: {
        price_change_percentage_24h: {
          usd: number;
        };
        price: string;
        sparkline: string;
      };
    };
  }[];
};

const SuggestionList: React.FC<SuggestionListType> = ({
  heading,
  cryptoCoins,
}) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const slideLeft = () => {
    if (sliderRef.current) {
      const slider = sliderRef.current.clientWidth;
      sliderRef.current.scrollLeft -= slider;
    }
  };

  const slideRight = () => {
    if (sliderRef.current) {
      const slider = sliderRef.current.clientWidth;
      sliderRef.current.scrollLeft += slider;
    }
  };
  const removeUnwantedText = (data: string) => {
    const cleanedString = data
      .replace(/<\/?[^>]+(>|$)/g, "")
      .replace(/&nbsp;/g, "\u00A0");

    return cleanedString;
  };

  return (
    <div className="relative">
      <Heading headingText={heading} />
      <div
        ref={sliderRef}
        className=" slider overflow-x-scroll scroll scroll-smooth whitespace-nowrap scrollbar-hide my-4"
      >
        <MdChevronLeft
          className="opacity-50 cursor-pointer hover:opacity-100 absolute left-0 top-1/2 "
          onClick={slideLeft}
          size={40}
        />
        <div className="flex w-max">
          {cryptoCoins.map((data) => (
            <div className=" h-[160px] min-w-[252px] border border-slate-500 rounded p-3 mr-3 grow">
              <div className="flex">
                <img
                  src={data?.item?.small}
                  className="rounded-full"
                  height={26}
                  width={26}
                />
                <div className="ml-2 font-medium">{data?.item?.symbol}</div>
                <div
                  className={`px-2 ml-2 ${
                    data?.item?.data.price_change_percentage_24h.usd >= 0
                      ? "text-green-500 bg-green-100"
                      : "text-red-500 bg-red-100"
                  }`}
                >
                  {data?.item?.data.price_change_percentage_24h.usd.toFixed(2)}%
                </div>
              </div>
              <div className="font-semibold text-xl">
                {removeUnwantedText(data?.item?.data.price)}
              </div>
              <div className=" flex justify-center mt-2">
                <img src={data?.item?.data.sparkline} />
              </div>
            </div>
          ))}
        </div>
        <MdChevronRight
          className="opacity-50 cursor-pointer hover:opacity-100 absolute right-0 top-1/2"
          onClick={slideRight}
          size={40}
        />
      </div>
    </div>
  );
};

export default SuggestionList;
