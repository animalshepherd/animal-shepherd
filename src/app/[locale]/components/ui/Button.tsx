"use client";

import Link from "next/link";

type ButtonSize = "sm" | "md" | "lg";

const baseStyles =
  "inline-flex items-center justify-center rounded-lg cursor-pointer font-semibold text-center transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:pointer-events-none";

const sizes = {
  sm: "px-4 py-2 text-xs",
  md: "px-6 py-3 text-sm md:text-base",
  lg: "px-8 py-4 text-base md:text-lg",
} as const;

const variants = {
  primary:
    "bg-primary-dark text-secondary-dark border border-secondary-dark/20 hover:bg-primary shadow-sm",
  secondary:
    "bg-secondary text-primary border border-secondary hover:bg-secondary-hover text-white shadow-md",
} as const;

interface BaseProps extends React.PropsWithChildren {
  variant?: keyof typeof variants;
  size?: ButtonSize;
  className?: string;
  onClick?: (event: React.MouseEvent<Element>) => void;
}

interface LinkButtonProps extends BaseProps {
  href: string;
}

interface ActionButtonProps extends BaseProps {
  href?: never;
  onClick: (event: React.MouseEvent<Element>) => void;
}

export type ButtonProps = LinkButtonProps | ActionButtonProps;

export const Button = ({
  children,
  variant = "primary",
  size = "md",
  onClick,
  href,
  className = "",
}: ButtonProps) => {
  const combinedStyles = `${baseStyles} ${sizes[size]} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedStyles} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} type="button" className={combinedStyles}>
      {children}
    </button>
  );
};
