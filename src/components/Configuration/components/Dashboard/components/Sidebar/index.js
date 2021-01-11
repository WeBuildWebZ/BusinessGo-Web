import Split from '../../../../../Split';

import ConfigurationButton from './components/ConfigurationButton';
import Title from './components/Title';
import TablesSection from './components/TablesSection';

const Sidebar = () => (
  <div className="sidebar">
    <ConfigurationButton />
    <Split />
    <Title code="tables" />
    <Split />
    <TablesSection />
    <style jsx>
      {`
        .sidebar {
          background-color: #ffffff;
          box-shadow: 0 0 2px 2px #ffffff;
          width: 20%;
          height: 87vh;
          border-radius: 5px;
          margin-left: 15px;
          animation: arrive 1s linear;
        }

        @keyframes arrive {
          0% {
            opacity: 0;
            -ms-transform: translate(-100%);
            -moz-transform: translate(-100%);
            -webkit-transform: translate(-100%);
            -o-transform: translate(-100%);
            transform: translate(-100%);
            height: 0;
            background-color: rgb(42, 42, 209);
          }
          100% {
            opacity: 1;
            margin-right: 0;
            -ms-transform: translate(0);
            -moz-transform: translate(0);
            -webkit-transform: translate(0);
            -o-transform: translate(0);
            transform: translate(0);
          }
        }
      `}
    </style>
  </div>
);

export default Sidebar;
