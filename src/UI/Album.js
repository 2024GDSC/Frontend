import React from "react";
import AlbumCard from "./AlbumCard";

const Album = ({ title }) => {
  const projects = [];
  for (let i = 0; i < 9; i++) {
    projects.push("Project " + (i + 1));
  }
  return (
    <div className="album py-4">
      <div className="container">
        <hr />
        <h1>{title}</h1>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {projects.map((projectName, index) => {
            return (
              <div key={index}>
                <AlbumCard projectName={projectName}></AlbumCard>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Album;
