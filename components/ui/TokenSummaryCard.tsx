import { PriceSparkline } from "../PriceSparkline/PriceSparklineWrapper";
import IconSet from "./iconSet";

interface TokenData {
  name: string;
  underPrice: string;
  priceConverted: string;
  priceChangePercent: string;
  perHoures: string;
  volume: string;
  tokenImageAddress: string;
}

const TokenSummaryCard = (item: TokenData) => {
  return (
    <div className="flex flex-row-reverse justify-between flex-nowrap bg-[#080C23] rounded-[12px] py-[28px] px-[14px] w-[200px] h-[245px]">
      <div
        className="flex gap-3 flex-col justify-between flex-nowrap"
        style={{ direction: "ltr" }}
      >
        <div className="flex items-center flex-col">
          <span className="font-semibold text-[18px] text-nowrap text-white mr-auto">
            {item.name}/{item.underPrice}
          </span>
          <span className="text-[15px] text-white/90 mr-auto">
            {item.underPrice} {item.priceConverted}
          </span>
          <span className="text-[14px] text-[#098C26] mr-auto">
            {item.priceChangePercent}
          </span>
        </div>
        <div>
          <PriceSparkline />
        </div>
        <div className="text-[12px] flex flex-col text-[#696F8C]">
          <span>{item.perHoures} VoL</span>
          <span>{item.volume}</span>
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex-center">
          <IconSet
            iconAddress={item.tokenImageAddress}
            width={50}
            height={50}
          />
        </div>
      </div>
    </div>
  );
};

export default TokenSummaryCard;
