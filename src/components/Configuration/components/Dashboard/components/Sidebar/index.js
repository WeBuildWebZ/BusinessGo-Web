import { useSelector } from 'react-redux';

import Spinner from '../../../../../Spinner';
import Split from '../../../../../Split';
import ButtonPanel from '../ButtonPanel';

import ConfigurationButton from './ConfigurationButton';
import Title from './Title';
import TablesSection from './TablesSection';
import FormsSection from './FormsSection';
import ChatbotsSection from './ChatbotsSection';
import WidgetsSection from './WidgetsSection';

const Sidebar = () => {
  const project = useSelector(store => store.project);

  return (
    <div className="sidebar">
      <Title code="configuration" />
      {!project && <Spinner />}
      {project?.configuration_sections.map((section, i) => (
        <ConfigurationButton key={i} text={section.form.name} configurationSection={section} />
      ))}
      <Split />
      <Title code="tables" />
      <Split />
      <TablesSection />
      <Split />
      <Title code="forms" />
      <Split />
      <FormsSection />
      <Title code="chatbots" />
      <Split />
      <ChatbotsSection />
      <Title code="widgets" />
      <Split />
      <WidgetsSection />
      <ButtonPanel />
      <style jsx>
        {`
          .sidebar {
            min-width: 350px;
            min-height: 100vh;
            border-radius: 0.5em;
            transition: 0.8s;
            animation: arrive 1s linear;
            overflow-x: auto;
            overflow-y: hidden;
            padding: 3em 1em 0 1em;
            margin-right: 0.5em;
            display: flex;
            align-items: center;
            flex-flow: column;
            border: 2px solid #ebebeb;
            background-color: #3b5998;
            color: white;
          }

          @keyframes arrive {
            0% {
              opacity: 0;
              -ms-transform: translateX(-100%);
              -moz-transform: translateX(-100%);
              -webkit-transform: translateX(-100%);
              -o-transform: translateX(-100%);
              transform: translateX(-100%);
            }
            100% {
              opacity: 1;
              -ms-transform: translateX(0);
              -moz-transform: translateX(0);
              -webkit-transform: translateX(0);
              -o-transform: translateX(0);
              transform: translateX(0);
            }
          }
          // ===================================
          @media (max-width: 1168px) {
            .sidebar {
              width: 100vw;
              border: none;
              margin-right: 0;
              padding: 0.5em;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Sidebar;
