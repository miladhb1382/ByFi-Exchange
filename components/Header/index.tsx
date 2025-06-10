"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MENU_ITEMS } from "@/constants";
import Link from "next/link";
import Logo from "../ui/Logo";
import RegisterManager from "../RegisterForm";
import LoginManager from "../LoginForm";

import { useDispatch } from "react-redux";
import { resetAll, setCurrentForm } from "@/store/authSlice";
import IconSet from "../ui/iconSet";
import { X } from "lucide-react";
import clsx from "clsx";
type ModalType = "login" | "register" | "forgot" | null;

const Header = () => {
  const pathname = usePathname();
  const dispatch = useDispatch();

  const [mounted, setMounted] = useState(false);

  // این state نگهدارنده نوع مدال باز است یا null
  const [openModal, setOpenModal] = useState<ModalType>(null);
  const [welcomeModalForMobile, setWelcomeModalForMobile] =
    useState<boolean>(true);

  useEffect(() => {
    setMounted(true);
  }, []);
  useEffect(() => {
    if (openModal === null) {
      dispatch(resetAll()); // ریست کردن کامل استیت auth
    }
  }, [openModal, dispatch]);

  if (!mounted) return null; // جلوگیری از mismatch

  // باز کردن فرم ثبت‌نام
  const openRegister = () => {
    dispatch(setCurrentForm("register"));
    setOpenModal("register");
  };

  // باز کردن فرم ورود
  const openLogin = () => {
    dispatch(setCurrentForm("login"));
    setOpenModal("login");
  };

  return (
    <nav className="rtl bg-[#121212] lg:bg-primary text-white ">
      {/* فقط یکی از مدال‌ها باز است */}
      <RegisterManager
        open={openModal === "register"}
        setOpen={(open) => {
          if (!open) setOpenModal(null);
        }}
        setOpenModal={setOpenModal} // اضافه کنید این prop را
      />
      <LoginManager
        open={openModal === "login"}
        setOpen={(open) => {
          if (!open) setOpenModal(null);
        }}
      />

      <div className="container mx-auto flex    flex-row justify-between items-center h-[84px] md:h-[103px] px-12 lg:px-4 py-4 max-w-[1340px]">
        <div className="flex justify-center items-center lg:hidden relative">
          <div onClick={() => setWelcomeModalForMobile(!welcomeModalForMobile)}>
            <IconSet iconAddress="/icons/profile.png" width={26} height={26} />
          </div>

          {welcomeModalForMobile && (
            <div
              className="absolute top-[65px] right-[-36px] w-[308px] h-[156px] rounded-[12px] p-[15px] pt-[20px] flex flex-col gap-[10px] z-50"
              style={{
                fontFamily: "Poppins",
                background: "#040D28",
                boxShadow: "4px 8px 32px 0px #0000003D",
              }}
            >
              <div className="flex flex-col text-right">
                {" "}
                <p className="text-[13px] flex-center font-semibold leading-none capitalize text-white">
                  به صرافی ByFi خوش آمدید
                  <div
                    onClick={() => setWelcomeModalForMobile(false)}
                    className="mr-auto px-2 cursor-pointer"
                  >
                    {" "}
                    <X size={20} className="text-white mr-auto" />
                  </div>
                </p>
                <p className="text-[10px] font-bold leading-[40px] text-right text-[#A7A7B7]">
                  سرمایه‌گذاری در ارز دیجیتال را از امروز شروع کنید.
                </p>
              </div>

              <div className="flex w-full h-[1px] bg-white" />
              <div
                className="w-[285px] h-[34px] p-[2px] rounded-[9px] flex items-center justify-between  border border-black"
                style={{ background: "#A7A7B7" }}
              >
                <div
                  className={clsx(
                    "flex-1 h-full flex-center cursor-pointer rounded-[9px] text-sm font-bold transition",
                    "text-black"
                  )}
                  onClick={openRegister}
                >
                  ثبت نام
                </div>
                <div
                  onClick={openLogin}
                  className={clsx(
                    "flex-1 h-full flex-center cursor-pointer rounded-[9px] text-sm font-bold transition",
                    "bg-[#3A6FF8] text-white"
                  )}
                >
                  ورود
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="hidden lg:flex items-center space-x-4">
          <Logo
            className="object-cover mr-[-37px]  min-w-[180px] h-[100px]"
            altText="Crypto Exchange Header Logo"
          />
          <div className="menu-container hidden lg:flex lg:flex-row gap-x-10 ">
            {MENU_ITEMS.map((item, index) => (
              <div key={index} className=" flex justify-center ">
                <Link
                  href={item.href}
                  className={`text-[18px] text-center  font-[600]  hover:text-gray-300 ${
                    pathname === item.href ? "text-blue-300" : ""
                  }`}
                >
                  {item.title}
                </Link>
              </div>
            ))}
            <span
              className="active-indicator"
              style={
                {
                  "--index": MENU_ITEMS.findIndex(
                    (item) => pathname === item.href
                  ),
                  "--Xpx": `${MENU_ITEMS.find((item) => pathname === item.href)?.Xpx || 0}px`,
                } as React.CSSProperties
              }
            />
          </div>
        </div>

        <div className="hidden lg:flex items-center space-x-2 mt-4 md:mt-0">
          {/* دکمه ثبت‌نام */}
          <div
            className="cursor-pointer px-[24px] py-[18px] h-[48px] flex justify-center items-center bg-secondry text-white w-[178px] text-center text-[16px] font-[700] rounded-[40px] hover:opacity-75 transition-opacity"
            onClick={openRegister}
          >
            ثبت‌نام
          </div>

          {/* دکمه ورود */}
          <div
            className="cursor-pointer px-[24px] py-[18px] h-[48px] flex justify-center items-center bg-white w-[178px] text-[16px] text-center font-[700] text-secondry rounded-[40px] hover:opacity-75  transition-opacity"
            onClick={openLogin}
          >
            ورود
          </div>
        </div>
        <div className=" flex justify-center items-center lg:hidden">
          <IconSet iconAddress="/icons/notive.png" width={18} height={20} />
        </div>
      </div>
    </nav>
  );
};

export default Header;
