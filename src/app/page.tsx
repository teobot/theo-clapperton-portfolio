"use client";
/* eslint-disable @next/next/no-img-element */
import NameHeader from "@/components/molecules/NameHeader";
import CodeSegment from "@/components/molecules/CodeSegment";
import ContactSection from "@/components/molecules/ContactSection";
import ProjectSection from "@/components/organisms/ProjectSection";
import Hero from "@/components/molecules/Hero";
import details from "@/data/details.json";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IProject } from "@/common/interfaces/project.interface";
import { SparklesText } from "@/components/ui/sparkles-text";
import ProjectCard from "@/components/molecules/ProjectCard";
import ThreeColBentoGrid from "@/components/organisms/ThreeColBentoGrid";
import projects from "@/lib/projects";
import { twMerge } from "tailwind-merge";

export default function Home() {
  return (
    <>
      <div className="p-5 w-full">
        <video
          src={"/assets/min.mp4"}
          autoPlay
          muted
          loop
          className="w-full h-16 sm:h-36 rounded-lg object-cover"
        />
      </div>

      <div className="flex flex-col items-center text-center py-5 px-1 gap-10">
        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-medium">Hello</h1>
          <p className="text-sm text-gray-500 text-wrap">
            I am a {details.JOB_TITLE} for {details.COMPANY}.
          </p>
        </div>

        <SparklesText
          sparklesCount={5}
          className="text-5xl sm:text-8xl font-bold text-wrap"
          text="Theo Clapperton"
        />

        <div className="flex flex-row gap-2 mx-auto">
          <a href={details.GITHUB} className="text-sm text-gray-500">
            <FaGithub />
          </a>
          <a href={details.LINKEDIN} className="text-sm text-gray-500">
            <FaLinkedin />
          </a>
        </div>
      </div>

      <div className="container px-5 mx-auto flex flex-col gap-12 my-32 md:my-42">
        <div className="grid grid-cols-1 xl:grid-cols-3 relative gap-y-10 mb-40 xl:gap-x-5">
          <div className="xl:col-span-2 relative">
            <div className="xl:sticky xl:top-10">
              <div className="w-full rounded-lg overflow-hidden group aspect-video">
                <img
                  src={`/images/${projects.heroProject.img}`}
                  alt={projects.heroProject.title}
                  className="w-full h-auto object-cover rounded-lg aspect-video"
                />
              </div>
              <div className="flex flex-col gap-1">
                <h1 className="text-4xl font-bold mt-3">
                  {projects.heroProject.title}
                </h1>
                <p className="text-lg text-gray-500">
                  {projects.heroProject.desc}
                </p>
                <a
                  className="text-sm text-blue-500 underline"
                  href={projects.heroProject.live ?? ""}
                  target="_blank"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-1 xl:col-span-1 gap-x-5 gap-y-10">
            {projects.heroSideProject.map((project: IProject) => (
              <div
                className="cursor-pointer group overflow-hidden"
                key={project.title}
              >
                <div className="w-full aspect-square rounded-lg overflow-hidden group">
                  <div
                    className="w-full h-full transition-transform duration-300 group-hover:scale-110"
                    style={{
                      backgroundImage: `url("/images/${project.img}")`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  />
                </div>

                <div className="flex flex-col gap-1 mt-3">
                  <h1 className="text-xl md:text-lg font-bold">
                    {project.title}
                  </h1>
                  <p className="text-sm text-gray-500 hidden lg:block">
                    {project.desc}
                  </p>
                  {project.live && (
                    <a
                      className="text-xs text-blue-500 underline mt-1"
                      href={project.live ?? ""}
                      target="_blank"
                    >
                      Read More
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex flex-row justify-between items-end">
            <div className="text-2xl font-bold">All Projects</div>
            <div className="text-md text-gray-500">Viewing All</div>
          </div>
          <div className="grid grid-cols-1 gap-5 rounded-xl">
            {projects.generalProjects.map((project: IProject, idx: number) => (
              <div key={project.title} className="flex items-center gap-5 ">
                <div className="w-40 h-40 rounded-lg overflow-hidden flex-shrink-0 group">
                  <img
                    src={`/images/${project.img}`}
                    alt={project.title}
                    className={twMerge(
                      "w-full h-full object-cover transition-transform duration-300 group-hover:scale-110",
                      project.live && "cursor-pointer"
                    )}
                    onClick={() => {
                      if (!project.live) return;
                      window.open(project.live ?? "", "_blank");
                    }}
                  />
                </div>
                <div className="flex flex-col justify-center ">
                  <div className="text-black font-semibold text-lg mb-2">
                    {project.title}
                  </div>
                  <div className="flex gap-3 text-sm text-gray-400">
                    <span className="font-semibold">
                      {project.type || "Placeholder Type"}
                    </span>
                    <span>·</span>
                    <span>{project.date || "Placeholder Date"}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
