import heroProject from "@/data/projects/hero.json";
import heroSideProject from "@/data/projects/hero-side.json";
import generalProjects from "@/data/projects/general.json";

const projects = { heroProject, heroSideProject, generalProjects };

export const getProjectBySlug = (title: string) => {
  if (title === generateProjectSlug(projects.heroProject.title)) {
    return projects.heroProject;
  }

  if (
    projects.heroSideProject.find(
      (project) => title === generateProjectSlug(project.title)
    )
  ) {
    return projects.heroSideProject.find(
      (project) => title === generateProjectSlug(project.title)
    );
  }
};

export const generateProjectSlug = (title: string) => {
  return title.toLowerCase().replace(/[^a-z]/g, "-");
};

export default projects;
