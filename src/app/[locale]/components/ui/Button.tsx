"use client";

import Link from "next/link";

type ButtonSize = "sm" | "md" | "lg" | "xl";
type ButtonType = "button" | "submit" | "reset";

const baseStyles =
  "inline-flex items-center justify-center rounded-lg cursor-pointer font-semibold text-center transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:pointer-events-none";

const sizes = {
  sm: "px-4 py-2 text-xs",
  md: "px-6 py-3 text-sm md:text-base",
  lg: "w-52 py-3 text-base",
  xl: "w-64 py-4 text-sm md:text-lg",
} as const;

const variants = {
  primary:
    "bg-primary-dark text-secondary-dark border border-secondary-dark/20 hover:bg-primary shadow-sm",
  secondary:
    "bg-secondary text-primary border border-secondary hover:bg-secondary-hover shadow-md",
} as const;

interface BaseProps extends React.PropsWithChildren {
  variant?: keyof typeof variants;
  size?: ButtonSize;
  className?: string;
  type?: ButtonType;
  disabled?: boolean;
}

interface LinkButtonProps extends BaseProps {
  href: string;
  onClick?: (event: React.MouseEvent<Element>) => void;
}

interface ActionButtonProps extends BaseProps {
  href?: never;
  onClick?: (event: React.MouseEvent<Element>) => void;
}

export type ButtonProps = LinkButtonProps | ActionButtonProps;

export const Button = ({
  children,
  variant = "primary",
  size = "lg",
  type = "button",
  disabled = false,
  onClick,
  href,
  className = "",
}: ButtonProps) => {
  const combinedStyles = `${baseStyles} ${sizes[size]} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        className={combinedStyles}
        onClick={onClick}
        aria-disabled={disabled}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={combinedStyles}
    >
      {children}
    </button>
  );
};
