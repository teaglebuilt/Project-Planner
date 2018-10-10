import React from 'react';


const ProjectSummary = ({project}) => {
  console.log(project)
    return(
        <div className="project-list section">
          <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
              <span className="card-title">{project.title}</span>
              <p>Posted By Dillan Teagle</p>
              <p>{project.content}</p>
              <p className="grey-text">Time</p>
            </div>
          </div>
        </div>
    )
}

export default ProjectSummary;