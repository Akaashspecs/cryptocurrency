import Navbar from "./Navbar";
import Content from "./Context";
import Suggestion from "./Suggestion";

function App() {
  return (
    <div className="bg-gray-200 h-screen overflow-scroll">
      <Navbar />
      <Content />
      <Suggestion />
    </div>
  );
}

export default App;
