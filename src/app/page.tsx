"use client";
import Image from "next/image";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

import SF_image from "../../public/SF-02.png";
import classes from "@/app/page.module.css";

export default function Home() {
  return (
    <div className="items-center md:flex sm:pt-20 min-h-screen gap-5">
      <div className="relative flex-1 sm:max-w-md ">
        <Image
          src={SF_image}
          className={classes.im}
          style={{ width: "100%", objectFit: "contain" }}
          height={500}
          alt="logo"
        />
      </div>
      <div className="flex-1 sm:mt-5 ">
        <div className="flex flex-col">
          <div className="m-auto">
            <div className="text-center justify-center">
              <h2 className="text-2xl py-2 font-medium md:text-4xl">
                Sanjeewa Ranuluge
              </h2>
              <h3 className="text-1xl md:text-2xl">Software Engineer</h3>
              <p className="mx-auto text-base py-2 leading-8 ">
                {`<>javaScript</>`}
              </p>
            </div>
            <div className="text-5xl flex justify-evenly py-4 ">
              <AiFillLinkedin className="cursor-pointer" />
              <AiFillGithub className="cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
