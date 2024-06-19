"use client";

import { PropsWithChildren, useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faChevronRight, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { genereateRandomId } from "@/utils/navigation";
import useWindowSize from "@/hooks/windowResize";
import { MaxWidth } from "@/utils/styling";
import cn from "@/utils/cn";
import "@/styles/nestedDropdown.css";
import { BarsMenuIcon, Button, Container, Logo, MenuDropdown } from "@/components/ui";
import Drawer from "./Drawer";
import MobileMenu from "./MobileMenu";
import { infoNavigationItems, menu } from "./menu";

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
    if (visible && width > 1180) {
      toggleHideMobileMenu();
    }
  });

  return (
    <Drawer
      className="z-20 overflow-hidden rounded"
      contentClassName={visible ? "fixed top-0" : ""}
      open={visible}
      onClickOverlay={toggleShowMobileMenu}
      side={<MobileMenu locations={locationsMenuList} toggleHideSide={toggleHideMobileMenu} />}
      end
    >
      <div className="fixed z-[100] w-full border border-solid border-white bg-white text-primary lg:px-8">
        <Container maxWidth={MaxWidth.Large}>
          <div className="navbar relative p-0">
            <div className="navbar-menu flex w-full items-center justify-between">
              <Link href={homeButton?.href ? homeButton?.href : "#"} className="mr-1 cursor-pointer">
                <Logo />
              </Link>
              <div className="mobile-menu-button z-30 flex-none">
                <label
                  htmlFor="mobile-menu-1"
                  onClick={toggleShowMobileMenu}
                  className="btn btn-ghost px-0 hover:bg-transparent min-[1180px]:hidden"
                >
                  <BarsMenuIcon className="h-8 w-8" />
                </label>
              </div>
              <div className="navbar-links max-h-16 w-full items-center justify-center">
                <ul className="menu menu-horizontal shrink-0 items-center gap-1 p-0 px-1">
                  {menu?.length > 0 &&
                    menu.map((menuItem, i) => {
                      const key = genereateRandomId(`${menuItem.name}_${i}`);
                      return (
                        <li key={key} className="group z-30 inline-block">
                          {menuItem.name !== "Home" && (
                            <>
                              <button
                                aria-haspopup="true"
                                aria-controls="menu"
                                tabIndex={i}
                                className="menu-link cursor-pointer outline-none focus:outline-none lg:my-3 lg:px-2"
                                onKeyDown={e => {
                                  if (e.key === "Enter") {
                                    push(menuItem.href ? menuItem.href : "#");
                                  }
                                }}
                              >
                                <Link href={menuItem.href} className="text-base">
                                  {menuItem.name}
                                </Link>
                              </button>
                              {menuItem.menu && (
                                <ul
                                  id="menu"
                                  aria-hidden="true"
                                  className="duration-400 absolute z-10 mt-2 max-h-[45.25rem] min-w-60 origin-top scale-0 transform rounded-lg bg-white px-0 py-2 shadow-md transition ease-in-out focus-within:scale-100 group-hover:scale-100"
                                >
                                  {menuItem.menu.map((item: MenuItem, j) => {
                                    const key = genereateRandomId(`${item.name}_${j}`);

                                    return (
                                      <li key={key} className="rounded-none hover:bg-primary hover:text-white">
                                        <div
                                          role="button"
                                          aria-haspopup="true"
                                          tabIndex={i}
                                          aria-controls={item.name}
                                          className={cn("flex w-full outline-none focus:outline-none", {
                                            "pointer-events-none": !item.href || item.href === "#",
                                          })}
                                        >
                                          <Link href={item.href ? item.href : "#"} className="flex w-full">
                                            <div className="flex w-full items-center justify-between gap-6">
                                              <div>{item.name}</div>
                                              <div>
                                                {item.menu && (
                                                  <FontAwesomeIcon icon={faChevronRight as IconProp} size="xs" />
                                                )}
                                              </div>
                                            </div>
                                          </Link>
                                        </div>
                                        {item.menu && (
                                          <ul
                                            id={item.name}
                                            aria-hidden="true"
                                            className="subitem duration-400 absolute right-0 top-0 z-20 m-0 min-w-60 origin-top-left rounded-lg bg-white px-0 py-2 shadow-md transition ease-in-out"
                                          >
                                            {item.menu?.map((subItem: MenuItem, idx: number) => {
                                              const key = genereateRandomId(`${subItem.name}_${idx}`);

                                              return (
                                                <li
                                                  key={key}
                                                  className="rounded-none text-primary hover:bg-primary hover:text-white"
                                                >
                                                  <div
                                                    role="button"
                                                    aria-haspopup="true"
                                                    tabIndex={i}
                                                    aria-controls={subItem.name}
                                                    className={cn("flex w-full outline-none focus:outline-none", {
                                                      "pointer-events-none": !subItem.href || subItem.href === "#",
                                                    })}
                                                  >
                                                    <Link
                                                      href={subItem.href ? subItem.href : "#"}
                                                      className="flex w-full"
                                                    >
                                                      <div className="flex w-full items-center justify-between gap-6">
                                                        <div>{subItem.name}</div>
                                                        <div>
                                                          {subItem.menu && (
                                                            <FontAwesomeIcon
                                                              icon={faChevronRight as IconProp}
                                                              size="xs"
                                                            />
                                                          )}
                                                        </div>
                                                      </div>
                                                    </Link>
                                                  </div>
                                                  {subItem?.menu && (
                                                    <ul
                                                      id={subItem.name}
                                                      aria-hidden="true"
                                                      className="subitem duration-400 absolute right-0 top-0 z-20 m-0 min-w-60 origin-top-left rounded-lg bg-white px-0 py-2 text-primary shadow-md transition ease-in-out"
                                                    >
                                                      {subItem.menu?.map((el: MenuItem, elIdx: number) => {
                                                        const key = genereateRandomId(`${el.name}_${elIdx}`);
                                                        return (
                                                          <li
                                                            key={key}
                                                            tabIndex={i}
                                                            className="text-primary hover:bg-primary hover:text-white"
                                                            onKeyDown={e => {
                                                              if (e.key === "Enter") {
                                                                push(el.href ? el.href : "#");
                                                              }
                                                            }}
                                                          >
                                                            <Link
                                                              href={el.href ? el.href : "#"}
                                                              className="flex h-full w-full items-center gap-6 rounded-none px-4 py-2"
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

            <div className="navbar-links gap-4">
              {/* Desktop Locations Dropdown */}
              <details className="dropdown">
                <summary tabIndex={8} className="relative flex items-center justify-center p-1 hover:cursor-pointer">
                  <FontAwesomeIcon icon={faLocationDot as IconProp} className="mr-1 h-4 w-4" />
                  <FontAwesomeIcon icon={faAngleDown as IconProp} color="#818389" className="mt-0.5" />
                </summary>
                <ul
                  tabIndex={8}
                  className="menu-compact menu dropdown-content left-auto right-0 top-8 z-10 block max-h-[26rem] gap-y-2 overflow-y-auto rounded-lg bg-white p-2 text-primary shadow-md"
                >
                  {locationsMenuList?.length > 0 &&
                    locationsMenuList.map((location: any, locationIdx: number) => {
                      const locationKey = genereateRandomId(`menu-${location.name}_${locationIdx}`);

                      return (
                        <li tabIndex={8} key={locationKey} className="flex w-[18.6rem] flex-col flex-wrap gap-y-1">
                          <MenuDropdown
                            label={<span>{location.name}</span>}
                            className="flex items-center justify-between rounded-md hover:bg-primary hover:text-white"
                          >
                            {location.menu?.length > 0 &&
                              location.menu?.map((subItem: any, subItemIdx: number) => {
                                const subItemKey = genereateRandomId(`${subItem.name}_${subItemIdx}`);

                                return (
                                  <li tabIndex={8} className="w-full" key={subItemKey}>
                                    <MenuDropdown
                                      label={<Link href={subItem.categoryHref}>{subItem.category}</Link>}
                                      className="flex items-center justify-between rounded-md hover:bg-primary hover:text-white"
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
                                                  className="flex items-center justify-between rounded-md hover:bg-primary hover:text-white"
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
                                                              className="rounded-md hover:bg-primary hover:text-white"
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
