import Link from "next/link";
import { Container } from "../Container";
import { MaxWidth } from "@/utils/styling";
import { Button } from "../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Logo } from "../Logo";

const locations = [
  "Arizona",
  "California",
  "East Bay",
  "North Bay",
  "Peninsula/SF",
  "South Bay",
  "Sacramento Region",
  "Monterey",
  "Central Valley",
  "Central Coast",
  "Southern California",
  "Colorado",
  "Georgia",
  "Iowa",
  "Louisiana",
  "Montana",
  "Nebraska",
  "Nevada",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Tennessee",
  "Texas",
  "Austin Metro",
  "DFW Metro",
  "Houston Metro",
  "Utah",
  "Washington",
];

export const Header = () => (
  <div className="border border-solid border-white text-primary lg:px-8">
    <Container maxWidth={MaxWidth.Large}>
      <div className="navbar p-0 relative">
        <div className="flex items-center justify-between w-full lg:justify-start">
          <Link href="/">
            <Logo />
          </Link>
          <div className="hidden w-full justify-center lg:flex">
            <ul className="menu menu-horizontal shrink-0 gap-1 p-0 px-1">
              <li>
                <Link href="/program/2024-advanced-volleyball-tracy-hs" className="menu-link active">
                  Flag Football
                </Link>
              </li>
              <li>
                <Link href="https://www.nextlevelsports.com/Default.aspx?tabid=863218" className="menu-link">
                  Basketball
                </Link>
              </li>
              <li>
                <Link href="https://www.nextlevelsports.com/Default.aspx?tabid=995920" className="menu-link">
                  Volleyball
                </Link>
              </li>
              <li>
                <Link href="https://www.nextlevelsports.com/Default.aspx?tabid=946555" className="menu-link">
                  Summer Camps
                </Link>
              </li>
              <li>
                <Link href="https://www.nextlevelsports.com/Default.aspx?tabid=870019s" className="menu-link">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="https://www.nextlevelsports.com/Default.aspx?tabid=324054" className="menu-link">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="https://store.nextlevelsports.com" className="menu-link">
                  Team Store
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="hidden lg:flex gap-4">
          <div className="dropdown">
            <label tabIndex={1} className="flex items-center justify-center p-1 hover:cursor-pointer">
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
            </label>
            <ul
              tabIndex={1}
              className="dropdown-content menu menu-compact w-max p-2 bg-white text-primary rounded-lg shadow-md z-10 grid grid-cols-2 left-auto right-0"
            >
              {locations.sort().map(location => (
                <li key={`menu-${location}`}>
                  <Link
                    href="https://store.nextlevelsports.com"
                    className="hover:bg-primary rounded-md hover:text-white px-4 py-2"
                  >
                    {location}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
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
        <div className="z-20 drawer drawer-end absolute text-right lg:hidden">
          <input id="mobile-menu-1" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content z-30">
            <label htmlFor="mobile-menu-1" className="btn btn-ghost px-0 hover:bg-transparent lg:hidden">
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
          <div className="drawer-side">
            <label htmlFor="mobile-menu-1" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu p-0 w-full min-h-full bg-white text-base-content">
              <div className="w-full mb-2 text-left border border-neutral-300 border-r-0 border-t-0 border-l-0">
                <Link className="block pl-6" href="/">
                  <Logo />
                </Link>
              </div>
              <li>
                <Link href="/program/2024-advanced-volleyball-tracy-hs" className="mob-link active">
                  Flag Football
                </Link>
              </li>
              <li>
                <Link href="https://www.nextlevelsports.com/Default.aspx?tabid=863218" className="mob-link">
                  Basketball
                </Link>
              </li>
              <li>
                <Link href="https://www.nextlevelsports.com/Default.aspx?tabid=995920" className="mob-link">
                  Volleyball
                </Link>
              </li>
              <li>
                <Link href="https://www.nextlevelsports.com/Default.aspx?tabid=946555" className="mob-link">
                  Summer Camps
                </Link>
              </li>
              <li>
                <Link href="https://www.nextlevelsports.com/Default.aspx?tabid=870019s" className="mob-link">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="https://www.nextlevelsports.com/Default.aspx?tabid=324054" className="mob-link">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="https://store.nextlevelsports.com" className="mob-link">
                  Team Store
                </Link>
              </li>
              <div className="flex justify-end w-full px-6 py-4 mt-4 text-left border border-neutral-300 border-r-0 border-b-0 border-l-0">
                <div className="dropdown absolute w-full left-0">
                  <label tabIndex={1} className="flex pl-6 items-center justify-start pt-4 hover:cursor-pointer">
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
                  </label>
                  <ul
                    tabIndex={1}
                    className="dropdown-content menu menu-compact w-full p-0 pt-6 text-primary grid grid-cols-2"
                  >
                    {locations.sort().map(location => (
                      <li key={`menu-${location}`} className="hover:bg-primary rounded-md hover:text-white">
                        <Link href="https://store.nextlevelsports.com" className="px-4 py-2">
                          {location}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
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
          </div>
        </div>
      </div>
    </Container>
  </div>
);
