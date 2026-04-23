import type { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "outline1";
  size?: "sm" | "md" | "lg" | "xl";
  tag?: "button" | "link";
  href?: string;
  fullWidth?: boolean;
  isRounded?: boolean;
  loading?: boolean;
  center?: boolean;
}

const Button = ({
  children,
  variant = "primary",
  size = "lg",
  tag = "button",
  href = "",
  fullWidth = false,
  isRounded = false,
  loading = false,
  center = true,
  disabled = false,
  type = "button",
  onClick,
  className,
  ...props
}: ButtonProps) => {
  const baseClasses =
    "inline-flex items-center justify-center font-medium transition-all duration-200 hover:scale-[1.04] focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "ds-bg-navbar cursor-pointer text-white opacity-95",
    secondary:
      "ds-bg-sidbar text-white hover:opacity-95 cursor-pointer",
    ghost: "cursor-pointer ds-text-alt  border-2 border-gray-300 ",
    outline1:
      "border-2 ds-text-alt capitalize focus:ring-primary-500 cursor-pointer",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2 text-[18px]",
    lg: "px-6 py-3 text-[20px]",
    xl: "px-8 py-4 text-lg",
  };

  const commonClasses = cn(
    baseClasses,
    variants[variant],
    sizes[size],
    fullWidth && "w-full",
    isRounded ? "rounded-full" : "rounded-md",
    className,
  );

  return (
    <div className={center ? "flex justify-center" : "w-full"}>
      {tag === "link" ? (
        <Link
          href={href}
          className={cn(commonClasses, center && "text-center")}
        >
          {children}
        </Link>
      ) : (
        <button
          type={type}
          disabled={disabled || loading}
          onClick={onClick}
          className={commonClasses}
          {...props}
        >
          {children}
        </button>
      )}
    </div>
  );
};

export default Button;
