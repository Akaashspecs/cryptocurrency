import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { SementicSliderData } from "./helper";
import SmallHeading from "./Pure Component/SmallHeading";
import React from "react";

const KeyEvent: React.FC = () => {
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider!.scrollLeft = slider!.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider!.scrollLeft = slider!.scrollLeft + 500;
  };

  return (
    <div className="mt-4">
      <SmallHeading headingText="Key Events" customClassName="mt-4" />
      <div className="relative mt-4">
        <div
          id="slider"
          className=" overflow-x-hidden   scroll whitespace-nowrap scroll-smooth scrollbar-hide "
        >
          <MdChevronLeft
            className="opacity-50 cursor-pointer hover:opacity-100 absolute left-0 top-1/3 "
            onClick={slideLeft}
            size={40}
          />
          <div className="  flex w-max    ">
            {SementicSliderData.map((item) => (
              <div
                className={`min-w-[456px] max-w-[456px] h-[204px] flex items-start rounded-md mr-4 p-5 ${item.color}`}
              >
                <img
                  className=" inline-block  cursor-pointer hover:scale-105 ease-in-out duration-300 mt-2"
                  src={item.img}
                  alt="/"
                  height={45}
                  width={45}
                />
                <div className="text-wrap ml-2">
                  <div className="font-semibold">{item.heading}</div>
                  <div>{item.paragraph}</div>
                </div>
              </div>
            ))}
          </div>
          <MdChevronRight
            className="opacity-50 cursor-pointer hover:opacity-100 absolute right-0 top-1/3"
            onClick={slideRight}
            size={40}
          />
        </div>
      </div>
    </div>
  );
};

export default KeyEvent;
