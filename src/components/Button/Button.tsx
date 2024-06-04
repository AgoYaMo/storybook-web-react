import { ComponentPropsWithRef, forwardRef, memo } from "react";
import styled from "styled-components";
import "./Button.css";

const StyledButton = styled.button<{
  $active: boolean;
  $square: boolean;
  $size: "small" | "medium" | "large";
}>`
  border: solid var(--ago-button-border-size) transparent;
  border-radius: var(--ago-button-roder-radius);
  font-family: var(--ago-button-font);
  cursor: pointer;
  background-color: transparent;
  color: var(--ago-button-color);
  font-weight: bold;
  transition: 0.1s;
  ${({ $square }) =>
    $square && "border-color: var(--ago-button-border-inactive-color);"}
  &:hover {
    border-color: var(--ago-button-border-active-color);
  }
  ${({ $active }) =>
    $active && "border-color: var(--ago-button-border-active-color);"}
  ${({ $size }) => {
    switch ($size) {
      case "small":
        return `
        font-size: 12px;
        padding: 10px 16px;
      `;
      case "large":
        return `
        font-size: 16px;
        padding: 12px 24px;
      `;
      default:
        return `
        font-size: 14px;
        padding: 11px 20px;
      `;
    }
  }}
`;

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
 * Primary UI component for user interaction
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ active = false, square = false, size = "medium", ...props }, ref) => (
    <StyledButton
      ref={ref}
      $active={active}
      $square={square}
      $size={size}
      {...props}
    ></StyledButton>
  )
);
Button.displayName = "Button";

export const MemodButton = memo(Button);
