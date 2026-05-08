import React, { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import { Loader2 } from "lucide-react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "darkCard";
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
    
    const baseStyles = "inline-flex items-center justify-center font-medium transition-all active:scale-95 disabled:opacity-50 disabled:pointer-events-none rounded-lg";
    
    const variants = {
      primary: "bg-primary text-beige hover:bg-primary-dark",
      secondary: "border-2 border-primary text-primary hover:bg-primary/5",
      ghost: "text-primary hover:bg-primary/10",
      darkCard: "bg-white/10 text-white hover:bg-white/20 border border-white/20",
    };

    const sizes = {
      sm: "h-11 md:h-9 px-4 text-sm", // Mobile first: 44px min-height
      md: "h-12 md:h-10 px-6 text-base", // Mobile first: 48px
      lg: "h-14 md:h-12 px-8 text-lg", // Mobile first: 56px
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
