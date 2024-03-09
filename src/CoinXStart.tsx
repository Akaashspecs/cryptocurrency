const CoinXStart = () => {
  return (
    <div className="w-[426px] h-[515px] bg-blue-700 rounded-md py-9 flex flex-col justify-between items-center">
      <p className="text-2xl font-semibold text-white w-64  text-center">
        Get Started with KoinX for FREE
      </p>
      <p className=" text-white w-[350px]  text-center">
        With our range of features that you can equip for free, KoinX allows you
        to be more educated and aware of your tax reports.
      </p>
      <img src="/svjphoto/coinXstartLogo.svg" alt="SVG as an image" />
      <button className="bg-white rounded-md  font-medium h-[48px] w-[237px] flex justify-center items-center">
        Get Started for FREE{" "}
        <img src="/svjphoto/rightarrow.svg" alt="SVG as an image" />
      </button>
    </div>
  );
};

export default CoinXStart;
