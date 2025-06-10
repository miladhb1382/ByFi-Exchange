import clsx from "clsx";
import IconSet from "../ui/iconSet";

interface AuthIconAndTitleProps {
  title: string;
  showIcon?: boolean;
  iconAddress?: string;
  className?: string;
}

const AuthIconAndTitle: React.FC<AuthIconAndTitleProps> = ({
  title,
  showIcon = true,
  iconAddress = "/images/useradd.png",
  className,
}) => {
  return (
    <div className={clsx("flex items-center mx-auto gap-2 ", className)}>
      {showIcon && iconAddress && (
        <IconSet iconAddress={iconAddress} width={110} height={110} />
      )}
      <span className="text-[32px] pr-2 font-semibold text-white">{title}</span>
    </div>
  );
};
export default AuthIconAndTitle;
