import { Card } from "@/components/card/Card";
import { projects } from "@/data/Data";
import Image from "next/image";
import img from "../../../../public/bg-002.jpg";

const Projects = () => {
  return (
    <>
      <section className="relative w-screen h-[50vh]">
        <Image
          src={img}
          alt="me"
          placeholder="blur"
          style={{
            objectFit: "cover",
          }}
          className="absolute h-full w-full top-0  bg-center"
        />
      </section>
      <section className="relative px-4 flex-col md:-mt-[180px] sm:-mt-[230px]  md:max-w-5xl  ">
        {projects.map(
          ({ title, description, img, techStack, linkGithub, linkCode }, i) => {
            return (
              <Card
                key={i}
                alt="image"
                className="object-contain"
                src={img}
                fill
                priority
                placeholder="blur"
                title={title}
                details={description}
                techStack={techStack}
                linkGithub={linkGithub}
                linkCode={linkCode}
              />
            );
          }
        )}
      </section>
    </>
  );
};

export default Projects;
