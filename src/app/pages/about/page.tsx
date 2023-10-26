"use client";
import Image from "next/image";
import {
  MapPinIcon,
  BriefcaseIcon,
  BuildingLibraryIcon,
  AcademicCapIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid";
import profile from "../../../../public/profile.jpg";
import img from "../../../../public/bg-002.jpg";
import { aboutMe } from "@/data/Constants";
import { AiOutlineDownload } from "react-icons/ai";
import { backEnd, education, experience, frontEnd } from "@/data/Data";
import Link from "next/link";
import { useState } from "react";

export default function About() {
  const [showMore, setShowMore] = useState(false);
  return (
    <>
      <section className="relative w-screen h-[50vh] ">
        <Image
          src={img}
          alt="me"
          placeholder="blur"
          style={{
            objectFit: "cover",
          }}
          className="absolute h-full w-full top-0 bg-center"
        />
      </section>
      <section className="relative px-4">
        <div className="max-w-6xl mx-auto  ">
          <div className="relative  md:-mt-[140px] sm:-mt-[230px] flex-col w-full min-w-0  break-words rounded-3xl bg-gray-50 dark:bg-gray-900 h-fit shadow-xl shadow-gray-500/5">
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <div className="flex w-full justify-center px-4 lg:order-2 lg:w-3/12">
                  <div className="relative">
                    <div className="-mt-20 w-40">
                      <Image
                        src={profile}
                        alt="Profile picture"
                        className="h-full w-full shadow-xl rounded-full"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-10 flex w-full justify-center px-4 lg:order-3 lg:mt-0 lg:w-4/12 lg:justify-end lg:self-center">
                  <div className="py-2 w-[120px] border mt-2 ">
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
                <div className="w-full px-4 lg:order-1 lg:w-4/12">
                  <div className="flex justify-center py-4 pt-8 lg:pt-4">
                    {/* <div className="mr-4 p-3 text-center"> */}
                    {/* <span color="blue-gray" className="font-bold uppercase">
                        22
                      </span>
                      <span className="font-normal text-blue-gray-500">
                        Friends
                      </span>
                    </div>
                    <div className="mr-4 p-3 text-center">
                      <span color="blue-gray" className="font-bold uppercase">
                        10
                      </span>
                      <span className="font-normal text-blue-gray-500">
                        Photos
                      </span>
                    </div>
                    <div className="p-3 text-center lg:mr-4"></div> */}
                  </div>
                </div>
              </div>
              <div className="my-8 text-center">
                <span color="blue-gray" className="mb-2">
                  Sanjeewa Ranuluge
                </span>
                <div className="mb-8 flex items-center justify-center gap-2">
                  <MapPinIcon className="-mt-px h-4 w-4 " />
                  <span className="font-medium ">
                    Christchurch, New Zealand.
                  </span>
                </div>
                <div className="mb-2 flex items-center justify-center gap-2">
                  <BriefcaseIcon className="-mt-px h-4 w-4" />
                  <span className="font-medium ">Software Engineer</span>
                </div>
                <div className="mb-2 flex items-baseline  justify-center gap-2">
                  <div className="-mt-px h-4 w-4 mx-2">
                    <AcademicCapIcon className="w-full h-full sm:mx-2" />
                  </div>
                  <span className="font-medium">
                    BS.c Industrial Statistics and Mathematical Finance with
                    Computer Science
                  </span>
                </div>
                <div className="mb-2 flex items-center justify-center gap-2">
                  <BuildingLibraryIcon className="-mt-px h-4 w-4 " />
                  <Link
                    href={"https://cmb.ac.lk/"}
                    target="_blank"
                    className="hover:text-cyan-500"
                  >
                    <span className="font-medium ">
                      University of Colombo Sri Lanka
                    </span>
                  </Link>
                </div>
              </div>

              <div className="mb-10 border-t border-blue-gray-50 py-6 text-justify">
                <div className="mt-2 flex flex-wrap justify-center">
                  <div className="flex w-full flex-col items-center px-4 lg:w-9/12">
                    <span className="mb-8 font-normal">{aboutMe}</span>
                    <button
                      className="animate-bounce font-medium flex items-center border gap-2 py-2 px-2 w-auto"
                      onClick={() => setShowMore(!showMore)}
                    >
                      <span>
                        {" "}
                        <ChevronDownIcon className="-mt-px h-4 w-4" />
                      </span>
                      Show More
                    </button>
                  </div>
                </div>
              </div>
              {showMore && (
                <>
                  <div className="mb-10 border-t border-blue-gray-50 py-6 text-justify">
                    <h3 className="font-semibold text-center py-8 md:text-2xl ">
                      Skills
                    </h3>

                    <div className="justify-center flex sm:flex-col gap-5 py-2  dark:bg-gray-900">
                      <div className="flex-col justify-center flex-1 border px-4 py-4 shadow-sm ">
                        <h4 className="py-4 text-center font-semibold">
                          Front-End
                        </h4>

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
                        <h4 className="py-4 text-center font-semibold">
                          Back-End
                        </h4>
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
                  </div>
                  <div className="mb-10 border-t border-blue-gray-50 py-6 text-justify">
                    <h3 className="font-semibold text-center pt-8 pb-10   md:text-2xl ">
                      Education
                    </h3>
                    <div className="flex-col text-center py-4 flex-1 border px-4 shadow-sm  dark:bg-gray-900">
                      <p className="py-2 font-medium ">{education.title}</p>
                      <p className="pt-2 text-lg font-medium">
                        {education.university}
                      </p>
                      <span className="text-lg ">{education.duration}</span>
                    </div>
                  </div>
                  <div className="mb-10 border-t border-blue-gray-50 py-6 text-justify">
                    <h3 className="font-semibold pt-8 pb-10 text-center md:text-2xl ">
                      Experience
                    </h3>
                    <div className="py-6 grid grid-cols-2 flex-1 border px-4 shadow-sm sm:grid-cols-1 dark:bg-gray-900">
                      {experience.map((exp, i) => {
                        return (
                          <div
                            key={i}
                            className="flex-col justify-center text-center py-6 "
                          >
                            <p className="py-2 font-medium ">{exp.title}</p>
                            {exp.domains && (
                              <p className="pt-2 text-lg">{`Domain(s): ${exp.domains}`}</p>
                            )}
                            <Link
                              href={exp.company.link}
                              className="hover:text-cyan-500"
                            >
                              <p className="pt-2 underline">
                                {exp.company.name}
                              </p>
                            </Link>
                            <span className="pt-2 ">{exp.duration}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
