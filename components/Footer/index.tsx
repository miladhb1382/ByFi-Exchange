import Link from "next/link";
import Logo from "../ui/Logo";

import { Twitter, Send, Instagram } from "lucide-react";
const Footer = () => {
  return (
    <footer className="bg-[#000000] text-white text-center py-4 mt-8">
      <div className=" overflow-x-hidden">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex w-screen flex-col social-icons  mx-2 mt-2">
            <div className="flex justify-between    flex-row-reverse my-2 items-center w-full mx-auto max-w-[1440px]">
              {" "}
              <Logo
                className="object-cover w-[180px] h-[80px]"
                altText="Crypto Exchange Footer Logo"
              />
              <div className="text-[18px] font-[700]">
                Boost Your Future Investment
              </div>
              <div className="flex space-x-4 w-[150px] " dir="ltr">
                <Link
                  href="https://x.com"
                  className="hover:text-gray-300"
                  aria-label="X social media"
                >
                  <Twitter size={24} />
                </Link>
                <Link
                  href="https://telegram.org"
                  className="hover:text-gray-300"
                  aria-label="Telegram"
                >
                  <Send size={24} />
                </Link>
                <Link
                  href="https://instagram.com"
                  className="hover:text-gray-300"
                  aria-label="Instagram"
                >
                  <Instagram size={24} />
                </Link>
              </div>
            </div>
          </div>
          <span className="text-[18px] mt-4 text-left opacity-[0.75]" dir="ltr">
            © 2025 ByFi. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
