"use client";
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogTitle,
} from "@/components/ui/dialog";
import { FC } from "react";
import IconSet from "./iconSet";

interface AuthModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const AuthModal: FC<AuthModalProps> = ({ open, setOpen }) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogOverlay className="bg-[#D9D9D9] opacity-[0.79]" />
      <DialogContent className="bg-[#0A0E27] border-none text-white max-w-[745px] max-h-[852px] w-full rounded-[16px] px-6 py-12 space-y-5">
        <DialogTitle className="text-[20px] font-bold p-0  text-[#A7A7B7] text-center">
          سرمایه‌گذاری در ارز دیجیتال را از امروز شروع کنید.
        </DialogTitle>
        {/* دکمه‌های ثبت‌نام */}
        <div className="flex items-center mx-auto gap-2 pl-[100px]">
          <IconSet iconAddress="/images/useradd.png" width={110} height={110} />
          <span className="text-[32px] pr-2 font-semibold text-white">
            ثبت نام در ByFi
          </span>
        </div>
        <div className="flex flex-col gap-4 mx-auto w-[343px]">
          <div className="w-full flex-center h-[48px] cursor-pointer  bg-[#D9D9D9] text-black font-semibold py-2 rounded-lg hover:opacity-90 transition">
            ثبت‌نام با شماره همراه
          </div>

          <div className="w-full  flex-center mx-auto h-[48px] cursor-pointer max-w-[343px]  bg-[#D9D9D9] text-black font-semibold py-2 rounded-lg hover:opacity-90 transition">
            <IconSet
              iconAddress="/icons/Google, Normal.png"
              width={20}
              height={20}
              className="ml-2"
            />
            ثبت‌نام با گوگل
          </div>
          <div className="flex-center w-full cursor-pointer bg-[#2F66F6] text-white  font-bold py-2 rounded-[12px] hover:opacity-90 transition">
            ادامه
          </div>
        </div>

        {/* خط و متن میانی */}
        <div className="flex items-center gap-3 px-10">
          <div className="flex-1 h-px bg-white" />
          <span className="cursor-pointer whitespace-nowrap text-[14px] font-semibold">
            آیا حساب کاربری دارید؟
          </span>
          <div className="flex-1 h-px bg-white" />
        </div>

        {/* دکمه ورود */}
        <div className="mx-auto">
          <div className="flex-center w-[343px] cursor-pointer  h-[48px] bg-[#2F66F6] text-white  font-bold py-2 rounded-[12px] hover:opacity-90 transition">
            ورود
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
