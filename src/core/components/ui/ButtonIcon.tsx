import { LucideIcon } from "lucide-react";
import React from "react";

interface ButtonIconProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  Icon: LucideIcon;
  colorIcon: string;
  colorBg: string;
  children?: React.ReactNode;
}

export const ButtonIcon: React.FC<ButtonIconProps> = ({
  Icon,
  colorIcon,
  colorBg,
  children,
  ...rest
}) => {
  return (
    <button
      className="flex gap-2 items-center justify-center p-1 rounded-lg"
      style={{ backgroundColor: colorBg }}
      {...rest}>
      <Icon size={16} color={colorIcon} />
      {children}
    </button>
  );
};