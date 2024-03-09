const Navbar = () => {
  return (
    <div className="bg-white w-full h-20 drop-shadow-md   flex justify-between items-center ">
      <div className="ml-16">
        <img src="/src/svjphoto/logo.svg" alt="SVG as an image" />
      </div>
      <div className="mr-16 hidden justify-between w-3/6 lg:w-5/12   sm:flex ">
        {/* {process.env.REACT_APP_TRENDING_COIN} */}
        <b>Crypto Taxes</b>
        <b>Free Tools</b>
        <b>Resource Center</b>
        <button className="bg-gradient-to-r from-blue-700 to-blue-800 px-2 py-1 rounded-md text-white font-medium">
          Get Started
        </button>
      </div>
      <div className="sm:hidden block mr-5">
        <img src="/src/svjphoto/dropdown.svg" alt="SVG as an image" />
      </div>
    </div>
  );
};

export default Navbar;
