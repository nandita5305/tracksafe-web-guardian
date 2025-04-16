
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, FC, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const Button: FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) => {
  return (
    <button
      className={cn(
        "font-medium rounded-full transition-all duration-300 shadow-sm hover:shadow-md",
        {
          "bg-gradient text-white hover:opacity-90": variant === "primary",
          "button-gradient text-white hover:opacity-90": variant === "secondary",
          "bg-transparent border border-tracksafe-blue text-tracksafe-blue hover:bg-tracksafe-light": variant === "outline",
          "px-3 py-1 text-sm": size === "sm",
          "px-5 py-2": size === "md",
          "px-6 py-3 text-lg": size === "lg",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
