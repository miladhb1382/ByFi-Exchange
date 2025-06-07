import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

const Logo = ({
  altText,
  className,
}: {
  altText: string;
  className: string;
}) => (
  <Link href="/" className="flex items-center">
    <Image
      src="/logo.png"
      alt={altText}
      width={150}
      height={150}
      className={clsx("object-contain mt-[45px]", className)}
    />
  </Link>
);
export default Logo;
