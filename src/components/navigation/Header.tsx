"use client";

import { PropsWithChildren, useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { genereateRandomId } from "@/utils/navigation";
import useWindowSize from "@/hooks/windowResize";
import { MaxWidth } from "@/utils/styling";
import { Container } from "../Container";
import { Button } from "../Button";
import { Logo } from "../Logo";
import { infoNavigationItems, menu } from "./menu";
import MenuDropdown from "../Menu/MenuDropdown";
import Drawer from "./Drawer";
import MobileMenu from "./MobileMenu";
import "@/styles/nestedDropdown.css";

type MenuItem = {
  name: string;
  href?: string; // href is optional
  menu?: MenuItem[]; // menu is optional and recursive
};

export const Header = ({ children }: PropsWithChildren) => {
  const { push } = useRouter();
  const [width] = useWindowSize();

  const homeButton = menu.filter(item => item.name.toLowerCase() === "home")[0];

  const filteredLocations = menu.filter(item => !infoNavigationItems.includes(item.name));

  const locationsLinks = filteredLocations.map(location => {
    const transformedLocations =
      location.menu &&
      location?.menu?.map(menuItem => {
        return {
          ...menuItem,
          category: location.name,
          categoryHref: location?.href,
        };
      });

    return transformedLocations?.flat();
  });

  const groupedByLocation = locationsLinks.flat().reduce((result: any, currentValue: any) => {
    (result[currentValue["name"]] = result[currentValue["name"]] || []).push(currentValue);
    return result;
  }, {});

  const locationsMenuList = Object.entries(groupedByLocation)
    .map(item => {
      return {
        name: item[0],
        menu: item[1],
      };
    })
    .sort((a, b) => a.name.localeCompare(b.name));

  const [visible, setVisible] = useState(false);

  const toggleShowMobileMenu = useCallback(() => {
    setVisible(true);
  }, []);

  const toggleHideMobileMenu = useCallback(() => {
    setVisible(false);
  }, []);

  useEffect(() => {
    if (visible && width > 1024) {
      toggleHideMobileMenu();
    }
  });

  return (
    <Drawer
      className="rounded overflow-hidden z-20"
      contentClassName={visible ? "fixed top-0" : ""}
      open={visible}
      onClickOverlay={toggleShowMobileMenu}
      side={<MobileMenu locations={locationsMenuList} toggleHideSide={toggleHideMobileMenu} />}
      end
    >
      <div className="border border-solid border-white text-primary lg:px-8">
        <Container maxWidth={MaxWidth.Large}>
          <div className="navbar p-0 relative">
            <div className="flex items-center justify-between w-full lg:justify-start">
              <Link href={homeButton?.href ? homeButton?.href : "#"} className="mr-1 cursor-pointer">
                <Logo />
              </Link>
              <div className="flex-none lg:hidden z-30">
                <label
                  htmlFor="mobile-menu-1"
                  onClick={toggleShowMobileMenu}
                  className="btn btn-ghost px-0 hover:bg-transparent lg:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                  </svg>
                </label>
              </div>
              <div className="hidden w-full justify-center lg:flex items-center">
                <ul className="menu menu-horizontal items-center shrink-0 gap-1 p-0 px-1">
                  {menu?.length > 0 &&
                    menu.map((menuItem, i) => {
                      const key = genereateRandomId(`${menuItem.name}_${i}`);
                      return (
                        <li key={key} className="group inline-block">
                          {menuItem.name !== "Home" && (
                            <>
                              <button
                                aria-haspopup="true"
                                aria-controls="menu"
                                tabIndex={i}
                                className="outline-none focus:outline-none menu-link lg:p-2 lg:my-4 cursor-pointer"
                                onKeyDown={e => {
                                  if (e.key === "Enter") {
                                    push(menuItem.href ? menuItem.href : "#");
                                  }
                                }}
                              >
                                <Link href={menuItem.href}>{menuItem.name}</Link>
                              </button>
                              {menuItem.menu && (
                                <ul
                                  id="menu"
                                  aria-hidden="true"
                                  className="bg-white rounded-lg max-h-[45.25rem] shadow-md transform scale-0 focus-within:scale-100 group-hover:scale-100 absolute mt-1 transition duration-400 ease-in-out origin-top min-w-60 py-2 px-0 z-10"
                                >
                                  {menuItem.menu.map((item: MenuItem, j) => {
                                    const key = genereateRandomId(`${item.name}_${j}`);

                                    return (
                                      <li key={key} className="hover:bg-primary hover:text-white rounded-none">
                                        <div
                                          role="button"
                                          aria-haspopup="true"
                                          tabIndex={i}
                                          aria-controls={item.name}
                                          className="w-full flex outline-none focus:outline-none"
                                        >
                                          <Link href={item.href ? item.href : "#"} className="flex w-full">
                                            <div className="w-full flex items-center justify-between gap-6">
                                              <div>{item.name}</div>
                                              <div>
                                                {item.menu && <FontAwesomeIcon icon={faChevronRight} size="xs" />}
                                              </div>
                                            </div>
                                          </Link>
                                        </div>
                                        {item.menu && (
                                          <ul
                                            id={item.name}
                                            aria-hidden="true"
                                            className="subitem bg-white rounded-lg absolute top-0 right-0 shadow-md transition duration-400 ease-in-out origin-top-left m-0 py-2 px-0 min-w-60 z-20"
                                          >
                                            {item.menu?.map((subItem: MenuItem, idx: number) => {
                                              const key = genereateRandomId(`${subItem.name}_${idx}`);

                                              return (
                                                <li
                                                  key={key}
                                                  className="text-primary hover:bg-primary hover:text-white rounded-none"
                                                >
                                                  <div
                                                    role="button"
                                                    aria-haspopup="true"
                                                    tabIndex={i}
                                                    aria-controls={subItem.name}
                                                    className="w-full flex outline-none focus:outline-none"
                                                  >
                                                    <Link
                                                      href={subItem.href ? subItem.href : "#"}
                                                      className="flex w-full"
                                                    >
                                                      <div className="w-full flex items-center justify-between gap-6">
                                                        <div>{subItem.name}</div>
                                                        <div>
                                                          {subItem.menu && (
                                                            <FontAwesomeIcon icon={faChevronRight} size="xs" />
                                                          )}
                                                        </div>
                                                      </div>
                                                    </Link>
                                                  </div>
                                                  {subItem?.menu && (
                                                    <ul
                                                      id={subItem.name}
                                                      aria-hidden="true"
                                                      className="subitem text-primary bg-white rounded-lg absolute top-0 right-0 shadow-md transition duration-400 ease-in-out origin-top-left m-0 py-2 px-0 min-w-60 z-20"
                                                    >
                                                      {subItem.menu?.map((el: MenuItem, elIdx: number) => {
                                                        const key = genereateRandomId(`${el.name}_${elIdx}`);
                                                        return (
                                                          <li
                                                            key={key}
                                                            tabIndex={i}
                                                            className="text-primary hover:text-white hover:bg-primary"
                                                            onKeyDown={e => {
                                                              if (e.key === "Enter") {
                                                                push(el.href ? el.href : "#");
                                                              }
                                                            }}
                                                          >
                                                            <Link
                                                              href={el.href ? el.href : "#"}
                                                              className="w-full h-full flex items-center gap-6 px-4 py-2 rounded-none"
                                                            >
                                                              <span>{el.name}</span>
                                                            </Link>
                                                          </li>
                                                        );
                                                      })}
                                                    </ul>
                                                  )}
                                                </li>
                                              );
                                            })}
                                          </ul>
                                        )}
                                      </li>
                                    );
                                  })}
                                </ul>
                              )}
                            </>
                          )}
                        </li>
                      );
                    })}
                </ul>
              </div>
            </div>

            <div className="hidden lg:flex gap-4">
              {/* Desktop Locations Dropdown */}
              <details className="dropdown">
                <summary tabIndex={8} className="flex items-center justify-center p-1 hover:cursor-pointer relative">
                  <FontAwesomeIcon icon={faLocationDot} className="mr-1 w-4 h-4" />
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                    <path
                      d="M13.1673 6.85352L8.50065 11.5202L3.83398 6.85352"
                      stroke="#818389"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </summary>
                <ul
                  tabIndex={8}
                  className="dropdown-content menu menu-compact p-2 bg-white text-primary rounded-lg shadow-md z-10 block gap-y-2 max-h-[26rem] left-auto top-8 right-0 overflow-y-auto"
                >
                  {locationsMenuList?.length > 0 &&
                    locationsMenuList.map((location: any, locationIdx: number) => {
                      const locationKey = genereateRandomId(`menu-${location.name}_${locationIdx}`);

                      return (
                        <li tabIndex={8} key={locationKey} className="w-[18.6rem] flex flex-col flex-wrap gap-y-1">
                          <MenuDropdown
                            label={<span>{location.name}</span>}
                            className="flex items-center justify-between hover:bg-primary rounded-md hover:text-white"
                          >
                            {location.menu?.length > 0 &&
                              location.menu?.map((subItem: any, subItemIdx: number) => {
                                const subItemKey = genereateRandomId(`${subItem.name}_${subItemIdx}`);

                                return (
                                  <li tabIndex={8} className="w-full" key={subItemKey}>
                                    <MenuDropdown
                                      label={<Link href={subItem.categoryHref}>{subItem.category}</Link>}
                                      className="flex items-center justify-between hover:bg-primary rounded-md hover:text-white"
                                    >
                                      {subItem.menu?.length > 0 &&
                                        subItem.menu?.map((nestedSubItem: any, nestedSubItemIdx: number) => {
                                          const nestedSubItemKey = genereateRandomId(
                                            `${nestedSubItem.name}_${nestedSubItemIdx}`
                                          );

                                          return (
                                            <li tabIndex={8} key={nestedSubItemKey}>
                                              {nestedSubItem.menu?.length > 0 ? (
                                                <MenuDropdown
                                                  label={
                                                    <Link href={nestedSubItem.href ? nestedSubItem.href : "#"}>
                                                      {nestedSubItem.name}
                                                    </Link>
                                                  }
                                                  className="flex items-center justify-between hover:bg-primary rounded-md hover:text-white"
                                                >
                                                  <ul>
                                                    {nestedSubItem.menu?.length > 0 &&
                                                      nestedSubItem.menu?.map(
                                                        (item: { name: string; href: string }, itemIdx: number) => {
                                                          const itemKey = genereateRandomId(`${item.name}_${itemIdx}`);

                                                          return (
                                                            <li
                                                              key={itemKey}
                                                              tabIndex={8}
                                                              className="hover:bg-primary rounded-md hover:text-white"
                                                            >
                                                              <Link href={item.href ? item.href : "#"}>
                                                                {item.name}
                                                              </Link>
                                                            </li>
                                                          );
                                                        }
                                                      )}
                                                  </ul>
                                                </MenuDropdown>
                                              ) : (
                                                <Link tabIndex={8} href={nestedSubItem.href ? nestedSubItem.href : "#"}>
                                                  {nestedSubItem.name}
                                                </Link>
                                              )}
                                            </li>
                                          );
                                        })}
                                    </MenuDropdown>
                                  </li>
                                );
                              })}
                          </MenuDropdown>
                        </li>
                      );
                    })}
                </ul>
              </details>
              <Button
                style="ghost"
                copy="Register"
                rounded
                className="border border-solid border-primary"
                href="https://www.nextlevelsports.com/Default.aspx?tabid=311928"
              />
              <Button
                style="secondary"
                copy="Log in"
                rounded
                href="https://www.nextlevelsports.com/Default.aspx?tabid=311928&isLogin=True"
              />
            </div>
          </div>
        </Container>
      </div>
      {children}
    </Drawer>
  );
};
