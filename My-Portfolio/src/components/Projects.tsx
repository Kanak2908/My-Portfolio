import { projects } from "@/projects/project";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <div className="min-h-[80vh] w-full bg-[rgba(0,0,0,2)] flex justify-center">
      <div className="h-full w-full max-w-3xl flex flex-col items-center gap-4 my-8 sm:justify-center px-2">
        <h1 className="text-5xl text-white font-bold">Projects</h1>

        <div className="w-full flex flex-row flex-wrap gap-4 mt-4 lg:justify-between justify-center">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              img={project.image}
              title={project.name}
              description={project.description}
              skills={project.tags}
              source_code_link={project.source_code_link!}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({
  img,
  title,
  description,
  skills,
  source_code_link,
}: {
  img: StaticImageData;
  title: string;
  description: string;
  skills: string[];
  source_code_link: string;
}) => (
  <div className="w-[360px] h-[400px] bg-[hsla(0%,8%,0%,1%)] rounded-md flex flex-col items-center justify-between bg-[#0a0a0a] border-[1px] border-[rgba(255,255,255,0.1)] overflow-y-auto hover:scale-105 transition-all duration-300">
    <Link
      className="w-full h-full rounded-md flex flex-col justify-between gap-4 p-6"
      href={source_code_link}
      target="_blank"
    >
      <Image src={img} alt="project" className="h-3/5 w-full rounded-md " />
      <h1 className="text-white text-2xl font-bold">{title}</h1>
      <p className="text-[whitesmoke] text-sm">{description}</p>
      <div className="flex flex-row gap-4 flex-wrap">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="text-white bg-[rgba(0,0,0,2)] rounded-md px-2 py-1 text-xs border-[1px] border-[rgba(255,255,255,0.1)]"
          >
            {skill}
          </span>
        ))}
      </div>
    </Link>
  </div>
);

export default Projects;
