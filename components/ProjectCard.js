import React from "react";

import { Button } from "react-bootstrap";

import { BsGithub } from "react-icons/bs";

export default function ProjectCard({
  title = "",
  desc = "",
  img = "linear-gradient(90deg, #74EBD5 0%, #9FACE6 100%)",
  github = "",
  live = "",
}) {
  return (
    <div className="d-flex flex-column p-1 justify-content-between mb-5 position-relative w-100">
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
        className="mt-4 text-light"
        style={{
          fontWeight: "700",
          fontSize: "1.5rem",
        }}
      >
        {title}
      </div>
      <div
        className="mt-4 w-100 text-secondary"
        style={{
          fontWeight: "500",
          fontSize: "1rem",
          height: 100,
          maxHeight: 100,
          overflowWrap: "break-word",
          wordBreak: "break-word",
        }}
      >
        {desc}
      </div>
      <div className="mt-5">
        <Button
          className="d-flex flex-row justify-content-center align-center"
          disabled={!github}
          onClick={() => {
            if (github) window.open(github, "_blank");
          }}
          size="md"
          style={{
            ...(github
              ? { cursor: "pointer" }
              : {
                  cursor: "not-allowed",
                  opacity: 0.1,
                }),
            background: "linear-gradient(90deg, #6A85B6 0%, #BAC8E0 100%)",
            borderRadius: 5,
            width: 160,
            height: 40,
            fontWeight: "700",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            border: "none",
          }}
        >
          <BsGithub size={24} className="me-2" />
          View Source
        </Button>
      </div>

      <div className="mt-4">
        <Button
          disabled={!live}
          onClick={() => {
            if (live) window.open(live, "_blank");
          }}
          variant={`outline-${live ? "light" : "dark"}`}
          size="sm"
          style={{
            fontWeight: "700",
          }}
        >
          View Project...
        </Button>
      </div>
    </div>
  );
}
