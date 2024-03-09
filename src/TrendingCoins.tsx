import { useEffect, useState } from "react";
import { latestShowApi } from "./API/trendingAPI";

const TrendingCoins = () => {
  const [trendingCoins, setTrendingCoins] = useState<
    {
      item: {
        name: string;
        small: string;
        score: number;
        symbol: string;
        data: {
          price_change_percentage_24h: {
            usd: number;
          };
          price: string;
          sparkline: string;
        };
      };
    }[]
  >([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await latestShowApi();
        setTrendingCoins(response.data.coins);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-white w-[426px] h-[225px] rounded-sm mt-5 p-6">
      <p className="font-semibold text-2xl">Trending Coin (24hr)</p>
      {trendingCoins.map((coin) => (
        <div>
          {coin.item.score < 3 && (
            <div key={coin.item.symbol} className="flex mt-5  justify-between">
              <div className="flex">
                <img
                  src={coin?.item?.small}
                  className="rounded-full"
                  height={26}
                  width={26}
                />
                <div className="pl-2 font-semibold">{coin?.item?.name}</div>
              </div>
              <div
                className={`${
                  coin?.item?.data.price_change_percentage_24h.usd >= 0
                    ? "bg-green-100"
                    : "bg-red-100"
                } flex px-2`}
              >
                <img
                  src={`${
                    coin?.item?.data.price_change_percentage_24h.usd >= 0
                      ? "/src/svjphoto/trendingCoinsGreenArrow.svg"
                      : "/src/svjphoto/trendingCoinsRedArrow.svg"
                  }`}
                  alt="SVG as an imag"
                  className={`${
                    coin?.item?.data.price_change_percentage_24h.usd < 0
                      ? "rotate-180 pl-2"
                      : "pr-2"
                  } `}
                />
                <div
                  className={`${
                    coin?.item?.data.price_change_percentage_24h.usd >= 0
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {" "}
                  {coin?.item?.data.price_change_percentage_24h.usd.toFixed(2)}%
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TrendingCoins;
