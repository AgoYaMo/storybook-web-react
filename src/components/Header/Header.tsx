import {
  ComponentPropsWithRef,
  ComponentPropsWithoutRef,
  forwardRef,
  useCallback,
  useState,
} from "react";
import styled from "styled-components";
import "./Header.css";

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  padding: var(--ago-header-padding-y) var(--ago-header-padding-x);
  padding-bottom: 0;
  > div:first-of-type {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: var(--ago-header-padding-y);
    > div:first-of-type {
      height: var(--ago-header-image-size);
      width: var(--ago-header-image-size);
      a {
        cursor: pointer;
      }
      a,
      img {
        display: block;
        max-width: 100%;
        max-height: 100%;
      }
    }
  }
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    padding-bottom: var(--ago-header-padding-y);
    > div:first-of-type {
      padding-bottom: 0;
    }
  }
`;

const LinksMenu = styled.div<{
  $showing: boolean;
}>`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  gap: var(--ago-header-links-gap);
  transition: 0.5s;
  scrollbar-gutter: stable;
  ${({ $showing }) =>
    $showing
      ? "height: calc(100vh - var(--ago-header-image-size) - var(--ago-header-padding-y) * 3); margin-bottom: var(--ago-header-padding-y); overflow: auto;"
      : "height: 0;"}
  @media only screen and (min-width: 768px) {
    height: auto;
    flex-direction: row;
    margin-bottom: 0;
  }
`;

const MenuButton = styled.button`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: transparent;
  cursor: pointer;
  z-index: 0;
  padding-top: var(--ago-header-button-border-padding-y);
  padding-bottom: var(--ago-header-button-border-padding-y);
  border: solid var(--ago-header-button-border-size);
  border-radius: var(--ago-header-button-border-radius);
  width: var(--ago-header-button-size);
  height: var(--ago-header-button-size);
  > span {
    display: block;
    width: 100%;
    height: 15%;
    border-radius: var(--ago-header-button-border-radius);
    background-color: black;
  }
  ::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    background-color: #fff;
    opacity: 0.25;
  }
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

export interface HeaderProps extends ComponentPropsWithRef<"header"> {
  logo?: {
    imgSrc?: string;
    url?: ComponentPropsWithoutRef<"a">;
  };
}

export const Header = forwardRef<HTMLHeadElement, HeaderProps>(
  ({ logo, children, ...props }, ref) => {
    const [menuShowingInMobile, setMenuShowingInMobile] = useState(false);
    const switchMenu = useCallback(
      () => setMenuShowingInMobile((old) => !old),
      []
    );

    return (
      <StyledHeader ref={ref} {...props}>
        <div>
          <div>
            {logo && (
              <a {...logo.url}>
                <img src={logo.imgSrc} />
              </a>
            )}
          </div>
          {children && (
            <MenuButton onClick={switchMenu}>
              <span></span>
              <span></span>
              <span></span>
            </MenuButton>
          )}
        </div>
        <LinksMenu $showing={menuShowingInMobile}>{children}</LinksMenu>
      </StyledHeader>
    );
  }
);
