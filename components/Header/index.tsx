"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MENU_ITEMS } from "@/constants";
import Link from "next/link";
import Logo from "../ui/Logo";
import AuthModal from "../ui/modal";

const Header = () => {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // جلوگیری از mismatch

  return (
    <nav className="rtl bg-primary text-white ">
      <AuthModal open={open} setOpen={setOpen} />
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center h-auto md:h-[103px] px-4 py-4 max-w-[1340px]">
        <div className="flex items-center space-x-4">
          <Logo
            className="object-cover mr-[-37px]  min-w-[180px] h-[100px]"
            altText="Crypto Exchange Header Logo"
          />
          <div className="menu-container flex flex-row gap-x-10 ">
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
        <div className="flex items-center space-x-2 mt-4 md:mt-0">
          {/* دکمه ثبت‌نام */}
          <div
            className="px-[24px] py-[18px] h-[48px] flex justify-center items-center bg-secondry text-white w-[178px] text-center text-[16px] font-[700] rounded-[40px] hover:opacity-75 transition-opacity"
            onClick={() => setOpen(true)}
          >
            ثبت‌نام
          </div>

          {/* دکمه ورود */}
          <div
            className="px-[24px] py-[18px] h-[48px] flex justify-center items-center bg-white w-[178px] text-[16px] text-center font-[700] text-secondry rounded-[40px] hover:opacity-75  transition-opacity"
            onClick={() => setOpen(true)}
          >
            ورود
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Header;
