const ShortPricesInfo = () => {
  const prices = [
    {
      name: "BTC",
      underPrice: "USDT",
      priceValue: "30,113.80",
      pricePercent: "+2.76%",
    },
    {
      name: "BTC",
      underPrice: "USDT",
      priceValue: "30,113.80",
      pricePercent: "+2.76%",
    },
    {
      name: "BTC",
      underPrice: "USDT",
      priceValue: "30,113.80",
      pricePercent: "+2.76%",
    },
    {
      name: "BTC",
      underPrice: "USDT",
      priceValue: "30,113.80",
      pricePercent: "+2.76%",
    },
    {
      name: "BTC",
      underPrice: "USDT",
      priceValue: "30,113.80",
      pricePercent: "+2.76%",
    },
    {
      name: "BTC",
      underPrice: "USDT",
      priceValue: "30,113.80",
      pricePercent: "+2.76%",
    },
  ];
  return (
    <div
      style={{ scrollbarWidth: "none" }}
      className="flex items-center overflow-scroll  justify-center gap-8 w-[1280px] h-[55px] pl-10 pr-12 "
    >
      {prices.map((item, i) => (
        <div
          key={i}
          className="text-white flex-nowrap  text-lg flex flex-center gap-1 "
          style={{ direction: "rtl" }}
        >
          <span className="text-[14px] text-nowrap text-[#FFFFFFE5]">
            {item.name}/{item.underPrice}
          </span>
          <span className="text-[14px] text-[#31C451]">{item.priceValue}</span>
          <span className="text-[14px] text-[#31C451]">
            {item.pricePercent}
          </span>
        </div>
      ))}
    </div>
  );
};
export default ShortPricesInfo;
