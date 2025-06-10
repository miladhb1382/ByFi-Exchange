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
    <div className="flex items-center justify-between w-full h-[55px] pl-10 pr-12">
      {prices.map((item, i) => (
        <div
          key={i}
          className="text-white flex-nowrap text-lg flex flex-center gap-1 "
          style={{ direction: "ltr" }}
        >
          <span className="text-[14px] text-[#FFFFFFE5]">
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
