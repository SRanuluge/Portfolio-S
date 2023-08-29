import { Card } from "@/components/card/Card";
import { projects } from "@/data/Data";

const Projects = () => {
  return (
    <div className="flex-col pt-16 md:max-w-5xl">
      {projects.map(
        ({ title, description, img, techStack, linkGithub, linkCode }, i) => {
          return (
            <Card
              key={i}
              alt="image"
              className="object-fill w-full max-h-[350px] h-[350px]"
              src={img}
              title={title}
              details={description}
              techStack={techStack}
              linkGithub={linkGithub}
              linkCode={linkCode}
            />
          );
        }
      )}
    </div>
  );
};

export default Projects;