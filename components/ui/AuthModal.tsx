"use client";

import { Dialog, DialogContent, DialogOverlay } from "@/components/ui/dialog";
import { FC, ReactNode } from "react";

import clsx from "clsx";

interface GenericModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  className?: string;
  children: ReactNode;
}

const AuthModal: FC<GenericModalProps> = ({
  open,
  setOpen,

  children,

  className,
}) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogOverlay className="bg-[#D9D9D9] opacity-[0.79] " />
      <DialogContent
        className={clsx(
          "bg-[#0A0E27] border-none   text-white w-[745px]  h-[852px]  rounded-[16px] ",
          className
        )}
        style={{ maxWidth: 752 }}
      >
        <div className=" max-w-[404px] flex-center flex-col   space-y-5 mx-auto">
          {children}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
