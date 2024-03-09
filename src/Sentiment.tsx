import AnalystEstimate from "./AnalystEstimate";
import KeyEvent from "./KeyEvents";
import Heading from "./Pure Component/Heading";

const Sentiment = () => {
  return (
    <div className=" bg-white h-[632px] rounded mt-5 p-7 w-auto relative">
      <Heading headingText="Sentiment" />

      <KeyEvent />
      <AnalystEstimate />
    </div>
  );
};

export default Sentiment;
