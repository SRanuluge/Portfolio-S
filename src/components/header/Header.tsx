"use client";
import { useContext, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { navList } from "@/data/Data";
import { ThemeContext } from "@/contexts/ThemeContext";
import { usePathname } from "next/navigation";
import logo from "../../../public/logo-s.jpg";

interface ListProps {
  id: string;
  name: string;
  link: string;
}
interface NaveListProps {
  navList: ListProps[];
  handleLink(): void;
}

const NavList = ({ navList, handleLink }: NaveListProps) => {
  const pathName = usePathname();
  return (
    <>
      {navList.map((list) => {
        return (
          <li className="md:ml-8 md:my-0 my-3" key={list.id}>
            <Link
              onClick={handleLink}
              className={`hover:text-green-950-800 duration-100 ${
                pathName == list.link ? `text-cyan-500` : ``
              }`}
              href={list.link}
            >
              {list.name}
            </Link>
          </li>
        );
      })}
    </>
  );
};

const Header = () => {
  const { toggleMood } = useContext(ThemeContext);
  const [menu, toggleMenu] = useState(false);

  return (
    <nav className={`fixed w-full z-20 top-0 left-0 `}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex md:flex-1">
          <Link href="/" replace>
            <Image
              src={logo}
              className=" rounded-2xl"
              width={30}
              height={12}
              alt="logo"
            />
          </Link>
        </div>
        <div className="flex gap-4 bg items-center md:order-2 md:flex-1">
          <BsFillMoonStarsFill
            onClick={() => toggleMood()}
            className="cursor-pointer md:ml-7"
          />
          <button
            onClick={() => toggleMenu(!menu)}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        <div
          className={`items-center justify-between ${
            menu ? "visible" : "hidden"
          } w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul className="flex  flex-col p-4 md:p-0 mt-4 font-medium  rounded-lg sm:bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0  sm:dark:bg-gray-900">
            <NavList navList={navList} handleLink={() => toggleMenu(false)} />
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Header;
