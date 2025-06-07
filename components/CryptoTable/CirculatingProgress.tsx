"use client";
import { useEffect, useState } from "react";
import clsx from "clsx";

function CirculatingProgress({ percent }: { percent: string }) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const parsedPercent = parseFloat(percent);
    const pixelWidth = (parsedPercent * 137) / 100;

    // اجرای انیمیشن بعد از mount
    const timeout = setTimeout(() => {
      setWidth(pixelWidth);
    }, 100); // تأخیر کوتاه برای فعال‌سازی transition

    return () => clearTimeout(timeout);
  }, [percent]);

  return (
    <div
      className="relative mb-3 w-[137px] h-[4px] bg-[#2F44B3] rounded-[32px] overflow-hidden text-left"
      style={{ direction: "ltr" }}
    >
      <div
        className={clsx(
          "h-full rounded-[32px] transition-all duration-700 ease-out",
          "bg-[#5873FF]"
        )}
        style={{ width: `${width}px` }}
      ></div>
    </div>
  );
}
export default CirculatingProgress;
