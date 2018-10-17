import React from "react";
import moment from "moment";

const ProjectSummary = ({ project }) => {
  console.log(project);
  return (
    <div className="project-list section">
      <div className="card project-summary">
        <button className="btn-small waves-effect waves-light right">
          <i className="material-icons">delete</i>
        </button>
        <div className="card-content grey-text text-darken-3">
          <span className="card-title">{project.title}</span>
          <p>{project.content}</p>
          <p>
            Posted By {project.firstName}
            {project.lastName}
          </p>
          <p className="grey-text">
            {moment(project.createdAt.toDate().toString()).calendar()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectSummary;
