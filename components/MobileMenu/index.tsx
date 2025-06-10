"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Wallet, Gift, LineChart, Store } from "lucide-react";

export const Mobile_MENU_ITEMS = [
  { title: "خانه", href: "/", icon: Home },
  { title: "معامله", href: "/trades", icon: LineChart },
  { title: "بازار", href: "/market", icon: Store },
  { title: "گیفت کارت", href: "/khadamat", icon: Gift },
  { title: "کیف پول", href: "/wallet", icon: Wallet },
];

const MobileMenu = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-[#040D28] flex flex-row-reverse justify-between sm:justify-evenly px-4 py-2 border-t border-gray-800 lg:hidden">
      {Mobile_MENU_ITEMS.map(({ title, href, icon: Icon }) => {
        const isActive = pathname === href;

        return (
          <Link
            key={href}
            href={href}
            className="flex flex-col items-center gap-1 text-xs"
          >
            <Icon
              size={24}
              className={isActive ? "text-[#2F66F6]" : "text-[#A7A7B7]"}
            />
            <span
              className={
                isActive
                  ? "text-[#2F66F6] font-medium"
                  : "text-[#A7A7B7] font-normal"
              }
            >
              {title}
            </span>
          </Link>
        );
      })}
    </nav>
  );
};

export default MobileMenu;
