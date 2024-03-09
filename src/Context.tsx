import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

const Content = () => {
  return (
    <div className="p-8 sm:p-12 w-screen flex  flex-row">
      <LeftContent />
      <div className=" grow hidden 2xl:block">
        <RightContent />
      </div>
    </div>
  );
};

export default Content;
