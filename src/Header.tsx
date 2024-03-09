import { useState } from "react";
import "./Header.css";
import { Headings } from "./helper";

const Header = () => {
  const [selectedId, setSelectedId] = useState<number>(1);

  const handleHeadingClick = (id: number) => {
    setSelectedId(id);
  };

  return (
    <div className="no-scroll1 flex mt-7 border border-b-gray-400 w-auto overflow-x-scroll scroll scroll-smooth whitespace-nowrap">
      {Headings.map((item) => (
        <div onClick={() => handleHeadingClick(item.id)}>
          {selectedId === item.id && (
            <div className=" border border-b-2 border-b-blue-600 text-blue-600 px-6 font-semibold text-lg py-2">
              {item.name}
            </div>
          )}
          {selectedId !== item.id && (
            <div className="text-slate-600 border px-6 font-semibold text-lg py-2">
              {item.name}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Header;
