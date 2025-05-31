import React from "react";

import { getProjectBySlug } from "@/lib/projects";

export default function Page({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-start py-12">
      {/* Date and Category */}
      <div className="text-gray-400 text-sm mb-6 mt-2 text-center">
        May 22, 2025 <span className="mx-2">API</span>
      </div>

      {/* Headline */}
      <h1 className="text-4xl md:text-5xl font-bold text-black text-center max-w-2xl leading-tight mb-4">
        {project.title}
      </h1>

      {/* Subtitle */}
      <p className="text-black-300 text-lg text-center max-w-xl mb-10">
        {project.desc}
      </p>

      {/* Card/Image Section */}
      <img
        src={`/images/${project.img}`}
        alt={project.title}
        className="w-full h-full object-cover aspect-video"
      />
    </div>
  );
}
