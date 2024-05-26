"use client";

import { useMemo, useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { PinContainer } from "../atoms/Pin";
import {
  clientsProjects,
  personalProjects,
  ProjectType,
  projectTypes,
} from "@/data";
import PorjectCard from "./PorjectCard";

const Projects = () => {
  const [currentProjectType, setCurrentProjectType] =
    useState<ProjectType>("Clients");

  const selectedProjects = useMemo(() => {
    return currentProjectType === "Clients"
      ? clientsProjects
      : personalProjects;
  }, [currentProjectType]);

  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>

      {/* select Projects type */}
      <div className="flex justify-center items-center py-8 w-full">
        <div className="project-bts-container">
          {projectTypes.map((type) => (
            <button
              key={type}
              className={`project-btn ${
                currentProjectType === type ? "active" : ""
              } `}
              onClick={() => setCurrentProjectType(type)}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <div className="projects-container flex flex-wrap items-center justify-center p-4 mt-10 gap-12">
        {selectedProjects.map((project) => (
          <PorjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
