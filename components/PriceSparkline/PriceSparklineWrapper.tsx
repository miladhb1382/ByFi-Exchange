"use client"; // در فایل جاری

import dynamic from "next/dynamic";

export const PriceSparkline = dynamic(() => import("../PriceSparkline"), {
  ssr: false,
});
