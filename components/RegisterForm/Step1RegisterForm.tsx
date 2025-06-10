"use client";

import { setCurrentForm } from "@/store/authSlice";
import AuthIconAndTitle from "../AuthIconAndTitle";
import SwitchAuthLink from "../SwitchAuthLink";
import { DialogTitle } from "../ui/dialog";
import IconSet from "../ui/iconSet";
import { useDispatch } from "react-redux";

interface Step1RegisterFormProps {
  setOpen: (open: boolean) => void;
  onNext: () => void;
  setOpenModal: (modal: "login" | "register" | "forgot" | null) => void;
}

const Step1RegisterForm: React.FC<Step1RegisterFormProps> = ({
  setOpen,
  onNext,
  setOpenModal,
}) => {
  const dispatch = useDispatch();

  const handleSwitchToLogin = () => {
    setOpen(false); // بستن فرم ثبت‌نام
    dispatch(setCurrentForm("login")); // ریست فرم به حالت لاگین
    setOpenModal("login"); // باز کردن مدال لاگین
  };

  return (
    <div className="flex-center flex-col">
      <div className="flex sm:hidden ">
        {" "}
        <AuthIconAndTitle
          title=""
          showIcon={true}
          iconAddress="/images/useradd.png"
          className="text-[32px] font-bold   jsutify-center flex items-center gap-2"
        />
      </div>
      <DialogTitle className=" flex-center  w-full font-bold text-[13px] sm:text-[20px] mb-[20px] text-[#2F66F6]  sm:text-[#A7A7B7]">
        سرمایه‌گذاری در ارز دیجیتال را از امروز شروع کنید.
      </DialogTitle>
      <div className="hidden   sm:flex ">
        {" "}
        <AuthIconAndTitle
          title="ثبت نام در ByFi"
          showIcon={true}
          iconAddress="/images/useradd.png"
          className="text-[32px] font-bold  gap-1 flex-col jsutify-center flex sm:items-center sm:gap-2"
        />
      </div>

      <div className="flex flex-col gap-4 mx-auto mt-[20px] w-[343px]">
        <div
          onClick={onNext}
          className="w-full flex-center h-[48px] cursor-pointer bg-[#D9D9D9] text-black font-semibold py-2 rounded-lg hover:opacity-90 transition"
        >
          ثبت‌نام با شماره همراه
        </div>

        <div className="w-full flex-center mx-auto h-[48px] cursor-pointer max-w-[343px] bg-[#D9D9D9] text-black font-semibold py-2 rounded-lg hover:opacity-90 transition">
          <IconSet
            iconAddress="/icons/Google, Normal.png"
            width={20}
            height={20}
            className="ml-2"
          />
          ثبت‌نام با گوگل
        </div>

        <div
          onClick={onNext}
          className="flex-center w-full cursor-pointer bg-[#2F66F6] text-white font-bold py-2 rounded-[12px] hover:opacity-90 transition"
        >
          ادامه
        </div>
      </div>
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
          className="flex-center w-[343px] cursor-pointer h-[48px] bg-[#2F66F6] mx-auto text-white font-bold py-2 rounded-[12px] hover:opacity-90 transition"
        >
          ورود
        </div>
      </div>
    </div>
  );
};

export default Step1RegisterForm;
