"use client";

import { Field, ErrorMessage } from "formik";

interface TermsCheckboxProps {
  name: string;
  text?: string;
}

const TermsCheckbox: React.FC<TermsCheckboxProps> = ({ name, text }) => {
  return (
    <div className="w-full">
      <label className="flex items-center space-x-2 w-full mx-auto cursor-pointer text-[13px] text-white">
        <Field
          type="checkbox"
          name={name}
          className="accent-blue-600 ml-1 bg-white/5"
        />
        {text ? (
          text
        ) : (
          <span>
            با ثبت‌نام در <span className="font-semibold">ByFi</span>، با{" "}
            <a
              href="/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800 transition-all"
            >
              قوانین و مقررات
            </a>{" "}
            موافقت می‌نمایم.
          </span>
        )}
      </label>

      <ErrorMessage
        name={name}
        component="div"
        className="text-red-500 text-xs mt-1"
      />
    </div>
  );
};

export default TermsCheckbox;
