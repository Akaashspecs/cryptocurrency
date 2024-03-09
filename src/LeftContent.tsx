import About from "./About";
import Graph from "./Graph";
import Header from "./Header";
import Performance from "./Performance";
import Sentiment from "./Sentiment";
import Team from "./Team";
import TokEnomics from "./Tokenomics";

const LeftContent = () => {
  return (
    <div className=" w-full pr-0 sm:pr-5 grow">
      <Graph />
      <Header />
      <Performance />
      <Sentiment />
      <About />
      <TokEnomics />
      <Team />
    </div>
  );
};

export default LeftContent;
