"use client";

import { useMemo, useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { PinContainer } from "./atoms/Pin";
import {
  clientsProjects,
  personalProjects,
  ProjectType,
  projectTypes,
} from "@/data";

const Projects = () => {
  const [currentProjectType, setCurrentProjectType] =
    useState<ProjectType>("Clients");

  const selectedProjects = useMemo(() => {
    return currentProjectType === "Clients"
      ? clientsProjects
      : personalProjects;
  }, [currentProjectType]);

  const redirectTo = (url: string) => {
    window.open(url, "_blank");
  };

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
        {selectedProjects.map(
          ({ id, img, title, des, iconLists, link, github }) => (
            <div
              className="h-[25rem] w-[25rem] flex items-center justify-center mb-24 s:mb-12"
              key={id}
            >
              <PinContainer title={link} href="/">
                <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-inherit mb-10">
                  <div
                    className="relative w-full h-full overflow-hidden rounded-xl"
                    style={{ backgroundColor: "#13162D" }}
                  >
                    <img src="/bg.png" alt="bgimg" />
                  </div>
                  <img
                    src={img}
                    alt="cover"
                    className="z-10 h-full absolute bottom-0 rounded-xl"
                  />
                </div>

                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  {title}
                </h1>

                <p
                  className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                  style={{
                    color: "#BEC1DD",
                    margin: "1vh 0",
                  }}
                >
                  {des}
                </p>

                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <img src={icon} alt="icon5" className="p-2" />
                      </div>
                    ))}
                  </div>

                  {/* Redirect Links */}
                  <div className="flex justify-center items-center">
                    {!github ? (
                      <p
                        className="ms-3 cursor-pointer lg:text-xl md:text-xs text-sm text-purple"
                        onClick={() => redirectTo(link)}
                        aria-label="Check Live Site"
                      >
                        Check Live Site
                      </p>
                    ) : (
                      <FaGithub
                        className="ms-3 cursor-pointer"
                        color="#CBACF9"
                        onClick={() => redirectTo(github)}
                        aria-label="Github Link"
                      />
                    )}
                    <FaLocationArrow
                      className="ms-3"
                      color="#CBACF9"
                      onClick={() => redirectTo(link)}
                    />
                  </div>
                </div>
              </PinContainer>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Projects;
