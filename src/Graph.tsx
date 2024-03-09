import { useEffect, useState } from "react";
import TrendingGraph from "./TradingGraph";
import { BitcoinApi } from "./API/trendingAPI";

const Graph = () => {
  const [bitcoinPrice, setBitcoinPrice] = useState<{
    [key: string]: {
      inr: number;
      inr_24h_change: number;
      usd: number;
      usd_24h_change: number;
    };
  }>({});

  const capitalizeFirstLetter = (letter: string) => {
    return letter.charAt(0).toUpperCase() + letter.slice(1);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await BitcoinApi();
        setBitcoinPrice(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-white p-7 rounded-md h-[510px]">
      {bitcoinPrice &&
        Object.keys(bitcoinPrice).map((coin, i) => (
          <div key={i} className="flex mt-5 flex-col">
            <div className="flex  items-center">
              <img src="../src/svjphoto/bitcoinLogo.svg" alt="SVG as an imag" />
              <div className="pl-2 font-semibold text-2xl">
                {capitalizeFirstLetter(coin)}
              </div>
              <div className="pl-2 text-slate-800 font-semibold ">BTC</div>
              <div className="ml-6 rounded px-2 py-1 bg-slate-500 text-white  ">
                RanK #1
              </div>
            </div>

            <div className="flex mt-5">
              <div className="flex-col">
                <div className="text-3xl font-semibold">
                  $ {bitcoinPrice[coin].usd}{" "}
                </div>
                <div>₹ {bitcoinPrice[coin].inr}</div>
              </div>
              <div
                className={`${
                  bitcoinPrice[coin].usd_24h_change >= 0
                    ? "bg-green-100"
                    : "bg-red-100"
                } flex h-min mt-2 ml-7 px-2`}
              >
                <img
                  src={`${
                    bitcoinPrice[coin].usd_24h_change >= 0
                      ? "../src/svjphoto/trendingCoinsGreenArrow.svg"
                      : "../src/svjphoto/trendingCoinsRedArrow.svg"
                  }`}
                  alt="SVG as an imag"
                />
                <div
                  className={`${
                    bitcoinPrice[coin].usd_24h_change >= 0
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {" "}
                  {bitcoinPrice[coin].usd_24h_change.toFixed(2)}%
                </div>
              </div>
              <div className="mt-2 ml-6">(24H)</div>
            </div>
          </div>
        ))}
      <TrendingGraph />
    </div>
  );
};

export default Graph;
