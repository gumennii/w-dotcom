import React from "react";
import Link from "next/link";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { genereateRandomId } from "@/utils/navigation";
import { menu } from "./menu";
import { Logo } from "../Logo";
import MenuDropdown from "../Menu/MenuDropdown";
import { Button } from "../Button";

type MenuItem = {
  name: string;
  href: string;
};

type MenuCategory = {
  name: string;
  menu: (MenuItem | MenuCategory)[] | unknown;
  category: string;
  categoryHref: string;
};

export type LocationItem = {
  name: string;
  menu: (MenuItem | MenuCategory)[] | unknown;
};

export type LocationStructure = LocationItem[];

interface MobileMenuProps {
  locations: LocationStructure;
  toggleHideSide: () => void;
}

const MobileMenu = ({ locations, toggleHideSide }: MobileMenuProps) => {
  return (
    <ul className="menu p-0 w-full min-h-full bg-white text-base-content overflow-y-auto">
      {menu?.length > 0 &&
        menu.map((menuItem: any, i) => {
          const menuItemKey = genereateRandomId(`${menuItem.name}_${i}`);

          return (
            <li tabIndex={8} key={menuItemKey} className="w-full flex flex-col gap-y-1">
              {menuItem.name === "Home" && (
                <div
                  key={menuItemKey}
                  className="w-full flex items-center justify-between mb-2 text-left border border-neutral-300 border-r-0 border-t-0 border-l-0"
                >
                  <Link href={menuItem.href ? menuItem.href : "#"}>
                    <Logo />
                  </Link>
                  <label
                    htmlFor="mobile-menu-1"
                    onClick={toggleHideSide}
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
              )}

              {menuItem.name !== "Home" && menuItem.menu && (
                <MenuDropdown
                  label={<span>{menuItem.name}</span>}
                  className="flex items-center justify-between hover:bg-primary rounded-md hover:text-white"
                >
                  {menuItem.menu?.map((subItem: any, subItemIdx: number) => {
                    const subItemKey = genereateRandomId(`${subItem.name}_${subItemIdx}`);

                    return (
                      <li className="w-full" key={subItemKey}>
                        {subItem.menu?.length > 0 ? (
                          <MenuDropdown
                            label={<Link href={subItem.href ? subItem.href : "#"}>{subItem.name}</Link>}
                            className="flex items-center justify-between hover:bg-primary rounded-md hover:text-white"
                          >
                            {subItem.menu?.map((nestedSubItem: any, nestedSubItemIdx: number) => {
                              return (
                                <li key={genereateRandomId(`${nestedSubItem.name}_${nestedSubItemIdx}`)}>
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
                                            (item: { name: string; href: string }, itemIdx: number) => (
                                              <li
                                                key={genereateRandomId(`${item.name}_${itemIdx}`)}
                                                className="hover:bg-primary rounded-md hover:text-white"
                                              >
                                                <Link href={item.href ? item.href : "#"}>{item.name}</Link>
                                              </li>
                                            )
                                          )}
                                      </ul>
                                    </MenuDropdown>
                                  ) : (
                                    <Link
                                      href={nestedSubItem.href ? nestedSubItem.href : "#"}
                                      className="hover:bg-primary hover:text-white"
                                    >
                                      {nestedSubItem.name}
                                    </Link>
                                  )}
                                </li>
                              );
                            })}
                          </MenuDropdown>
                        ) : (
                          <Link href={subItem.href ? subItem.href : "#"} className="hover:bg-primary hover:text-white">
                            {subItem.name}
                          </Link>
                        )}
                      </li>
                    );
                  })}
                </MenuDropdown>
              )}
              {menuItem.name !== "Home" && !menuItem.menu && (
                <Link href={menuItem.href ? menuItem.href : "#"} className="hover:bg-primary hover:text-white">
                  {menuItem.name}
                </Link>
              )}
            </li>
          );
        })}

      <div className="flex justify-end w-full px-6 py-4 mt-4 text-left border border-neutral-300 border-r-0 border-b-0 border-l-0">
        <details className="dropdown absolute w-full left-0">
          <summary tabIndex={1} className="flex pl-6 items-center justify-start py-4 hover:cursor-pointer">
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
            tabIndex={1}
            className="dropdown-content bg-white menu menu-compact w-full p-0 pt-2 text-primary grid grid-cols-1 gap-y-1 overflow-y-auto"
          >
            {locations.map((location: any, locIdx: number) => {
              const locationKey = genereateRandomId(`menu-${location.name}_${locIdx}`);
              return (
                <li tabIndex={8} key={locationKey} className="w-full lg:w-[18.6rem] flex flex-col gap-y-1">
                  <MenuDropdown
                    label={<span>{location.name}</span>}
                    className="flex items-center justify-between hover:bg-primary rounded-md hover:text-white"
                  >
                    {location.menu?.map((subItem: any, subItemIdx: number) => {
                      const subItemKey = genereateRandomId(`${subItem.name}_${subItemIdx}`);
                      return (
                        <li className="w-full" key={subItemKey}>
                          <MenuDropdown
                            label={<Link href={subItem.categoryHref}>{subItem.category}</Link>}
                            className="flex items-center justify-between hover:bg-primary rounded-md hover:text-white"
                          >
                            {subItem.menu?.map((nestedSubItem: any, nestedSubItemIdx: number) => {
                              return (
                                <li key={genereateRandomId(`${nestedSubItem.name}_${nestedSubItemIdx}`)}>
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
                                            (item: { name: string; href: string }, itemIdx: number) => (
                                              <li
                                                key={genereateRandomId(`${item.name}_${itemIdx}`)}
                                                className="hover:bg-primary rounded-md hover:text-white"
                                              >
                                                <Link href={item.href ? item.href : "#"}>{item.name}</Link>
                                              </li>
                                            )
                                          )}
                                      </ul>
                                    </MenuDropdown>
                                  ) : (
                                    <Link href={nestedSubItem.href ? nestedSubItem.href : "#"}>
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
        <div className="flex gap-4">
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
    </ul>
  );
};

export default MobileMenu;
