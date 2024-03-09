import { useEffect, useState } from "react";
import { latestShowApi } from "./API/trendingAPI";
import SuggestionList from "./SuggestionList";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

const Suggestion = () => {
  const [cryptoCoins, setCryptoCoins] = useState<
    {
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
    }[]
  >([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await latestShowApi();
        setCryptoCoins(response.data.coins);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="bg-white p-12 relative ">
        <SuggestionList heading="You May Also Like" cryptoCoins={cryptoCoins} />
        <SuggestionList heading="Trending Coins" cryptoCoins={cryptoCoins} />
      </div>
      <div className=" 2xl:hidden flex justify-center my-3 ">
        <RightContent />
      </div>
    </div>
  );
};

export default Suggestion;
