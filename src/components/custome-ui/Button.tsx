import React from "react";
import clsx from "clsx";

interface ButtonProps {
  children?: React.ReactNode;
  bg?: string;
  textColor?: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  ariaLabel?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  bg = "bg-blue-500",
  textColor = "text-white",
  className = "",
  onClick,
  type = "button",
  ariaLabel,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(
        "px-4 py-2 rounded-full transition-transform transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2",
        bg,
        textColor,
        className
      )}
      aria-label={ariaLabel || (typeof children === "string" ? children : "Button")}
    >
      {children}
    </button>
  );
};

export default Button;
