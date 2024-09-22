// next
import fs from "fs";
import path from "path";

// components
import ProjectCard from "@/components/molecules/ProjectCard";
import { IProject } from "@/common/interfaces/project.interface";

export default function ProjectSection() {
  // get all the json files from the projects folder
  const projectJsonFiles = fs.readdirSync(
    path.join(process.cwd(), "src", "data", "parties")
  );

  let projects: IProject[] = [];

  for (const file of projectJsonFiles) {
    // file is the filename of the a json file that is a array of projects
    // need to take that array and combine it with the projects array

    const fileData = fs.readFileSync(
      path.join(process.cwd(), "src", "data", "parties", file),
      "utf-8"
    );

    const fileProjects: IProject[] = JSON.parse(fileData);

    projects = [...projects, ...fileProjects];
  }

  const sort = (a: IProject, b: IProject) => {
    // ratings with undefined should be at the end
    if (!a.rating) return 1;
    if (!b.rating) return -1;

    return a.rating - b.rating;
  };

  return (
    <div className="px-4 sm:px-8 mt-6 lg:px-20">
      <div className="flex flex-col gap-3 mb-5">
        <div className="text-white text-3xl font-bold">i like to build.</div>
        <div
          className="h-1"
          style={{
            background: `linear-gradient(90deg, #74EBD5 0%, #9FACE6 100%)`,
          }}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-20">
        {projects.sort(sort).map((project: IProject) => {
          if (project.hidden) return null;
          return <ProjectCard key={project.title} {...project} />;
        })}
      </div>
    </div>
  );
}
