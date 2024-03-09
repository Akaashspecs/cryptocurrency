import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

const Content = () => {
  return (
    <div className="p-8 sm:p-12 w-screen flex flex-col xl:flex-row">
      <RightContent />
      <div className="hidden xl:block ">
        <LeftContent />
      </div>
    </div>
  );
};

export default Content;
