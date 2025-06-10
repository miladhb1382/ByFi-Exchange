"use client";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import InputWithLabel from "../ui/InputWithLabel";
import TermsCheckbox from "../TermsCheckbox";
import { DialogTitle } from "../ui/dialog";
import CaptchaInput from "../CaptchaInput";
import AuthIconAndTitle from "../AuthIconAndTitle";
import ToggleSelector from "../ToggleSelector";
import { useState } from "react";

interface ForgetWithNumberOrEmailProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  onNext: () => void;
  setOpenModal: (modal: "login" | "register" | "forgot" | null) => void;
}

const ForgetWithNumberOrEmail: React.FC<ForgetWithNumberOrEmailProps> = ({
  onNext,
}) => {
  const [selectedMethod, setSelectedMethod] = useState<"phone" | "email">(
    "phone"
  );
  const [captchaValid, setCaptchaValid] = useState(false);

  const initialValues = {
    contact: "",
    captcha: "",
    rules: false,
  };

  const validationSchema = Yup.object().shape({
    contact: Yup.string()
      .required(
        selectedMethod === "phone"
          ? "شماره همراه الزامی است"
          : "ایمیل الزامی است"
      )
      .test("contact-validation", function (value) {
        if (selectedMethod === "phone") {
          return (
            /^09[0-9]{9}$/.test(value || "") ||
            this.createError({
              message: "شماره همراه معتبر نیست",
              path: this.path,
            })
          );
        } else {
          return (
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value || "") ||
            this.createError({
              message: "ایمیل معتبر نیست",
              path: this.path,
            })
          );
        }
      }),
    captcha: Yup.string().test(
      "captcha",
      "کد کپچا صحیح نیست",
      () => captchaValid
    ),
    rules: Yup.boolean()
      .oneOf([true], "لطفاً تأیید کنید که ربات نیستید")
      .required("لطفاً تأیید کنید که ربات نیستید"),
  });

  const handleSubmit = (values: typeof initialValues) => {
    console.log("Form values:", {
      method: selectedMethod,
      contact: values.contact,
    });
    onNext();
    // ارسال اطلاعات به سرور
  };

  return (
    <div>
      <DialogTitle className="ml-auto">
        <AuthIconAndTitle
          title="بازیابی رمز عبور"
          className="mx-auto pr-[-10px] text-nowrap"
          iconAddress="/icons/lockBigIcon.png"
        />
      </DialogTitle>

      <ToggleSelector selected={selectedMethod} onChange={setSelectedMethod} />

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        validateOnMount={true}
      >
        {({ errors, touched, isValid, isSubmitting }) => (
          <Form className="flex flex-col gap-6 mx-auto w-full justify-between mb-[100px]">
            {selectedMethod === "phone" ? (
              <InputWithLabel
                id="contact"
                name="contact"
                label="شماره همراه"
                type="tel"
                iconAddress="/icons/phone.png"
                iconHieght={28}
                iconWidth={18}
              />
            ) : (
              <InputWithLabel
                id="contact"
                name="contact"
                label="ایمیل"
                type="email"
                iconAddress="/icons/email.png"
                iconHieght={16}
                iconWidth={20}
              />
            )}

            <CaptchaInput name="captcha" onValid={setCaptchaValid} />
            {errors.captcha && touched.captcha && (
              <div className="text-red-500 text-sm -mt-4">{errors.captcha}</div>
            )}

            <TermsCheckbox name="rules" text="من ربات نیستم." />

            <div className="mx-auto">
              <button
                type="submit"
                disabled={!isValid || isSubmitting}
                className={`flex-center w-[404px] h-[48px] bg-[#2F66F6] text-white font-bold py-2 rounded-[12px] transition ${
                  !isValid || isSubmitting
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:opacity-90 cursor-pointer"
                }`}
              >
                {isSubmitting ? "در حال پردازش..." : "دریافت کد"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ForgetWithNumberOrEmail;
