import Image, { ImageProps } from "next/image";
import { FC } from "react";
import { AiFillGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import CustomLink from "@/components/button/CustomLink";

type CardProps = {
  title: string;
  details: string;
  btnLabel?: string;
  techStack: string[];
  linkGithub: string;
  linkCode: string;
} & ImageProps;

export const Card: FC<CardProps> = ({
  title,
  details,
  btnLabel = "View",
  techStack,
  linkGithub,
  linkCode,
  ...rest
}) => {
  return (
    <div className="items-center md:flex md:min-h-full gap-20 my-10  dark:bg-gray-900">
      <div className="relative flex-1 w-auto h-80 justify-center items-center">
        <div className="flex w-auto  h-full">
          <Image {...rest} />
        </div>
      </div>
      <div className="flex-1 sm:mt-5">
        <div className="flex-col m-auto">
          <div className="text-center justify-center">
            <h2 className="text-base pb-2 font-semibold">{title}</h2>
            <h3 className=" text-base py-2">{details}</h3>
            <div className="flex font-semibold text-base justify-center py-2 ">
              {techStack.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}
            </div>
          </div>
          <div className="flex justify-center py-4 gap-11 ">
            <CustomLink
              link={linkGithub}
              label={"Code"}
              icon={<AiFillGithub className="cursor-pointer" />}
            />
            <CustomLink
              link={linkCode}
              label={"Live Demo"}
              icon={<FiExternalLink className="cursor-pointer" />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
