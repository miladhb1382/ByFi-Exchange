import PaginationButtons from "@/components/Pagination";

import CryptoTable from "@/components/CryptoTable";
import CategoryFilter from "@/app/(home)/components/CategoryFilter";
import CurrencyToggle from "@/app/(home)/components/CurrencyToggle";
import IconSet from "@/components/ui/iconSet";
import Logo from "@/components/ui/Logo";
import Image from "next/image";
import { DOWNLOAD_APP_ICONS } from "@/constants/downloadApplication";
import { Support_Card } from "@/constants/Support";
import ShortPricesInfo from "@/app/(home)/components/ShortPricesInfo";

import GiftCardSlider from "@/components/GiftCardSlider";
import PriceOverviewSection from "@/components/PriceOverviewSection";
import { ChevronLeftIcon } from "lucide-react";
import MobileGiftCardSlider from "@/components/MobileGiftCardSlider";

export default function Home() {
  return (
    <div className="container flex flex-col gap-10  px-0 mx-auto overflow-x-hidden md:px-4 pt-6 ">
      {/* modal for authication */}
      {/* Header Section */}
      <div className="flex flex-col gap-4 ">
        <div
          className="flex overflow-scroll "
          style={{ scrollbarWidth: "none" }}
        >
          <ShortPricesInfo />
        </div>

        <div className="flex lg:mx-12">
          <div className="custom-line mx-auto w-full " />
        </div>
      </div>

      {/* Content Section */}
      <div className="flex sm:hidden justify-center items-center xl:order-none h-auto sm:h-[250px] md:h-[291px]  mx-2 sm:mx-12 ">
        <MobileGiftCardSlider />
      </div>
      <div className="flex flex-col gap-2 md:gap-6 w-full ">
        <h2 className="hidden xl:flex text-right  text-nowrap text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] font-semibold text-white pr-16">
          قیمت لحظه ای رمزارزها
        </h2>
        <div className="flex xl:hidden justify-between  items-center w-full px-4">
          <h2 className=" py-4  text-right ml-auto text-[16px] font-bold">
            واچ لیست
          </h2>
          <ChevronLeftIcon width={35} height={25} />
        </div>
        <PriceOverviewSection />

        <div className="flex  mx-2 md:mx-12 ">
          <div className="hidden sm:custom-line  mx-auto max-w-[1340px]" />
        </div>

        <div className="hidden sm:flex justify-center items-center xl:order-none h-auto sm:h-[250px] md:h-[291px]  mx-2 sm:mx-12 ">
          <GiftCardSlider />
        </div>

        <div className="hidden filter-section  xl:flex mx-2 md:mx-12">
          <div className="category-filters flex">
            <CategoryFilter icon="/icons/mdi_fire.png" text="برترین رمزارزها" />
            <CategoryFilter icon="/icons/layer.png" text="دسته‌بندی‌ها" />
          </div>

          <CurrencyToggle />
        </div>

        <div className="flex justify-center items-center w-full ">
          <div className="w-full  flex flex-col items-center rounded-md shadow-md px-1">
            {/* خط بالا */}
            <div className="custom-line mx-auto max-w-[1340px]" />
            <div className="flex xl:hidden justify-between items-center w-full px-4">
              <h2 className=" py-8  text-right ml-auto text-[16px] font-bold">
                قیمت لحظه ای رمز ارزها
              </h2>
              <ChevronLeftIcon width={35} height={25} />
            </div>

            <CryptoTable />

            {/* خط پایین */}

            <div className="custom-line mx-auto max-w-[1340px]" />

            {/* Pagination */}
            <PaginationButtons />
          </div>
        </div>
        <div
          className="flex flex-col-reverse lg:flex-row h-auto lg:h-[370px] justify-between sm:justify-evenly mx-1.5  items-center gap-2 lg:gap-8 px-4 sm:px-12"
          style={{
            background:
              "linear-gradient(90deg, rgba(58,111,248,0.3) 0%, rgba(153,153,153,0.3) 96.15%)",
          }}
        >
          {/* متن و توضیحات */}
          <div className="flex flex-col gap-6  max-w-lg text-right">
            <h2 className="text-2xl sm:text-3xl font-semibold sm:pr-2 text-[20px] h-[30px] overflow-hidden p-0 m-0 text-white flex items-center gap-2">
              اپلیکیشن{" "}
              <Logo
                className="w-[130px] object-cover  mr-[-30px]"
                altText="byfi"
              />
            </h2>

            <div className=" flex flex-col gap-1 text-right">
              <p className="text-[14px] sm:text-[16px] font-bold text-gray-300 leading-relaxed">
                پلتفرمی امن و قابل اعتماد برای خرید و فروش رمزارزها
              </p>
              <span className="text-[12px] sm:text-base text-[#B7BDC6] leading-relaxed">
                اپلیکیشن بایفای را نصب کنید و رمزارزهای مورد نظرتان را خرید و
                فروش کنید.
              </span>
            </div>

            {/* آیکن‌ها */}
            <div className="flex flex-row-reverse flex-wrap justify-center gap-x-1 sm:gap-x-8 mb-4 sm:mt-4 ">
              {DOWNLOAD_APP_ICONS.map((item) => (
                <IconSet
                  key={item.id}
                  iconAddress={item.iconAdress}
                  className="flex-center mx-2 sm:mx-4 background-center cursor-pointer"
                  width={item.width}
                  height={item.height}
                />
              ))}
            </div>
          </div>

          {/* بنر تصویر */}
          <div className="shrink-0 flex-center  mt-[50px] xl:mt-[180px]">
            <Image
              src={"/images/appbanner.png"}
              height={370}
              width={504}
              alt="اپلیکیشن بایفای - خرید و فروش امن رمزارزها"
              className="rounded-lg object-contain scale-[2.1] xl:scale-[1] mt-[100px] xl:mt-0 xl:object-cover  w-full h-[200px] xl:h-[500px] xl:w-[504px]"
            />
          </div>
        </div>
        <div
          className="flex flex-wrap flex-col sm:flex-row justify-center items-center mx-1.5 gap-x-20 mt-2 backdrop-blur-[10px]"
          style={{
            background:
              "linear-gradient(90deg, rgba(255, 255, 255, 0.13) 0%, rgba(153, 153, 153, 0.13) 100%)",
          }}
        >
          {Support_Card.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center justify-evenly w-[341px] sm:h-[280px] p-4 text-center"
            >
              <div className="flex justify-start flex-col h-35">
                <h3 className="text-xl text-nowrap text-[20px] sm:text-[22px] lg:text-[24px] xl:text-[28px] font-[700] text-white">
                  {item.title}
                </h3>
                <p className="text-[14px] sm:text-[16px] lg:text-[18px] xl:text-[20px] text-center mt-6 text-[#FFF2F280] font-bold leading-snug">
                  {item.description}
                </p>
              </div>
              <div className="cursor-pointer mt-2 md:mt-[45px] font-bold w-[178px] px-4 py-2 bg-blue-500 text-white rounded-[8px] hover:bg-blue-600 transition">
                {item.buttonText}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
