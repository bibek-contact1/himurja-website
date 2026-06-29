"use client";

import type { ReactNode } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

type CommonButtonProps = {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "gold";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  className?: string;
};

type ButtonProps =
  | (CommonButtonProps &
      Omit<HTMLMotionProps<"button">, keyof CommonButtonProps | "href"> & {
        as?: "button";
        href?: never;
      })
  | (CommonButtonProps &
      Omit<HTMLMotionProps<"a">, keyof CommonButtonProps> & {
        as: "a";
        href: string;
      });

export default function Button({
  variant = "primary",
  size = "md",
  children,
  as = "button",
  className,
  ...rest
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-300 tracking-wide";

  const sizeStyles = {
    sm: "px-5 py-2 text-sm",
    md: "px-8 py-3 text-base",
    lg: "px-12 py-4 text-lg",
  };

  const variantStyles = {
    primary:
      "bg-charcoal text-white hover:bg-dark-charcoal hover:shadow-lg",
    secondary:
      "bg-warm-white text-charcoal hover:bg-light-gray hover:shadow-md",
    outline:
      "border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white",
    ghost:
      "text-charcoal hover:bg-warm-white",
    gold:
      "bg-gold text-white hover:bg-charcoal hover:shadow-lg",
  };

  const motionProps = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
  };

  const classes = cn(baseStyles, sizeStyles[size], variantStyles[variant], className);

  if (as === "a") {
    const { href, ...anchorProps } = rest as HTMLMotionProps<"a"> & {
      href: string;
    };

    return (
      <motion.a className={classes} href={href} {...motionProps} {...anchorProps}>
        {children}
      </motion.a>
    );
  }

  const buttonProps = rest as HTMLMotionProps<"button">;

  return (
    <motion.button
      className={classes}
      type={buttonProps.type ?? "button"}
      {...motionProps}
      {...buttonProps}
    >
      {children}
    </motion.button>
  );
}
