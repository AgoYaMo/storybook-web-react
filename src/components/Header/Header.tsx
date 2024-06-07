import {
  ComponentPropsWithRef,
  ComponentPropsWithoutRef,
  forwardRef,
  useCallback,
  useState,
} from "react";
import styles from "./Header.module.css";

export interface HeaderProps extends ComponentPropsWithRef<"header"> {
  logo?: {
    imgSrc?: string;
    url?: ComponentPropsWithoutRef<"a">;
  };
}

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
              <a {...logo.url}>
                <img src={logo.imgSrc} />
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
        <div
          className={`${styles.linksMenu} ${menuShowingInMobile ? styles.linksMenuShowing : styles.linksMenuNoShowing}`}
        >
          {children}
        </div>
      </header>
    );
  }
);
