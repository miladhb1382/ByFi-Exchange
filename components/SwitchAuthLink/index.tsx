interface SwitchAuthLinkProps {
  text: string;
  onClick: () => void;
}

const SwitchAuthLink = ({ text, onClick }: SwitchAuthLinkProps) => {
  return (
    <div className="flex items-center w-full gap-3 px-5">
      <div className="flex-1 h-[1px] bg-white" />
      <span
        onClick={onClick}
        className="cursor-pointer whitespace-nowrap text-[14px] font-semibold"
      >
        {text}
      </span>
      <div className="flex-1 h-[1px] bg-white" />
    </div>
  );
};

export default SwitchAuthLink;
