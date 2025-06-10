"use client";

import { Formik, Form } from "formik";
import * as Yup from "yup";

import InputWithLabel from "../ui/InputWithLabel";
import TermsCheckbox from "../TermsCheckbox";
import { DialogTitle } from "../ui/dialog";
import AuthIconAndTitle from "../AuthIconAndTitle";
import CaptchaInput from "../CaptchaInput";
import SwitchAuthLink from "../SwitchAuthLink";
import { useState } from "react";
import { setCurrentForm } from "@/store/authSlice";
import { useDispatch } from "react-redux";

interface Step2RegisterFormProps {
  setOpen: (open: boolean) => void;
  onNext: () => void;

  setOpenModal: (modal: "login" | "register" | "forgot" | null) => void;
}

const Step2RegisterForm: React.FC<Step2RegisterFormProps> = ({
  setOpen,
  setOpenModal,
  onNext,
}) => {
  const [captchaValid, setCaptchaValid] = useState(false);
  const dispatch = useDispatch();
  const initialValues = {
    phoneNumber: "",
    password: "",
    inviteCode: "",
    captcha: "",
    rememberMe: false,
  };

  const validationSchema = Yup.object({
    phoneNumber: Yup.string()
      .required("شماره همراه الزامی است")
      .matches(/^09[0-9]{9}$/, "شماره همراه معتبر نیست"),
    password: Yup.string()
      .required("رمز عبور الزامی است")
      .min(8, "رمز عبور باید حداقل 8 کاراکتر باشد"),

    inviteCode: Yup.string().optional(),
    captcha: Yup.string().test(
      "captcha",
      "کد کپچا صحیح نیست",
      () => captchaValid
    ),
    rememberMe: Yup.boolean()
      .required("پذیرش قوانین الزامی است")
      .oneOf([true], "شما باید قوانین را بپذیرید"),
  });

  const handleSubmit = (values: typeof initialValues) => {
    console.log("Form values:", values);
    onNext();
  };
  const handleSwitchToLogin = () => {
    setOpen(false); // بستن فرم ثبت‌نام
    dispatch(setCurrentForm("login")); // ریست فرم به حالت لاگین
    setOpenModal("login"); // باز کردن مدال لاگین
  };

  return (
    <div>
      <DialogTitle className="flex-center w-full">
        <AuthIconAndTitle
          title="ایجاد حساب کاربری"
          className="mx-auto  text-nowrap"
        />
      </DialogTitle>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, isValid, isSubmitting }) => (
          <Form className="flex flex-col gap-6 mx-auto w-full ">
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
              label="ایجاد رمز عبور"
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
            <InputWithLabel
              id="inviteCode"
              name="inviteCode"
              type="text"
              label="کد دعوت (اختیاری)"
              ShowInRow={true}
            />

            <TermsCheckbox name="rememberMe" />

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
                {isSubmitting ? "در حال پردازش..." : "ثبت نام"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
      <div className="flex-center mt-8 gap-4 flex-col">
        {" "}
        <SwitchAuthLink
          text="آیا حساب کاربری دارید؟"
          onClick={() => {
            setOpen(false);
            // باز کردن مدال ورود یا ناوبری
          }}
        />
        <div
          onClick={handleSwitchToLogin}
          className="flex-center w-full cursor-pointer h-[48px] bg-[#2F66F6] mx-auto text-white font-bold py-2 rounded-[12px] hover:opacity-90 transition"
        >
          ورود
        </div>
      </div>
    </div>
  );
};

export default Step2RegisterForm;
