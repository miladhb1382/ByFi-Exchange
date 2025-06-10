"use client";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useState, useEffect } from "react";
import AuthModal from "../ui/AuthModal";
import { DialogTitle } from "../ui/dialog";
import IconSet from "../ui/iconSet";
import CodeInput from "../CodeInput/CodeInput";
import SwitchAuthLink from "../SwitchAuthLink";
import { setCurrentForm } from "@/store/authSlice";
import { useDispatch } from "react-redux";

interface Step3RegisterFormProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  setOpenModal: (modal: "login" | "register" | "forgot" | null) => void;
}

const Step3RegisterForm: React.FC<Step3RegisterFormProps> = ({
  open,
  setOpen,
  setOpenModal,
}) => {
  const [countdown, setCountdown] = useState(120); // 2 دقیقه = 120 ثانیه
  const [canResend, setCanResend] = useState(false);
  const dispatch = useDispatch();
  const initialValues = {
    verificationCode: "",
  };

  // تایمر معکوس
  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    } else {
      setCanResend(true);
    }

    return () => clearTimeout(timer);
  }, [countdown]);

  // تابع ارسال مجدد کد
  const handleResendCode = () => {
    // منطق ارسال مجدد کد
    console.log("ارسال مجدد کد تایید");
    setCountdown(120); // ریست تایمر به 2 دقیقه
    setCanResend(false); // غیرفعال کردن دکمه ارسال مجدد
  };

  const validationSchema = Yup.object({
    verificationCode: Yup.string()
      .required("کد تایید الزامی است")
      .length(6, "کد تایید باید 6 رقمی باشد")
      .matches(/^[0-9]+$/, "کد تایید باید فقط شامل اعداد باشد"),
  });

  const handleSubmit = (values: typeof initialValues) => {
    console.log("Form values:", values);
  };

  // فرمت زمان به صورت MM:SS
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };
  const handleSwitchToLogin = () => {
    setOpen(false); // بستن فرم ثبت‌نام
    dispatch(setCurrentForm("login")); // ریست فرم به حالت لاگین
    setOpenModal("login"); // باز کردن مدال لاگین
  };
  return (
    <AuthModal open={open} setOpen={setOpen}>
      <DialogTitle className="text-[32px] font-bold p-0 text-white text-center">
        تایید شماره همراه
      </DialogTitle>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isValid, isSubmitting }) => (
          <Form className="flex flex-col gap-6 mx-auto w-full">
            <p className="flex flex-col gap-4 mx-auto text-center w-full text-bold text-[12px] sm:text-md text-nowrap">
              کد شش رقمی پیامک شده به شماره 0912345678 را وارد کنید.
            </p>

            <IconSet
              iconAddress="/icons/mail.png"
              width={70}
              height={73}
              className="mx-auto"
            />

            <div className="flex flex-col gap-2 w-full">
              <div className="flex-center" style={{ direction: "ltr" }}>
                <CodeInput name="verificationCode" />
              </div>
            </div>

            <div className="flex flex-col items-center gap-2">
              <span className="text-[16px] font-bold">
                {formatTime(countdown)}
              </span>

              {canResend ? (
                <button
                  type="button"
                  onClick={handleResendCode}
                  className="text-secondry cursor-pointer hover:text-blue-800 transition-all text-[14px] font-semibold"
                >
                  ارسال مجدد کد
                </button>
              ) : (
                <span className="sm:text-[14px] font-semibold text-gray-500">
                  امکان ارسال مجدد پس از پایان تایمر
                </span>
              )}
            </div>

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
                {isSubmitting ? "در حال پردازش..." : "اعمال"}
              </button>
            </div>
          </Form>
        )}
      </Formik>

      <div className="flex-center w-full">
        <SwitchAuthLink
          text="آیا حساب کاربری دارید؟"
          onClick={() => setOpen(false)}
        />
      </div>

      <div
        onClick={handleSwitchToLogin}
        className="flex-center w-full cursor-pointer h-[48px] bg-[#2F66F6] mx-auto text-white font-bold py-2 rounded-[12px] hover:opacity-90 transition"
      >
        ورود
      </div>
    </AuthModal>
  );
};

export default Step3RegisterForm;
