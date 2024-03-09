//Note:- number in percentage and percentageNumber should be same

import CalculateTab from "./CalculateTab";
import Heading from "./Pure Component/Heading";
import SmallHeading from "./Pure Component/SmallHeading";
import {
  AboutBitcoin,
  BitcoinCalculate,
  ExtraContentAboutBitcoin,
} from "./helper";

const About = () => {
  return (
    <div className=" mt-5 bg-white p-7">
      <Heading headingText="About Bitcoin" />
      <SmallHeading headingText="What is Bitcoin" customClassName="mt-3" />
      <div className="text-gray-600 font-medium mt-3  ">{AboutBitcoin}</div>
      <div className="border border-b-gray-100 mt-3" />
      <SmallHeading
        headingText="Lorem ipsum dolor sit amet"
        customClassName="mt-3"
      />
      <div
        className="text-gray-600 font-medium mt-3"
        dangerouslySetInnerHTML={{ __html: ExtraContentAboutBitcoin }}
      />
      <div className="border border-b-gray-100 mt-3" />
      <Heading headingText="Already Holding Bitcoin?" customClassName="mt-5" />
      <div className="flex flex-wrap justify-center sm:justify-start">
        <CalculateTab
          imgSrc="../src/svjphoto/profit.svg"
          heading="Calculate your Profits"
          backgroundColor="from-teal-400 from-10% via-teal-500 via-50%  to-sky-700"
        />
        <CalculateTab
          imgSrc="../src/svjphoto/liability.svg"
          heading="Calculate your tax liability"
          backgroundColor="from-orange-500 from-10% via-orange-600 via-50%  to-red-800"
        />
      </div>
      <div className="border border-b-gray-100 mt-5" />
      <div className="text-gray-600 font-medium mt-3">{BitcoinCalculate}</div>
    </div>
  );
};

export default About;
