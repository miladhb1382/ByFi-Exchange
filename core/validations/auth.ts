import * as Yup from "yup";

// Validation schema for ForgetStep2Form
export const registerStep2Schema = Yup.object().shape({
  code: Yup.string()
    .matches(/^\d{6}$/, "کد باید ۶ رقم باشد")
    .required("کد الزامی است"),
  newPassword: Yup.string()
    .min(8, "رمز عبور باید حداقل ۸ کاراکتر باشد")
    .matches(/[a-z]/, "رمز عبور باید شامل حروف کوچک باشد")
    .matches(/[A-Z]/, "رمز عبور باید شامل حروف بزرگ باشد")
    .matches(/[0-9]/, "رمز عبور باید شامل عدد باشد")
    .matches(/[!@#$%^&*]/, "رمز عبور باید شامل کاراکتر خاص (!@#$%^&*) باشد")
    .required("رمز عبور جدید الزامی است"),
  repeatPassword: Yup.string()
    .oneOf(
      [Yup.ref("newPassword")],
      "تکرار رمز عبور باید با رمز عبور یکسان باشد"
    )
    .required("تکرار رمز عبور الزامی است"),
  captchaValue: Yup.boolean().oneOf([true], "لطفاً کپچا را تأیید کنید"),
  rememberMe: Yup.boolean().oneOf([true], "لطفاً تأیید کنید که ربات نیستید"),
});
