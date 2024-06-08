"use client";

import {
  ComponentPropsWithRef,
  ComponentPropsWithoutRef,
  forwardRef,
  useCallback,
  useState,
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
  ({ logo, children, className = "", ...props }, ref) => {
    const [menuShowingInMobile, setMenuShowingInMobile] = useState(false);
    const switchMenu = useCallback(
      () => setMenuShowingInMobile((old) => !old),
      []
    );

    return (
      <header ref={ref} className={`${className} ${styles.header}`} {...props}>
        <div>
          <div>
            {logo && (
              <a {...logo.a}>
                <img {...logo.img} />
              </a>
            )}
          </div>
          {children && (
            <button className={styles.menuButton} onClick={switchMenu}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          )}
        </div>
        <nav
          className={`${styles.linksMenu} ${menuShowingInMobile ? styles.linksMenuShowing : styles.linksMenuNoShowing}`}
        >
          {children}
        </nav>
      </header>
    );
  }
);
