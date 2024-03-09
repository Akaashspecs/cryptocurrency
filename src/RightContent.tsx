import Performance from "./Performance";
import Sentiment from "./Sentiment";
import About from "./About";
import TokEnomics from "./Tokenomics";
import Team from "./Team";
import Graph from "./Graph";
import Header from "./Header";

const RightContent = () => {
  return (
    <div className=" max-w-[1400px] pr-0 sm:pr-5 grow-0">
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

export default RightContent;
