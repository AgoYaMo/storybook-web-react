import { ComponentPropsWithRef, forwardRef } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button<{
  $primary?: boolean,
  size?: 'small' | 'medium' | 'large'
}>`
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  ${({$primary}) => $primary ? `
    color: white;
    background-color: #1ea7fd;
  ` : `
    color: #333;
    background-color: transparent;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
  `}
  ${({size}) => {
    switch(size) {
    case 'small': 
      return `
        font-size: 12px;
        padding: 10px 16px;
      `;
    case 'large':
      return `
        font-size: 16px;
        padding: 12px 24px;
      `;
    default:
      return `
        font-size: 14px;
        padding: 11px 20px;
      `;
  }}}
`;

interface ButtonProps extends ComponentPropsWithRef<"button"> {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
}

/**
 * Primary UI component for user interaction
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  primary,
  size,
  type = 'button',
  ...props
}, ref) => {
  return (
    <StyledButton
      ref={ref}
      $primary={primary}
      size={size}
      type={type}
      {...props}
    >
    </StyledButton>
  );
});
