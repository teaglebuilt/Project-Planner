import React from 'react';


const ProjectSummary = ({project}) => {
  console.log(project)
    return(
        <div className="project-list section">
          <div className="card project-summary">
          <button className="btn-small waves-effect waves-light right">
          <i className="material-icons">delete</i>
          </button>
            <div className="card-content grey-text text-darken-3">
              <span className="card-title">{project.title}</span>
              <p>Posted By Dillan Teagle</p>
              <p>{project.content}</p>
              <p className="grey-text">project.createdAt</p>
            </div>
          </div>
        </div>
    )
}

export default ProjectSummary;