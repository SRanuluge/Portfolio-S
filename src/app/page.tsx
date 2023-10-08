import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import CustomLink from "@/components/button/CustomLink";
import { linkGithub, linkLinkedIn } from "@/data/Data";
import { BgOpacity } from "@/components/BgOpacity";

export default function Home() {
  return (
    <>
      <div className="absolute self-center top-0 -z-0 h-screen w-full bg-[url('../../public/bg-001.jpg')] bg-cover bg-center" />
      <BgOpacity />
      <div className="items-center md:flex sm:flex  w-full min-h-screen z-0 gap-5">
        <div className="md:flex-1 " />
        <div className="flex-1">
          <div className="flex flex-col">
            <div className="m-auto">
              <div className="text-center justify-center">
                <h2 className="text-2xl py-2 font-medium md:text-4xl">
                  Sanjeewa Ranuluge
                </h2>
                <h3 className="text-1xl md:text-2xl">Software Engineer</h3>
                <p className="mx-auto text-base py-2 leading-8 ">
                  {`javaScript | React | PHP | python`}
                </p>
              </div>
              <div className="flex justify-center gap-4 py-4 ">
                <CustomLink
                  link={linkLinkedIn}
                  label={""}
                  icon={<AiFillLinkedin className="cursor-pointer text-5xl" />}
                />
                <CustomLink
                  link={linkGithub}
                  label={""}
                  icon={<AiFillGithub className="cursor-pointer text-5xl" />}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
