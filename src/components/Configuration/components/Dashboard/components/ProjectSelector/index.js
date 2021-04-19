import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Spinner from '../../../../../Spinner';
import Button from '../../../../../Button';
import { getProjects } from '../../../../../../services/api/project';
import { setProject } from '../../../../../../shared/actions/project';
import { setSelectedClientModel } from '../../../../../../shared/actions/selectedClientModel';
import { setAdminSection } from '../../../../../../shared/actions/adminSection';
import { setConfigurationSection } from '../../../../../../shared/actions/configurationSection';

import { getLanguage } from './lang';

const ProjectSelector = () => {
  const dispatch = useDispatch();
  const language = getLanguage(useSelector(store => store.language));
  const user = useSelector(store => store.user);
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    let mounted = true;
    getProjects().then(({ data: _projects }) => {
      if (!mounted) return;
      setProjects(_projects);
      setLoading(false);
    });
    return () => {
      mounted = false;
    };
  }, []);

  const handleSelectProject = newProject => {
    setLeaving(true);
    setSelectedProject(newProject);
  };

  const handleAnimationEnd = () => {
    if (!selectedProject) return;

    const [newConfigurationSection] = selectedProject.configuration_sections;

    if (newConfigurationSection) dispatch(setConfigurationSection(newConfigurationSection));
    dispatch(setProject(selectedProject));
  };

  return (
    <div
      className={`projectSelector${leaving ? ' projectSelectorLeave' : ''}`}
      onAnimationEnd={handleAnimationEnd}
    >
      <h2 className="title">{language.getTitle(user)}</h2>
      <p className="message">{language.selectProject}</p>
      {loading && <Spinner />}
      {!loading && (
        <div>
          {projects.map((project, i) => (
            <Button
              key={i}
              text={project.name}
              disabled={leaving}
              onClick={() => handleSelectProject(project)}
              style={{ marginBottom: 15 }}
            />
          ))}
        </div>
      )}
      <style jsx>
        {`
          .projectSelector {
            position: absolute;
            transform: translate(-50%, -50%);
            left: 50%;
            top: 50%;
            width: 450px;
            height: 300px;
            background-color: #ffffff;
            border-radius: 5px;
            transition: 0.7s;
            box-shadow: -15px -15px 15px #eaeaea34, 0 0 1px 1px #ffffff;
            animation: initialAnimation 1s linear;
          }
          .projectSelector:hover {
            box-shadow: 15px 15px 15px #eaeaea34, 0 0 2px 2px #ffffff;
          }
          .projectSelectorLeave {
            animation: leaveAnimation 1s linear;
          }
          .title {
            color: #595959;
            margin: 10px 0 0 15px;
          }
          .message {
            width: fit-content;
            margin: 9px 0 15px 30px;
          }

          @keyframes initialAnimation {
            0% {
              width: 0;
              opacity: 0;
              background-color: rgb(42, 42, 209);
              margin: 100% 0 100% 0;
            }
            100% {
              margin: 0;
            }
          }

          @keyframes leaveAnimation {
            100% {
              width: 0;
              opacity: 0;
              background-color: rgb(42, 42, 209);
              margin: 100% 0 100% 0;
            }
          }
          @media only screen and (max-width: 768px) {
            .projectSelector {
              width: 90%;
            }
          }
        `}
      </style>
    </div>
  );
};

export default ProjectSelector;
