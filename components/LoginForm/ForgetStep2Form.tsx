"use client";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import AuthModal from "../ui/AuthModal";
import InputWithLabel from "../ui/InputWithLabel";
import CodeInput from "../CodeInput/CodeInput";
import TermsCheckbox from "../TermsCheckbox";
import { DialogTitle } from "../ui/dialog";
import CaptchaInput from "../CaptchaInput";
import AuthIconAndTitle from "../AuthIconAndTitle";
import { useState } from "react";

interface ForgetStep2FormProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  onNext: () => void;
  setOpenModal: (modal: "login" | "register" | "forgot" | null) => void;
}

const ForgetStep2Form: React.FC<ForgetStep2FormProps> = ({ open, setOpen }) => {
  const [captchaValid, setCaptchaValid] = useState(false);

  const initialValues = {
    code: "",
    newPassword: "",
    repeatPassword: "",
    captcha: "",
    rules: false,
  };

  const validationSchema = Yup.object({
    code: Yup.string()
      .required("کد تأیید الزامی است")
      .matches(/^\d{6}$/, "کد باید 6 رقم باشد"),
    newPassword: Yup.string()
      .required("رمز عبور جدید الزامی است")
      .min(8, "رمز عبور باید حداقل 8 کاراکتر باشد"),
    repeatPassword: Yup.string()
      .required("تکرار رمز عبور الزامی است")
      .oneOf([Yup.ref("newPassword")], "رمز عبور با تکرار آن مطابقت ندارد"),
    captcha: Yup.string().test(
      "captcha",
      "کد کپچا صحیح نیست",
      () => captchaValid
    ),
    rules: Yup.boolean().oneOf([true], "لطفاً تأیید کنید که ربات نیستید"),
  });

  const handleSubmit = (values: typeof initialValues) => {
    console.log("Form values:", values);
    // ارسال اطلاعات به سرور
  };

  return (
    <AuthModal open={open} setOpen={setOpen}>
      <DialogTitle className="ml-auto">
        <AuthIconAndTitle
          title="بازیابی رمز عبور"
          className="mx-auto pr-[-10px] text-nowrap"
          iconAddress="/icons/lockBigIcon.png"
        />
      </DialogTitle>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, isValid, isSubmitting }) => (
          <Form className="flex flex-col gap-6 mx-auto w-full justify-between mb-[100px]">
            <div className="flex flex-col gap-2 w-full">
              <span className="text-[16px] font-bold text-white">
                کد شش رقمی ارسال شده را وارد کنید.
              </span>
              <CodeInput name="code" />
            </div>

            <InputWithLabel
              id="newPassword"
              name="newPassword"
              label="رمز عبور جدید"
              type="password"
              placeholder="رمز عبور جدید را وارد کنید"
              iconAddress="/icons/lock.png"
              iconWidth={20}
              iconHieght={22}
            />

            <InputWithLabel
              id="repeatPassword"
              name="repeatPassword"
              label="تکرار رمز عبور"
              type="password"
              placeholder="رمز عبور را دوباره وارد کنید"
              iconAddress="/icons/lock.png"
              iconWidth={20}
              iconHieght={22}
            />
            <div className="flex flex-col gap-1">
              <CaptchaInput name="captcha" onValid={setCaptchaValid} />
              {errors.captcha && touched.captcha && (
                <div className="text-red-500 text-sm">{errors.captcha}</div>
              )}
            </div>

            <TermsCheckbox name="rules" text="من ربات نیستم." />

            <div className="mx-auto">
              <button
                type="submit"
                disabled={!isValid || isSubmitting}
                className={`flex-center w-[404px] cursor-pointer disabled:cursor-not-allowed h-[48px] bg-[#2F66F6] text-white font-bold py-2 rounded-[12px] disabled:opacity-50 hover:opacity-90 transition ${
                  !isValid || isSubmitting
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
              >
                {isSubmitting ? "در حال پردازش..." : "تأیید"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </AuthModal>
  );
};

export default ForgetStep2Form;
