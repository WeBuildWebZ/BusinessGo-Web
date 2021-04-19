import Link from 'next/link';
import PropTypes from 'prop-types';

const ProjectList = ({ projects }) => (
  <div className="projectList">
    {projects.map((project, i) => (
      <Link key={i} href={`/projects/${encodeURIComponent(project.code)}`}>
        <a>
          <div className="project">
            <img className="favicon" src={`${project.base_url}/favicon.png`} />
            <b className="projectName">{project.name}</b>
          </div>
        </a>
      </Link>
    ))}
    <style jsx>
      {`
        .project {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: fit-content;
          margin: 14px;
          padding: 7px;
          border-radius: 7px;
          background-color: whitesmoke;
          user-select: none;
          transition: 0.7s;
        }
        .project:hover {
          transform: scale(1.1);
        }
        .project:active {
          transform: scale(1.2);
          transition: 0.1s;
        }
        .favicon {
          max-width: 100px;
          max-height: 100px;
        }
        .projectList {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
        }
        .projectName {
          margin: 7px;
        }
      `}
    </style>
  </div>
);

ProjectList.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default ProjectList;
