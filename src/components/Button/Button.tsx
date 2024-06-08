import { ComponentPropsWithRef, forwardRef, memo } from "react";
import styles from "./Button.module.css";

export interface ButtonProps extends ComponentPropsWithRef<"button"> {
  /**
   * Sets same border color as :hover
   */
  active?: boolean;
  /**
   * Sets border
   */
  square?: boolean;
  /**
   * Sets button's size
   */
  size?: "small" | "medium" | "large";
}

/**
 * Button
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      active = false,
      square = false,
      size = "medium",
      className = "",
      ...props
    },
    ref
  ) => (
    <button
      ref={ref}
      className={`${className} ${styles.button} ${styles[size]} ${active ? styles.active : ""} ${square ? styles.square : ""}`}
      {...props}
    ></button>
  )
);
Button.displayName = "Button";

export const MemodButton = memo(Button);
