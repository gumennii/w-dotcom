import Link from "next/link";
import { Container } from "../Container";
import { MaxWidth } from "@/utils/styling";
import { Button } from "../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Logo } from "../Logo";

export const Header = () => (
  <div className="border border-solid border-white px-8 text-primary">
    <Container maxWidth={MaxWidth.Large}>
      <div className="navbar px-0">
        <div className="navbar-start w-full">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost px-0 hover:bg-transparent lg:hidden">
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
            <ul
              tabIndex={0}
              className="dropdown-content menu menu-compact w-52 space-y-4 bg-primary p-6 text-white shadow"
            >
              <Logo className="mb-6 w-full text-center" color="light" />
              <li>Flag Football</li>
              <li>Basketball</li>
              <li>Volleyball</li>
              <li>Summer Camps</li>
              <li>Resources</li>
              <li>About Us</li>
              <li>Team Store</li>
            </ul>
          </div>
          <Link className="ml-8 lg:ml-0" href="/">
            <Logo className="ml-2" />
          </Link>
          <div className="hidden w-full justify-center lg:flex">
            <ul className="menu menu-horizontal shrink-0 gap-8 px-1">
              <li className="border-b-2 border-solid border-primary">Flag Football</li>
              <li>Basketball</li>
              <li>Volleyball</li>
              <li>Summer Camps</li>
              <li>Resources</li>
              <li>About Us</li>
              <li>Team Store</li>
            </ul>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="dropdown">
            <label tabIndex={1} className="flex items-center justify-center p-1 hover:cursor-pointer">
              <FontAwesomeIcon icon={faLocationDot} className="mr-1" />
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
              className="dropdown-content menu menu-compact w-52 space-y-4 bg-primary p-6 text-white shadow"
            >
              <li>California</li>
              <li>New York</li>
              <li>Boston</li>
            </ul>
          </div>
          <Button style="ghost" copy="Register" rounded className="border border-solid border-primary" />
          <Button style="secondary" copy="Log in" rounded />
        </div>
      </div>
    </Container>
  </div>
);
