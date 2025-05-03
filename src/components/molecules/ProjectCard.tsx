"use client";

// components
import Button from "@/components/atoms/Button";

// interfaces
import { IProject } from "@/common/interfaces/project.interface";
import { twMerge } from "tailwind-merge";

const ProjectCard: React.FC<
  IProject & {
    onClick?: () => void;
  }
> = ({
  img,
  title,
  desc,
  github,
  live,
  onClick = () => {
    if (live) {
      window.open(live ?? "", "_blank");
    }
  },
}) => {
  return (
    <div>
      <div className="">
        <div
          className={twMerge(
            "flex p-2 aspect-square rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300",
            live && "cursor-pointer"
          )}
          onClick={onClick}
          style={{
            backgroundImage: `url("/images/${img}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />

        <div className="flex flex-col gap-1 mt-3">
          <h1 className="text-lg font-bold">{title}</h1>
          <p className="text-sm text-gray-500">{desc}</p>
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
    </div>
  );
};

export default ProjectCard;
