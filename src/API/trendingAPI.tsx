import axios from "axios";

const BASE_URL = "https://api.coingecko.com/api/v3";

export const BitcoinApi = () =>
  axios
    .get(
      `${BASE_URL}/simple/price?ids=bitcoin&vs_currencies=inr,usd&include_24hr_change=true`
    )
    .then((res) => res);

export const CoinApi = (cryptoName: string) =>
  axios.get(`${BASE_URL}/coins/${cryptoName}`).then((res) => res);

export const latestShowApi = () =>
  axios.get(`${BASE_URL}/search/trending`).then((res) => res);
