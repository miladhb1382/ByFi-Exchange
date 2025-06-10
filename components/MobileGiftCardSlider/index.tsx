"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  qrCode: string;
}

const MobileGiftCardSlider = () => {
  const products: Product[] = [
    {
      id: "1",
      name: "کارت هدیه طلایی",
      price: "129",
      image: "/images/background.png",
      qrCode: "/images/QR Code.png",
    },
    {
      id: "2",
      name: "کارت هدیه نقره‌ای",
      price: "149",
      image: "/images/background.png",
      qrCode: "/images/QR Code.png",
    },
    {
      id: "3",
      name: "کارت هدیه الماس",
      price: "199",
      image: "/images/background.png",
      qrCode: "/images/QR Code.png",
    },
  ];

  return (
    <div className="relative w-full max-w-5xl mx-auto px-4 py-1">
      <Swiper
        grabCursor={true}
        spaceBetween={16}
        slidesPerView={1.2}
        touchRatio={1}
        centeredSlides={false}
        breakpoints={{
          640: { slidesPerView: 2.2, spaceBetween: 24 },
          1024: { slidesPerView: 3, spaceBetween: 32 },
        }}
        className="mySwiper"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="relative rounded-xl overflow-hidden shadow-lg bg-white">
              {/* Product Image */}
              <div className="relative aspect-[3/2] w-full">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Bottom Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <div className="flex justify-between items-end">
                  <div className="text-white">
                    <p className="text-sm font-medium">{product.name}</p>
                    <p className="text-xl font-bold">${product.price}</p>
                  </div>
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-white p-1 rounded flex items-center justify-center">
                    <div className="relative w-full h-full">
                      <Image
                        src={product.qrCode}
                        alt="QR Code"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MobileGiftCardSlider;
