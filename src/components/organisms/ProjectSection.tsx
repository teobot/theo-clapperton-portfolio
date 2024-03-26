// data
import projects from "@/data/projects";

// components
import ProjectCard from "@/components/molecules/ProjectCard";

export default function ProjectSection() {
  return (
    <div className="px-8 mt-10 lg:px-16">
      <div className="flex flex-col gap-3 mb-5">
        <div className="text-white text-3xl font-bold">i like to build.</div>
        <div
          className="h-2"
          style={{
            background: `linear-gradient(90deg, #74EBD5 0%, #9FACE6 100%)`,
          }}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-52">
        {projects
          .sort((a, b) => {
            let aOrder = a.order || 99;
            let bOrder = b.order || 99;
            return aOrder - bOrder;
          })
          .map((project, index) => {
            if (project.hidden) return null;
            return <ProjectCard key={project.title} {...project} />;
          })}
      </div>
    </div>
  );
}
