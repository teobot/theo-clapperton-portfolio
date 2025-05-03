"use client";
/* eslint-disable @next/next/no-img-element */
import NameHeader from "@/components/molecules/NameHeader";
import CodeSegment from "@/components/molecules/CodeSegment";
import ContactSection from "@/components/molecules/ContactSection";
import ProjectSection from "@/components/organisms/ProjectSection";
import Hero from "@/components/molecules/Hero";
import details from "@/data/details.json";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import getProjects from "@/utils/getProjects";
import { IProject } from "@/common/interfaces/project.interface";
import { SparklesText } from "@/components/ui/sparkles-text";
import { twMerge } from "tailwind-merge";
import ProjectCard from "@/components/molecules/ProjectCard";

// Projects
import heroProject from "@/data/projects/hero.json";
import heroSideProject from "@/data/projects/hero-side.json";
import generalProjects from "@/data/projects/general.json";
import { useState } from "react";

export default function Home() {
  return (
    <>
      <div className="p-5">
        <video
          src={"/assets/min.mp4"}
          autoPlay
          muted
          loop
          className="w-full h-36 rounded-lg object-cover"
        />
      </div>

      <div className="flex flex-col mx-auto text-center py-5">
        <h1 className="text-xl font-medium mb-2">Hello</h1>
        <p className="text-sm text-gray-500">
          I am a {details.JOB_TITLE} for {details.COMPANY}.
        </p>

        <SparklesText
          sparklesCount={5}
          className="text-9xl font-bold mt-10"
          text="Theo Clapperton"
        />

        <div className="flex flex-row gap-2 mx-auto mt-10">
          <a href={details.GITHUB} className="text-sm text-gray-500">
            <FaGithub />
          </a>
          <a href={details.LINKEDIN} className="text-sm text-gray-500">
            <FaLinkedin />
          </a>
        </div>
      </div>

      <div className="container px-5 mx-auto w-4/5 flex flex-col gap-12 mt-60">
        <div className="grid grid-cols-3 relative gap-10 mb-40">
          <div className="col-span-2 relative">
            <div className="sticky top-10">
              <img
                src={`/images/${heroProject.img}`}
                alt={heroProject.title}
                className="w-full h-auto object-cover  rounded-lg"
              />
              <div className="flex flex-col gap-2 mt-5">
                <h1 className="text-4xl font-bold">{heroProject.title}</h1>
                <p className="text-lg text-gray-500">{heroProject.desc}</p>
              </div>
            </div>
          </div>
          <div className="col-span-1 flex flex-col gap-10">
            {heroSideProject.map((project: IProject) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-10 gap-y-20">
          {generalProjects.map((project: IProject) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </>
  );
}
