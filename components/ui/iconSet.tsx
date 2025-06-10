import { clsx } from "clsx";

const IconSet = ({
  width = 20,
  height = 20,
  iconAddress = "",
  className,
  onClick,
}: {
  width?: number;
  height?: number;
  iconAddress?: string;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className={clsx("bg-no-repeat bg-contain", className)}
      style={{
        backgroundImage: `url('${iconAddress}')`,
        width: `${width}px`,
        height: `${height}px`,
      }}
    />
  );
};

export default IconSet;
