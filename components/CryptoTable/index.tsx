import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import IconSet from "../ui/iconSet";
import { formatToDollar } from "@/utils/formatToDollar";

import CirculatingProgress from "./CirculatingProgress";
import { PriceSparkline } from "../PriceSparkline/PriceSparklineWrapper";

const CryptoTable = () => {
  const columns = [
    "قیمت (دلار)",
    "1h %",
    "24h %",
    "7d %",
    "ارزش بازار",
    "حجم معاملات",
    "عرضه در گردش",
  ];

  const cryptoData = [
    {
      name: "بیت‌کوین",
      imageAddress: "./images/BTCIcon.png",
      shortName: "BTC",
      currentPrice: "67,412.65",
      hourChange: "+0.8%",
      dayChange: "+3.1%",
      weekChange: "+5.6%",
      marketCap: "1454781980877",
      volumePrice: "1054781980877",
      volumeCount: "682,000",
      circulatingSupply: "19.84M",
      circulatingSupplyPercent: "70",
      pricechart: [
        { price: 13 },
        { price: 17 },
        { price: 28 },
        { price: 9 },
        { price: 25 },
        { price: 33 },
        { price: 27 },
        { price: 46 },
        { price: 48 },
        { price: 49 },
        { price: 50 },
        { price: 48 },
        { price: 51 },
        { price: 53 },
        { price: 52 },
        { price: 55 },
        { price: 57 },
        { price: 54 },
        { price: 56 },
        { price: 58 },
      ],
    },
    {
      name: "اتریوم",
      imageAddress: "./images/DogIcon.png",
      shortName: "ETH",
      currentPrice: "3,412.12",
      hourChange: "-0.5%",
      dayChange: "+1.9%",
      weekChange: "+4.2%",
      marketCap: "584781980877",
      volumePrice: "504781980877",
      volumeCount: "312,210",
      circulatingSupply: "120.5M",
      circulatingSupplyPercent: "88",
      pricechart: [
        { price: 2100 },
        { price: 2420 },
        { price: 3480 },
        { price: 3250 },
        { price: 3280 },
        { price: 3320 },
        { price: 3470 },
        { price: 5000 },
        { price: 5450 },
        { price: 3420 },
        { price: 3460 },
        { price: 3490 },
        { price: 3500 },
        { price: 3540 },
        { price: 3560 },
        { price: 3510 },
        { price: 3550 },
        { price: 3600 },
        { price: 3620 },
        { price: 3412 },
      ],
    },
    {
      name: "کاردانو",
      imageAddress: "./images/BTCIcon.png",
      shortName: "ADA",
      currentPrice: "1.12",
      hourChange: "+0.3%",
      dayChange: "+0.7%",
      weekChange: "+2.0%",
      marketCap: "14781980877",
      volumePrice: "10478198087",
      volumeCount: "182,431",
      circulatingSupply: "34.6B",
      circulatingSupplyPercent: "75",
      pricechart: [
        { price: 0.98 },
        { price: 1.0 },
        { price: 1.02 },
        { price: 1.05 },
        { price: 3.06 },
        { price: 4.08 },
        { price: 4.1 },
        { price: 5.11 },
        { price: 11.13 },
        { price: 1.14 },
        { price: 1.12 },
        { price: 1.15 },
        { price: 1.16 },
        { price: 1.18 },
        { price: 1.17 },
        { price: 1.16 },
        { price: 1.14 },
        { price: 1.12 },
        { price: 1.13 },
        { price: 1.12 },
      ],
    },
    {
      name: "سولانا",
      imageAddress: "./images/DogIcon.png",
      shortName: "SOL",
      currentPrice: "142.76",
      hourChange: "+1.1%",
      dayChange: "+4.4%",
      weekChange: "+9.2%",
      marketCap: "47819808777",
      volumePrice: "37819808777",
      volumeCount: "202,789",
      circulatingSupply: "428M",
      circulatingSupplyPercent: "62",
      pricechart: [
        { price: 125 },
        { price: 128 },
        { price: 130 },
        { price: 132 },
        { price: 134 },
        { price: 137 },
        { price: 140 },
        { price: 142 },
        { price: 144 },
        { price: 143 },
        { price: 146 },
        { price: 148 },
        { price: 150 },
        { price: 147 },
        { price: 145 },
        { price: 143 },
        { price: 141 },
        { price: 140 },
        { price: 142 },
        { price: 142.76 },
      ],
    },
    {
      name: "دوج‌کوین",
      imageAddress: "./images/DogIcon.png",
      shortName: "DOGE",
      currentPrice: "0.32",
      hourChange: "-0.2%",
      dayChange: "+0.5%",
      weekChange: "+1.1%",
      marketCap: "9781980877",
      volumePrice: "8781980877",
      volumeCount: "722,643",
      circulatingSupply: "132B",
      circulatingSupplyPercent: "93",
      pricechart: [
        { price: 0.25 },
        { price: 0.27 },
        { price: 0.28 },
        { price: 0.29 },
        { price: 0.3 },
        { price: 0.31 },
        { price: 0.32 },
        { price: 0.33 },
        { price: 0.34 },
        { price: 0.35 },
        { price: 0.34 },
        { price: 0.36 },
        { price: 0.35 },
        { price: 0.34 },
        { price: 0.33 },
        { price: 0.32 },
        { price: 0.31 },
        { price: 0.3 },
        { price: 0.31 },
        { price: 0.32 },
      ],
    },
  ];

  const SortIcon = () => (
    <IconSet width={20} height={20} iconAddress="/icons/CaretUpDown.png" />
  );

  return (
    <Table className="max-w-[1340px] h-[420px] mx-auto">
      <TableHeader className="h-[62px] hidden xl:flex items-center border-b-[1px] mb-4 border-[#3a6ff833]">
        {/* items-center برای وسط‌چین عمودی متن‌ها */}
        <TableRow className="text-white border-none text-[16px] font-bold leading-[100%]  grid grid-cols-9  w-full hover:bg-transparent hover:text-inherit">
          <TableHead className="col-span-1 text-white flex items-center flex-nowarap justify-center">
            نام ارزدیجیتال
          </TableHead>
          {columns.map((col, idx) => (
            <TableHead
              key={idx}
              className=" col-span-1 text-white flex items-center flex-nowarap justify-center"
            >
              <div className="flex-center cursor-pointer">
                {col} <SortIcon />
              </div>
            </TableHead>
          ))}

          <TableHead className="col-span-1 text-white text-[16px] font-[700]  flex items-center justify-center">
            نمودار قیمت
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="space-y-2 h-auto flex flex-col gap-2 overflow-hidden">
        {cryptoData.map((crypto, index) => (
          <TableRow
            key={index}
            className=" hover:text-white mr-4 mb-4 xl:m-0 text-white border-none rounded-[15px] h-[71px] text-[14px] bg-[#18181C] xl:bg-[#10152B] grid grid-cols-3 xl:grid-cols-9"
          >
            {/* ستون تصویر و نام - در موبایل سمت چپ چپ */}
            <TableCell className="flex-center col-span-1 h-[71px]  order-4 xl:order-1">
              <div
                className="flex items-center mr-auto xl:mr-1 xl:ml-auto gap-2 flex-row"
                style={{ direction: "rtl" }}
              >
                <div className="flex justify-center items-center order-1 xl:order-none">
                  <IconSet
                    iconAddress={crypto.imageAddress}
                    width={40}
                    height={40}
                    className="w-8 h-8 lg:w-10 lg:h-10"
                  />
                </div>
                <div className="flex flex-col justify-between gap-1 lg:gap-2">
                  <div className="text-nowrap text-[14px] lg:text-[16px] font-normal leading-none tracking-[-0.02em] text-left">
                    {crypto.name}
                  </div>
                  <div className="text-[#575B66] text-[10px] lg:text-xs leading-[21px] tracking-[-0.02em] text-left">
                    {crypto.shortName}
                  </div>
                </div>
              </div>
            </TableCell>

            {/* ستون قیمت فعلی - در موبایل سمت راست راست */}
            <TableCell className="col-span-1 flex  flex-col justify-center items-start   items-center font-readex text-base text-white font-medium order-1 xl:order-4 pr-4">
              <div className="text-[14px] lg:text-base">
                {formatToDollar({ amount: crypto.currentPrice })}
              </div>
              <div
                className="xl:hidden flex items-center justify-center text-red-500 order-4"
                style={{ direction: "ltr" }}
              >
                {crypto.hourChange}
              </div>
            </TableCell>

            {/* ستون نمودار قیمت - در موبایل وسط */}
            <TableCell className="col-span-1 flex items-center justify-center order-2 xl:order-9">
              <PriceSparkline data={crypto.pricechart} />
            </TableCell>

            {/* بقیه ستون‌ها (مخفی در موبایل) */}
            <TableCell
              className="hidden xl:flex items-center justify-center text-red-500 order-4"
              style={{ direction: "ltr" }}
            >
              {crypto.hourChange}
            </TableCell>

            <TableCell
              className="hidden xl:flex items-center justify-center text-green-500 order-5"
              style={{ direction: "ltr" }}
            >
              {crypto.dayChange}
            </TableCell>

            <TableCell className="hidden xl:flex items-center justify-center order-6">
              {crypto.marketCap}
            </TableCell>

            <TableCell className="hidden xl:flex items-center justify-center order-7">
              {formatToDollar({ amount: crypto.marketCap })}
            </TableCell>

            <TableCell className="hidden xl:flex items-center justify-center order-8">
              <div className="flex items-center gap-1 flex-col">
                <div>{formatToDollar({ amount: crypto.volumePrice })}</div>
                <div className="flex flex-row-reverse gap-1 items-center leading-none">
                  <div className="text-sm text-[#575B66] tracking-[-0.02em]">
                    {crypto.volumeCount}
                  </div>
                  <div className="text-[#575B66] text-xs tracking-[-0.02em]">
                    {crypto.shortName}
                  </div>
                </div>
              </div>
            </TableCell>

            <TableCell className="hidden xl:flex items-center justify-center order-9">
              <div className="flex items-center gap-3 flex-col">
                <div className="font-readex pt-1 text-base text-white font-medium">
                  {crypto.circulatingSupply} {crypto.shortName}
                </div>
                <CirculatingProgress
                  percent={crypto.circulatingSupplyPercent}
                />
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
export default CryptoTable;
