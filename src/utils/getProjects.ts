import fs from "fs";
import path from "path";
import { IProject } from "@/common/interfaces/project.interface";

function getProjects(): IProject[] {
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

  return projects.sort(sort);
}

export default getProjects;
