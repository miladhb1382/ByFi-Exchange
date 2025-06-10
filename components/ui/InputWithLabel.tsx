"use client";

import React from "react";
import clsx from "clsx";
import { Field, ErrorMessage } from "formik";
import IconSet from "./iconSet";

interface InputWithLabelProps {
  id: string;
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  iconAddress?: string;
  iconHieght?: number;
  iconWidth?: number;
  ShowInRow?: boolean;
}

const InputWithLabel: React.FC<InputWithLabelProps> = ({
  id,
  name,
  label,
  type = "text",
  placeholder = "",
  iconAddress,
  iconHieght = 20,
  iconWidth = 20,
  ShowInRow = false,
}) => {
  return (
    <div
      className={clsx("w-full", {
        "flex flex-col gap-1": !ShowInRow,
        "flex flex-row gap-8 items-center": ShowInRow,
      })}
    >
      <label htmlFor={id} className="text-white text-sm font-medium">
        {label}
      </label>

      <div className="relative w-full" style={{ direction: "rtl" }}>
        <Field
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          className="h-12 px-4 rounded-md border text-right  border-gray-300 outline-none focus:ring-1 focus:ring-blue-500 w-full"
        />
        {iconAddress && (
          <IconSet
            iconAddress={iconAddress}
            width={iconWidth}
            height={iconHieght}
            className="absolute cursor-pointer left-3 top-1/2 transform -translate-y-1/2"
          />
        )}
      </div>
      <ErrorMessage
        name={name}
        component="div"
        className="text-red-500 text-sm mt-1"
      />
    </div>
  );
};

export default InputWithLabel;
