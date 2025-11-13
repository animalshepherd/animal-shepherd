"use client";

import React from "react";
import Link from "next/link";

interface BaseProps extends React.PropsWithChildren {
  variant?: keyof typeof variants;
}

interface LinkButtonProps extends BaseProps {
  href?: string;
  onClick?: never;
}

interface ActionButtonProps extends BaseProps {
  href?: never;
  onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
}

export type ButtonProps = LinkButtonProps | ActionButtonProps;

// add small, medium, large button

const styles =
  "px-3 md:px-8 py-2 md:py-3 text-sm rounded-lg cursor-pointer font-semibold text-center shadow-xs transition-all duration-500";
const variants = {
  primary: "bg-primary text-secondary border border-secondary",
  secondary: "bg-secondary text-primary",
} as const;

export const Button = ({
  children,
  variant = "primary",
  onClick,
  href,
}: ButtonProps) => {
  return href ? (
    <Link href={href} className={`${styles} ${variants[variant]}`}>
      {children}
    </Link>
  ) : (
    <button
      onClick={onClick}
      type="button"
      className={`${styles} ${variants[variant]}`}
    >
      {children}
    </button>
  );
};
