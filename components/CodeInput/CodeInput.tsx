"use client";

import React, { useRef } from "react";
import { useField } from "formik";

interface CodeInputProps {
  name: string;
}

const CodeInput: React.FC<CodeInputProps> = ({ name }) => {
  const [field, meta, helpers] = useField(name);
  const { value = "" } = field;
  const { setValue, setTouched } = helpers;

  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

  const values = value.split("").slice(0, 6);
  while (values.length < 6) values.push("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    idx: number
  ) => {
    const input = e.target.value;
    if (/^[0-9a-fA-F]{0,1}$/.test(input)) {
      const newValues = [...values];
      newValues[idx] = input.toUpperCase();
      setValue(newValues.join(""));

      if (input && idx < 5) {
        inputsRef.current[idx + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    idx: number
  ) => {
    if (e.key === "Backspace" && !values[idx] && idx > 0) {
      inputsRef.current[idx - 1]?.focus();
    }
    if (e.key === "Enter") {
      e.preventDefault();
      setTouched(true); // وقتی اینتر زده شد، تچ رو true کن که ولیدیشن اجرا شود
      // اگر لازم داری می‌تونی اینجا focus را تغییر بدی یا کار دیگه‌ای انجام بدی
    }
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.select();
  };

  const handleBlur = () => {
    setTouched(true); // وقتی از فوکوس خارج شد، تچ رو true کن تا ولیدیشن چک شود
  };

  return (
    <div
      className="flex flex-col w-full mt-6 mb-2"
      style={{ direction: "ltr" }}
    >
      <div className="flex justify-between w-full">
        {values.map((char: string, i: number) => (
          <input
            key={i}
            type="text"
            name={name}
            inputMode="numeric"
            autoComplete="one-time-code"
            maxLength={1}
            value={char}
            onChange={(e) => handleChange(e, i)}
            onKeyDown={(e) => handleKeyDown(e, i)}
            onFocus={handleFocus}
            onBlur={handleBlur}
            ref={(el) => {
              inputsRef.current[i] = el;
            }}
            className="
              w-12 h-12 rounded-lg border border-gray-300 
              text-center text-xl outline-none shadow-inner shadow-black/20
              focus:border-blue-500 focus:ring-1 focus:ring-blue-500
            "
          />
        ))}
      </div>

      {meta.touched && meta.error ? (
        <div className="text-red-500 text-sm mt-1 text-right">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default CodeInput;
