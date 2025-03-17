import { LucideIcon } from "lucide-react";
import React from "react";

interface ButtonIconProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  Icon: LucideIcon;
  colorBg?: string;
  colorIcon?: string;
  className?: string;
  children?: React.ReactNode;
}

export const ButtonIcon = ({
  Icon,
  colorIcon,
  colorBg,
  className,
  children,
  ...rest
}: ButtonIconProps) => {
  return (
    <button
      className={`flex gap-2 items-center justify-center p-1 rounded-lg ${className}`}
      style={{ backgroundColor: colorBg }}
      {...rest}>
      <Icon size={16} color={colorIcon} />
      {children}
    </button>
  );
};