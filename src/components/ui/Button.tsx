import React, { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import { Loader2 } from "lucide-react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "darkCard";
type ButtonSize = "sm" | "md" | "lg";

interface BaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
}

export type ButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { as?: "button" };
export type AnchorProps = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { as: "a" };

type Props = ButtonProps | AnchorProps;

export const Button = React.forwardRef<HTMLElement, Props>(
  ({ variant = "primary", size = "md", isLoading = false, className = "", children, ...props }, ref) => {
    
    const baseStyles = "inline-flex items-center justify-center whitespace-nowrap font-medium transition-all active:scale-95 disabled:opacity-50 disabled:pointer-events-none rounded-lg text-center leading-normal";
    
    const variants = {
      primary: "bg-primary text-white hover:bg-primary-dark",
      secondary: "border-2 border-primary text-primary hover:bg-primary/5",
      outline: "border border-primary/20 text-primary hover:bg-primary/5",
      ghost: "text-primary hover:bg-primary/10",
      darkCard: "bg-white/10 text-white hover:bg-white/20 border border-white/20",
    };

    const sizes = {
      sm: "min-h-[2.5rem] px-4 py-2 text-sm", // 40px min-height
      md: "min-h-[2.75rem] px-5 py-2.5 text-sm md:text-base", // 44px min-height
      lg: "min-h-[3rem] px-6 py-3 text-base md:text-lg", // 48px min-height
    };

    const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    if (props.as === "a") {
      const { as, ...anchorProps } = props as AnchorProps;
      return (
        <a ref={ref as React.Ref<HTMLAnchorElement>} className={combinedClassName} {...anchorProps}>
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {children}
        </a>
      );
    }

    const { as, ...buttonProps } = props as ButtonProps;
    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={combinedClassName}
        disabled={buttonProps.disabled || isLoading}
        {...buttonProps}
      >
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
