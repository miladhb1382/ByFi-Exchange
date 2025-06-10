import TokenSummaryCard from "../ui/TokenSummaryCard";

const PriceOverviewSection = () => {
  const currentPrices = [
    {
      name: "BTC",
      underPrice: "IRT",
      priceConverted: "8640000000",
      tokenImageAddress: "/images/Bitcoin_perspective_matte.png",
      priceChangePercent: "+2.05",
      priceChart: [],
      perHoures: "24H",
      volume: "12 897 432,26",
    },
    {
      name: "BTC",
      underPrice: "IRT",
      priceConverted: "8640000000",
      tokenImageAddress: "/images/Bitcoin_perspective_matte.png",
      priceChangePercent: "+2.05",
      priceChart: [],
      perHoures: "24H",
      volume: "12 897 432,26",
    },
    {
      name: "BTC",
      underPrice: "IRT",
      priceConverted: "8640000000",
      tokenImageAddress: "/images/Bitcoin_perspective_matte.png",
      priceChangePercent: "+2.05",
      priceChart: [],
      perHoures: "24H",
      volume: "12 897 432,26",
    },
    {
      name: "BTC",
      underPrice: "IRT",
      priceConverted: "8640000000",
      tokenImageAddress: "/images/Bitcoin_perspective_matte.png",
      priceChangePercent: "+2.05",
      priceChart: [],
      perHoures: "24H",
      volume: "12 897 432,26",
    },
    {
      name: "BTC",
      underPrice: "IRT",
      priceConverted: "8640000000",
      tokenImageAddress: "/images/Bitcoin_perspective_matte.png",
      priceChangePercent: "+2.05",
      priceChart: [],
      perHoures: "24H",
      volume: "12 897 432,26",
    },
    {
      name: "BTC",
      underPrice: "IRT",
      priceConverted: "8640000000",
      tokenImageAddress: "/images/Bitcoin_perspective_matte.png",
      priceChangePercent: "+2.05",
      priceChart: [],
      perHoures: "24H",
      volume: "12 897 432,26",
    },
  ];
  return (
    <div
      style={{ scrollbarWidth: "none" }}
      className="md:h-[297px] flex items-center gap-[12px] overflow-x-auto rounded-md shadow-md mx-2 md:mx-14 sm:pr-8 scrollbar-hide"
    >
      {currentPrices.map((item, i) => (
        <TokenSummaryCard key={i} {...item} />
      ))}
    </div>
  );
};

export default PriceOverviewSection;
