export const MENU_ITEMS = [
  { title: "صفحه اصلی", href: "/", isPrivate: false, Xpx: 0 }, //-5px for transate to x under line of active menu item
  { title: "معاملات", href: "/trades", isPrivate: true, Xpx: -4.5 }, //-13.7px
  { title: "بازار", href: "/market", isPrivate: true, Xpx: 22 }, //10px
  { title: "خدمات", href: "/khadamat", isPrivate: true, Xpx: 54.8 }, //39.8px
];
export const Mobile_MENU_ITEMS = [
  { title: "خانه", href: "/" },
  { title: "معامله", href: "/trades" },
  { title: "بازار", href: "/market" },
  { title: "گیفت کارت", href: "/khadamat" },
  { title: "کیف پول", href: "/khadamat" },
];
export const AUTH_MENU_ITEMS = [
  { title: "ثبت‌نام", href: "/auth/register", isPrivate: false },
  { title: "ورود", href: "/auth/login", isPrivate: false },
];
