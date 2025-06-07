import PaginationButtons from "@/components/Pagination";

import CryptoTable from "@/components/CryptoTable";
import CategoryFilter from "@/components/CategoryFilter";
import CurrencyToggle from "@/components/CurrencyToggle";
import IconSet from "@/components/ui/iconSet";
import Logo from "@/components/ui/Logo";
import Image from "next/image";
import { DOWNLOAD_APP_ICONS } from "@/constants/downloadApplication";
import { Support_Card } from "@/constants/Support";
import ShortPricesInfo from "@/components/ShortPricesInfo";

import GiftCardSlider from "@/components/GiftCardSlider";
import PriceOverviewSection from "@/components/PriceOverviewSection";

export default function Home() {
  return (
    <div className="container flex flex-col gap-10 px-4 pt-6">
      {/* modal for authication */}
      {/* Header Section */}
      <div className="flex flex-col gap-4">
        <ShortPricesInfo />
        <div className="flex mx-12">
          <div className="custom-line mx-auto " />
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col  gap-6 w-full ">
        <h2 className="text-right  text-nowrap text-[24px] font-semibold text-white pr-16">
          قیمت لحظه ای رمزارزها
        </h2>

        <PriceOverviewSection />

        <div className="flex mx-12 ">
          <div className="custom-line mx-auto max-w-[1340px]" />
        </div>

        <div className="flex-center h-[291px] flex mx-12 ">
          <GiftCardSlider />
        </div>

        <div className="filter-section mx-12">
          <div className="category-filters">
            <CategoryFilter icon="/icons/mdi_fire.png" text="برترین رمزارزها" />
            <CategoryFilter icon="/icons/layer.png" text="دسته‌بندی‌ها" />
          </div>

          <CurrencyToggle />
        </div>

        <div className="flex justify-center items-center w-full ">
          <div className="w-full  flex flex-col items-center rounded-md shadow-md px-1">
            {/* خط بالا */}
            <div className="custom-line mx-auto max-w-[1340px]" />
            <CryptoTable />

            {/* خط پایین */}

            <div className="custom-line mx-auto max-w-[1340px]" />

            {/* Pagination */}
            <PaginationButtons />
          </div>
        </div>
        <div
          className="flex  h-[370px] justify-evenly mx-1.5 flex-row items-center gap-8 px-12"
          style={{
            background:
              "linear-gradient(90deg, rgba(58,111,248,0.3) 0%, rgba(153,153,153,0.3) 96.15%)",
          }}
        >
          {/* متن و توضیحات */}
          <div className="flex flex-col gap-6  max-w-lg text-right">
            <h2 className="text-3xl font-semibold pr-2 text-[20px] h-[30px] overflow-hidden p-0 m-0 text-white flex items-center gap-2">
              اپلیکیشن <Logo className="w-[130px]  mr-[-30px]" altText="byfi" />
            </h2>

            <div className=" flex flex-col gap-1 text-right">
              <p className="text-[16px] font-bold text-gray-300 leading-relaxed">
                پلتفرمی امن و قابل اعتماد برای خرید و فروش رمزارزها
              </p>
              <span className="text-base text-[#B7BDC6] leading-relaxed">
                اپلیکیشن بایفای را نصب کنید و رمزارزهای مورد نظرتان را خرید و
                فروش کنید.
              </span>
            </div>

            {/* آیکن‌ها */}
            <div className="flex flex-row-reverse justify-center gap-x-8 mt-4 ">
              {DOWNLOAD_APP_ICONS.map((item) => (
                <IconSet
                  key={item.id}
                  iconAddress={item.iconAdress}
                  className="flex-center mx-4 background-center cursor-pointer"
                  width={item.width}
                  height={item.height}
                />
              ))}
            </div>
          </div>

          {/* بنر تصویر */}
          <div className="shrink-0 flex-center h-[370px] mt-[180px]">
            <Image
              src={"/images/appbanner.png"}
              height={370}
              width={504}
              alt="اپلیکیشن بایفای - خرید و فروش امن رمزارزها"
              className="rounded-lg object-cover "
            />
          </div>
        </div>
        <div
          className="flex flex-wrap justify-center items-center mx-1.5 gap-x-20 mt-2 backdrop-blur-[10px] h-[323px]"
          style={{
            background:
              "linear-gradient(90deg, rgba(255, 255, 255, 0.13) 0%, rgba(153, 153, 153, 0.13) 100%)",
          }}
        >
          {Support_Card.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center justify-evenly w-[341px] h-[280px] p-4 text-center"
            >
              <div className="flex justify-start flex-col h-35">
                <h3 className="text-xl text-nowrap text-[28px] font-[700] text-white">
                  {item.title}
                </h3>
                <p className="text-[20px] text-center mt-6 text-[#FFF2F280] font-bold leading-snug">
                  {item.description}
                </p>
              </div>
              <div className="cursor-pointer mt-[45px] font-bold w-[178px] px-4 py-2 bg-blue-500 text-white rounded-[8px] hover:bg-blue-600 transition">
                {item.buttonText}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
