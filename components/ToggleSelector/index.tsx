"use client";

import React from "react";
import clsx from "clsx";

interface ToggleSelectorProps {
  selected: "phone" | "email";
  onChange: (value: "phone" | "email") => void;
}

const ToggleSelector: React.FC<ToggleSelectorProps> = ({
  selected,
  onChange,
}) => {
  return (
    <div
      className="w-[300px] h-[49px] p-[2px] flex items-center justify-between rounded-[9px] border border-black"
      style={{ background: "#A7A7B7" }}
    >
      <div
        onClick={() => onChange("phone")}
        className={clsx(
          "flex-1 h-full flex-center cursor-pointer rounded-[9px] text-sm font-bold transition",
          selected === "phone" ? "bg-[#3A6FF8] text-white" : "text-black"
        )}
      >
        بازیابی با شماره همراه
      </div>
      <div
        onClick={() => onChange("email")}
        className={clsx(
          "flex-1 h-full flex-center cursor-pointer rounded-[9px] text-sm font-bold transition",
          selected === "email" ? "bg-[#3A6FF8] text-white" : "text-black"
        )}
      >
        بازیابی با ایمیل
      </div>
    </div>
  );
};

export default ToggleSelector;
