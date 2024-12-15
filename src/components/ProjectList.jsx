import React from "react";
import { Card } from "./Card";

export const ProjectList = ({ projects }) => {
  return (
    <div className="project-list">
      {projects.map((project, index) => (
        <Card key={index} img={project.img} />
      ))}
    </div>
  );
};
