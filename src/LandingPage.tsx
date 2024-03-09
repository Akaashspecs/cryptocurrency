import Content from "./Context";
import Navbar from "./Navbar";
import Suggestion from "./Suggestion";

const LandingPage = () => {
  return (
    <div className="bg-gray-200 h-screen overflow-scroll">
      <Navbar />
      <Content />
      <Suggestion />
    </div>
  );
};

export default LandingPage;
