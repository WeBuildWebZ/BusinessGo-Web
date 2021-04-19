import Link from 'next/link';
import PropTypes from 'prop-types';

import CoolCard from '../CoolCard';

const ProjectList = ({ projects }) => (
  <div className="projectList">
    {projects.map((project, i) => (
      <CoolCard
        key={i}
        title={project.name}
        link={`/projects/${encodeURIComponent(project.code)}`}
        image={`${project.base_url}/favicon.png`}
      />
    ))}
    <style jsx>
      {`
        .projectList {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
        }
      `}
    </style>
  </div>
);

ProjectList.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default ProjectList;
