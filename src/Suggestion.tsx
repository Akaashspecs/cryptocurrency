import { useEffect, useState } from "react";
import { latestShowApi } from "./API/trendingAPI";
import SuggestionList from "./SuggestionList";
import LeftContent from "./LeftContent";

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

  console.log("sdsdsd", cryptoCoins);

  return (
    <div>
      <div className="bg-white p-12 relative ">
        <SuggestionList heading="You May Also Like" cryptoCoins={cryptoCoins} />
        <SuggestionList heading="Trending Coins" cryptoCoins={cryptoCoins} />
      </div>
      <div className=" xl:hidden flex justify-center my-3 ">
        <LeftContent />
      </div>
    </div>
  );
};

export default Suggestion;
