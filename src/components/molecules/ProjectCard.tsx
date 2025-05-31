"use client";

// interfaces
import { IProject } from "@/common/interfaces/project.interface";
import { generateProjectSlug } from "@/lib/projects";
import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";

const ProjectCard: React.FC<
  IProject & {
    onClick?: () => void;
    descClassName?: string;
  }
> = ({ img, title, desc, github, live, onClick, descClassName }) => {
  const router = useRouter();

  const handleClick =
    onClick ??
    (() => {
      router.push(`/index/${generateProjectSlug(title)}`);
    });

  return (
    <div className="cursor-pointer">
      <div
        className="flex p-2 aspect-square rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
        onClick={handleClick}
        style={{
          backgroundImage: `url("/images/${img}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="flex flex-col gap-1 mt-3">
        <h1 className="text-lg font-bold">{title}</h1>
        <p className={twMerge("text-sm text-gray-500", descClassName)}>
          {desc}
        </p>
        {live && (
          <a
            className="text-xs text-blue-500 underline mt-1"
            href={live ?? ""}
            target="_blank"
          >
            Visit
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
