"use client"
import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled = false,
  className = "",
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`h-[60px] px-4 py-2 font-semibold rounded-[56px] transition-colors duration-200 hover:opacity-35 ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      } ${className}`}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
