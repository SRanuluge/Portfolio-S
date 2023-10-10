import Image from "next/image";

import img from "../../../../public/profile.jpg";
import { aboutMe } from "@/data/Constants";
import { AiOutlineDownload } from "react-icons/ai";
import { backEnd, education, experience, frontEnd } from "@/data/Data";
import Link from "next/link";

export default function About() {
  return (
    <div className="w-full h-full mt-16 justify-center sm:flex-col gap-2 max-w-4xl py-4">
      {/* <h3 className="font-semibold text-center md:text-2xl">About Me</h3> */}
      <div className="justify-center flex sm:flex-col gap-5 py-2  dark:bg-gray-900">
        <div className="flex sm:items-center justify-center flex-1">
          <Image
            width={250}
            height={250}
            src={img}
            alt="me"
            placeholder="blur"
            className="rounded-md object-contain"
          />
        </div>
        <div className="flex-1 items-center ">
          <p className="text-base py-2">{aboutMe}</p>
          <div className="py-2 w-[120px] border mt-2 hover:bg-[#c9c4c4]">
            <Link
              className="flex font-medium items-center justify-evenly"
              download
              href="/assets/SanjeewaR.pdf"
              target="_blank"
            >
              <span>
                {" "}
                <AiOutlineDownload />
              </span>
              <span>Resume</span>
            </Link>
          </div>
        </div>
      </div>
      <h3 className="font-semibold text-center py-8 md:text-2xl ">Skills</h3>
      <div className="justify-center flex sm:flex-col gap-5 py-2  dark:bg-gray-900">
        <div className="flex-col justify-center flex-1 border px-4 py-4 shadow-sm ">
          <h4 className="py-4 text-center font-semibold">Front-End</h4>
          <ul className="grid grid-cols-3 list-[square] list-inside ">
            {frontEnd.map((item, i) => {
              return (
                <li key={i} className="py-2 font-medium">
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex-col flex-1 border px-4 shadow-sm py-4">
          <h4 className="py-4 text-center font-semibold">Back-End</h4>
          <ul className="grid grid-cols-3 list-[square] list-inside">
            {backEnd.map((item, i) => {
              return (
                <li key={i} className="py-2 font-medium">
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <h3 className="font-semibold text-center pt-8 pb-10   md:text-2xl ">
        Education
      </h3>
      <div className="flex-col text-center py-4 flex-1 border px-4 shadow-sm  dark:bg-gray-900">
        <p className="py-2 font-medium ">{education.title}</p>
        <p className="pt-2 text-lg font-medium">{education.university}</p>
        <span className="text-lg ">{education.duration}</span>
      </div>
      <h3 className="font-semibold pt-8 pb-10 text-center md:text-2xl ">
        Experience
      </h3>
      <div className="py-6 grid grid-cols-2 flex-1 border px-4 shadow-sm sm:grid-cols-1 dark:bg-gray-900">
        {experience.map((exp, i) => {
          return (
            <div key={i} className="flex-col justify-center text-center py-6 ">
              <p className="py-2 font-medium ">{exp.title}</p>
              {exp.domains && (
                <p className="pt-2 text-lg">{`Domain(s): ${exp.domains}`}</p>
              )}
              <Link href={exp.company.link} className="hover:text-cyan-500">
                <p className="pt-2 underline">{exp.company.name}</p>
              </Link>
              <span className="pt-2 ">{exp.duration}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
