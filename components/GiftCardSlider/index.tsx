"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

export default function GiftCardSlider() {
  const slides = [
    {
      image: "/images/Group 14(1).png",
    },
    {
      image: "/images/Group 14(1).png",
    },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center overflow-hidden">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        loop
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="w-full"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="w-full h-full flex-row-reverse justify-center rounded-xl flex overflow-hidden text-white px-2 lg:px-20"
              style={{
                background:
                  "linear-gradient(90deg, #705A85 7.37%, #1A151F 100%)",
              }}
            >
              {/* سمت چپ: تصویر */}
              <div className="w-1/2 flex items-center justify-center pointer-events-none relative z-10">
                <Image
                  src={slide.image}
                  width={700}
                  height={391}
                  alt="gift card"
                  className="object-contain md:object-cover scale-[1.5] h-full pointer-events-none"
                />
              </div>

              {/* سمت راست: متن و دکمه */}
              <div className="w-1/2  flex flex-col h-full justify-center gap-2 sm:gap-4 px-4 text-center">
                <h2 className="font-bold leading-tight text-[10px] sm:text-[14px]  md:text-[20px] lg:text-[24px]">
                  خرید انواع گیفت کارت، سریع، مطمئن و به صرفه!
                </h2>
                <p className="text-[8px] sm:text-[10px] md:text-[10px] lg:text-[15px] font-bold">
                  گیفت کارت های سرگرمی و استریم
                </p>
                <p className="text-[10px] sm:text-[12px] md:text[14px] lg:text-[20px] font-bold">
                  خرید کارت اعتباری ویزا کارت و مستر کارت
                </p>
                <div
                  className="mt-3 hover:opacity-75 transition-opacity px-5 py-3 md:w[200px] lg:w-[335px] mx-auto cursor-pointer text-white font-bold text-[8px] sm:text-[10px] md:text-[12px] lg:text-[16px] text-center rounded-[8px] "
                  style={{
                    background:
                      "radial-gradient(123.95% 319.27% at -29.81% -33.02%, #AB71F4 0%, #A56CEC 4.66%, #290951 13.14%, #613697 78.53%, #A56CED 83.94%, #290A51 95.83%)",
                    border: "1px solid",
                    borderImageSource:
                      "linear-gradient(107.33deg, rgba(122, 122, 122, 0.24) -41.01%, #2A0C4F 98.71%)",
                    boxShadow: "6px -5px 42px 0px #00000040",
                  }}
                >
                  همین حالا خرید کنید!
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination Style */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          direction: ltr;
          width: 8px;
          height: 8px;
          background-color: rgba(255, 255, 255, 0.5);
          border-radius: 50px;
          transition: all 0.3s ease;
          margin: 0 4px !important;
        }
        .swiper-pagination-bullet-active {
          width: 20px;
          height: 8px;
          background-color: white;
        }
      `}</style>
    </div>
  );
}
