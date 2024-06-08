import {
  ComponentPropsWithRef,
  ComponentPropsWithoutRef,
  forwardRef,
} from "react";
import styles from "./Header.module.css";

export interface HeaderProps extends ComponentPropsWithRef<"header"> {
  /**
   * Logo to show at left side
   */
  logo?: {
    /**
     * img tag's props
     */
    img?: ComponentPropsWithoutRef<"img">;
    /**
     * a tag's props
     */
    a?: ComponentPropsWithoutRef<"a">;
  };
}

/**
 * Header
 */
export const Header = forwardRef<HTMLHeadElement, HeaderProps>(
  ({ logo, children, className = "", ...props }, ref) => (
    <header ref={ref} className={`${className} ${styles.header}`} {...props}>
      <div className={styles.logo}>
        <div>
          {logo && (
            <a {...logo.a}>
              <img {...logo.img} />
            </a>
          )}
        </div>
      </div>
      {children && (
        <label className={styles.label}>
          <input type="checkbox"></input>
          <span className={styles.menuButton}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </label>
      )}
      <nav className={styles.linksMenu}>{children}</nav>
    </header>
  )
);
