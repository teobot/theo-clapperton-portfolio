import React from "react";

export default function ProjectCard({
  title = "",
  desc = "",
  img = "linear-gradient(90deg, #74EBD5 0%, #9FACE6 100%)",
  link = "",
  github = "",
  live = "",
  stack = "",
}) {
  return (
    <div className="d-flex flex-column p-1 justify-content-between mb-5">
      <div
        style={{
          borderRadius: 5,
          backgroundImage: `url("${img}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          aspectRatio: "18 / 6 !important",
          width: "100%",
          height: "Auto",
        }}
      />
      <div
        className="mt-4"
        style={{
          fontWeight: "700",
          fontSize: "1.5rem",
          color: "#747474",
        }}
      >
        {title}
      </div>
      <div
        className="mt-4"
        style={{
          fontWeight: "500",
          fontSize: "1rem",
          color: "#747474",
          height: 100,
          maxHeight: 100,
        }}
      >
        {desc}
      </div>
      <div
        onClick={() => {
          window.open(github, "_blank");
        }}
        className="d-flex flex-row justify-content-center align-center pt-2 pb-2 mt-5"
        style={{
          background: "linear-gradient(90deg, #6A85B6 0%, #BAC8E0 100%)",
          borderRadius: 5,
          width: 160,
          height: 40,
          fontWeight: "700",
          cursor: "pointer",
        }}
      >
        View Source
      </div>
      <div
        onClick={() => {
          window.open(live, "_blank");
        }}
        className="mt-4"
        style={{
          fontWeight: "500",
          textDecoration: "underline",
          color: "#868686",
          cursor: "pointer",
        }}
      >
        View Project...
      </div>
    </div>
  );
}
