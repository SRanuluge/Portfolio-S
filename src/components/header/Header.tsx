"use client";
import { useContext, useState } from "react";
import Link from "next/link";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { MdOutlineMenuOpen } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { navList } from "@/data/Data";
import { ThemeContext } from "@/contexts/ThemeContext";
import { usePathname } from "next/navigation";

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
          <li className="md:ml-8 md:my-0 my-7 " key={list.id}>
            <Link
              onClick={handleLink}
              className={`hover:text-green-950-800 duration-500 ${
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
  const { toggleMood, mood } = useContext(ThemeContext);
  const [menu, toggleMenu] = useState(false);
  const pathName = usePathname();

  return (
    <nav
      className={`${
        pathName !== "/"
          ? mood == "dark"
            ? `bg-[#444]`
            : `bg-[#f3f3f3] shadow-sm`
          : "bg-none shadow-none"
      }  w-full top-0 fixed z-10  transition-all duration-100 ease-in `}
    >
      <div className="flex py-3 px-2 justify-between max-w-[1366px] m-auto ">
        <Link href={"/"}>
          <h1 className="text-md  ">Sanjeewa</h1>
        </Link>
        <ul className="flex items-center sm:gap-6">
          <li>
            <BsFillMoonStarsFill
              onClick={() => toggleMood()}
              className="cursor-pointer"
            />
          </li>

          <li className="md:hidden">
            {!menu ? (
              <MdOutlineMenuOpen
                onClick={() => toggleMenu(!menu)}
                className="cursor-pointer text-2xl"
              />
            ) : (
              <AiOutlineClose
                onClick={() => toggleMenu(!menu)}
                className="cursor-pointer text-2xl"
              />
            )}
          </li>
          <ul
            className={`${
              pathName === "/"
                ? `sm:bg-[#89786E]`
                : mood == "dark"
                ? "sm:bg-[#444]"
                : `sm:bg-[#f3f3f3]`
            } md:flex overflow-hidden md:items-center md:pb-0 pb-12 md:static sm:fixed w-full sm:w-full sm:h-1/4 md:z-auto sm:-z-50 right-0  md:w-auto md:pl-0 pl-9 transition-all duration-700 ease-in  ${
              menu ? "sm:top-[49px]" : "sm:top-[-700px]"
            }`}
          >
            <NavList navList={navList} handleLink={() => toggleMenu(false)} />
          </ul>
        </ul>
      </div>
    </nav>
  );
};
export default Header;
