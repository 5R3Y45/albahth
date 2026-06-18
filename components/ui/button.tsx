import * as React from "react";
import { cn } from "@/lib/utils";

const variants = {
  default: "bg-brand-blue text-white hover:bg-brand-navy",
  secondary: "border border-white bg-white text-brand-navy hover:bg-brand-gray",
  outline: "border border-brand-blue bg-white text-brand-blue hover:bg-brand-gray",
  gold: "bg-brand-gold text-brand-ink hover:bg-[#d97800]"
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: keyof typeof variants;
  size?: "default" | "lg";
  href?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "default", size = "default", asChild = false, children, ...props },
    ref
  ) => {
    const classes = cn(
      "inline-flex min-h-11 items-center justify-center gap-2 rounded px-5 py-3 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
      variants[variant],
      size === "lg" && "h-12 px-6 text-base",
      className
    );

    if (asChild && React.isValidElement(children)) {
      const child = children as React.ReactElement<{ className?: string }>;
      return React.cloneElement(child, {
        className: cn(classes, child.props.className)
      });
    }

    return (
      <button
        className={classes}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button };
