export const trendingCoinsTextandImage: {
  [key: string]: {
    name: string;
    img: string;
  };
} = {
  bitcoin: {
    name: "Etherium(ETH)",
    img: "/svjphoto/bitcoin.svg",
  },
  ethereum: {
    name: "Bitcoin(BTC)",
    img: "/svjphoto/etherium.svg",
  },
  solana: {
    name: "Polygon(MATIC)",
    img: "/svjphoto/polygon.svg",
  },
};

export const FundamentalLeftSideTable: {
  label: string;
  value: number | string;
}[] = [
  {
    label: "Bitcoin Price",
    value: "$16,815.45",
  },
  {
    label: "24h Low / 24h High",
    value: "$16,382.45 / $16,815.45",
  },
  {
    label: "7d Low / 7d High",
    value: "$16,482.45 / $16,715.45",
  },
  {
    label: "Trading Volume",
    value: "$23,249,202,782",
  },
  {
    label: "Market Cap Rank",
    value: "#1",
  },
];

export const FundamentalRightSideTable: {
  label: string;
  value: number | string;
  percentage?: number;
  description?: string;
}[] = [
  {
    label: "Market Cap",
    value: "$323,507,290,047",
  },
  {
    label: "Market Cap Dominance",
    value: "38.343%",
  },
  {
    label: "Volume / Market Cap",
    value: "0.0718",
  },
  {
    label: "All-Time High",
    percentage: -75.6,
    value: "$69,044.77",
    description: "Nov 10, 2021 (about 1 year)",
  },
  {
    label: "All Time Low",
    percentage: 24729.1,
    value: "$67,564.77",
    description: "Jul 06, 2013 (over 9 years)",
  },
];

export const SementicSliderData: {
  img: string;
  heading: string;
  paragraph: string;
  color: string;
}[] = [
  {
    img: "/svjphoto/lettericon.svg",
    heading:
      "Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.",
    color: "bg-sky-100",
  },
  {
    img: "/svjphoto/graphupicon.svg",
    heading:
      "Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.",
    color: "bg-green-100",
  },
];

export const AboutBitcoin =
  "Bitcoin’s price today is US$16,951.82, with a 24-hour trading volume of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its 7-day all-time low of $16,394.75. BTC has a circulating supply of 19.24 M BTC and a max supply of 21 M BTC.";

export const ExtraContentAboutBitcoin =
  "Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus.<br/></br> Ultricies urna volutpat pendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus.  Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas vitae pellentesque auctor amet. Nunc sagittis libero adipiscing cursus felis pellentesque interdum. Odio cursus phasellus velit in senectus enim dui. Turpis tristique placerat interdum sed volutpat. Id imperdiet magna eget eros donec cursus nunc. Mauris faucibus diam mi nunc praesent massa turpis a. Integer dignissim augue viverra nulla et quis lobortis phasellus. Integer pellentesque enim convallis ultricies at.</br></br>Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui";

export const BitcoinCalculate =
  "Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui";

export const TokenomicsText =
  "Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare vestibulum nunc dignissim vel consequat. Leo etiam nascetur bibendum amet enim sit eget leo amet. At metus orci augue fusce eleifend lectus eu fusce adipiscing. Volutpat ultrices nibh sodales massa habitasse urna felis augue. Gravida aliquam fermentum augue eu. Imperdiet bibendum amet aliquam donec. Eget justo dui metus odio rutrum. Vel ipsum eget in at curabitur sem posuere facilisis vitae. Sed lorem sit mauris id eget arcu ut. Vulputate ipsum aliquet odio nisi eu ac risus.";

export const TeamDetail =
  "Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium quam. Facilisis purus convallis quam augue.";

export const memberDetails: {
  img: string;
  name: string;
  profile: string;
  detail: string;
}[] = [
  {
    img: "/svjphoto/emp1.svg",
    name: "John Smith",
    profile: "Developer",
    detail:
      "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu",
  },
  {
    img: "/svjphoto/emp2.svg",
    name: "Elina Williams",
    profile: "Margeter",
    detail:
      "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu",
  },
  {
    img: "/svjphoto/emp3.svg",
    name: "John Smith",
    profile: "Supervisor",
    detail:
      "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu",
  },
];

export const Headings = [
  { id: 1, name: "Overview" },
  { id: 2, name: "Fundamentals" },
  { id: 3, name: "News Insights" },
  { id: 4, name: "Sentiments" },
  { id: 5, name: "Team" },
  { id: 6, name: "Technicals" },
  { id: 7, name: "Tokenomics" },
];
