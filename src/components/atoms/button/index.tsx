import React from "react";

import { Icon } from "@iconify/react";

interface ButtonProps {
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  iconName?: string;
  iconColor?: string;
  iconWidth?: string | number;
  children?: React.ReactNode;
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  type,
  disabled,
  className,
  iconName,
  iconColor,
  iconWidth,
  children,
  loading,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`button ${className} ${
        disabled
          ? "flex cursor-progress items-center justify-center bg-opacity-80"
          : ""
      }`}
      type={type}
    >
      {loading ? (
        <Icon icon="eos-icons:loading" color="white" width="30" />
      ) : (
        <>
          {iconName && (
            <Icon icon={iconName} color={iconColor} width={iconWidth} />
          )}
          {children}
        </>
      )}
    </button>
  );
};

export default Button;
