"use client";

import { Formik, Form } from "formik";
import * as Yup from "yup";

import InputWithLabel from "../ui/InputWithLabel";
import CodeInput from "../CodeInput/CodeInput";
import TermsCheckbox from "../TermsCheckbox";
import { DialogTitle } from "../ui/dialog";
import CaptchaInput from "../CaptchaInput";

import { useState } from "react";
import { useDispatch } from "react-redux";

import { setCurrentForm } from "@/store/authSlice";

interface LoginStep1FormProps {
  setOpen: (open: boolean) => void;
}

const LoginStep1Form: React.FC<LoginStep1FormProps> = ({ setOpen }) => {
  const [captchaValid, setCaptchaValid] = useState(false);
  const dispatch = useDispatch();
  const initialValues = {
    phoneNumber: "",
    password: "",
    code: "",
    captcha: "",
    rememberMe: false,
  };

  const validationSchema = Yup.object({
    phoneNumber: Yup.string()
      .required("شماره همراه الزامی است")
      .matches(/^09[0-9]{9}$/, "شماره همراه معتبر نیست"),
    password: Yup.string()
      .required("رمز عبور الزامی است")
      .min(6, "رمز عبور باید حداقل 6 کاراکتر باشد"),
    code: Yup.string()
      .required("کد دو عاملی الزامی است")
      .length(6, "کد دو عاملی باید 6 رقمی باشد"),
    captcha: Yup.string().test(
      "captcha",
      "کد کپچا صحیح نیست",
      () => captchaValid
    ),
    rememberMe: Yup.boolean(),
  });

  const handleSubmit = (values: typeof initialValues) => {
    console.log("Form values:", values);
    setOpen(false);
  };

  return (
    <div className="w-full">
      <DialogTitle className="text-[32px] font-bold p-0 text-white w-full text-center">
        ورود به حساب کاربری
      </DialogTitle>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, isValid, isSubmitting }) => (
          <Form className="flex flex-col gap-6 mx-auto w-full">
            <InputWithLabel
              id="phoneNumber"
              name="phoneNumber"
              label="شماره همراه"
              placeholder="مثلاً 09123456789"
              iconAddress="/icons/phone.png"
              iconHieght={28}
              iconWidth={18}
            />

            <InputWithLabel
              id="password"
              name="password"
              type="password"
              label="رمز عبور"
              placeholder="رمز عبور خود را وارد کنید"
              iconAddress="/icons/lock.png"
              iconHieght={18}
              iconWidth={18}
            />

            <div className="flex flex-col gap-1">
              <CaptchaInput name="captcha" onValid={setCaptchaValid} />
              {errors.captcha && touched.captcha && (
                <div className="text-red-500 text-sm">{errors.captcha}</div>
              )}
            </div>

            <div className="flex flex-col gap-2 w-full">
              <span className="flex justify-between w-full">
                <span>کد دو عاملی (2FA)</span>
                <span className="text-center text-[14px] font-semibold">
                  کد را فعال نکرده اید؟
                  <span className="text-secondry cursor-pointer hover:text-blue-800 transition-all">
                    اینجا کلیک کنید.
                  </span>
                </span>
              </span>
              <div className="flex-center w-full" style={{ direction: "ltr" }}>
                <CodeInput name="code" />
              </div>
            </div>

            <TermsCheckbox name="rememberMe" text="مرا به خاطر بسپار" />
            <span className="flex justify-between w-full">
              <span className="text-center text-[14px] font-semibold">
                رمز خود را فراموش کرده اید؟
                <span
                  onClick={() => dispatch(setCurrentForm("forgot"))}
                  className="text-secondry cursor-pointer hover:text-blue-800 transition-all"
                >
                  اینجا کلیک کنید.
                </span>
              </span>
            </span>
            <div className="mx-auto">
              <button
                type="submit"
                disabled={!isValid || isSubmitting}
                className={`flex-center w-[300px] cursor-pointer disabled:cursor-not-allowed h-[48px] bg-[#2F66F6] text-white font-bold py-2 rounded-[12px] disabled:opacity-50 hover:opacity-90 transition ${
                  !isValid || isSubmitting
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
              >
                {isSubmitting ? "در حال پردازش..." : "ورود"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginStep1Form;
