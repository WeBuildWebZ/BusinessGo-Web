import React from 'react';

import Split from '../../../../../Split';

import Title from './components/Title';

const Sidebar = () => (
  <div className="sidebar">
    <Title code="tables" />
    <Split />
    <style jsx>
      {`
        .sidebar {
          background-color: #ffffff;
          box-shadow: 0 0 2px 2px #ffffff;
          width: 20%;
          height: 87vh;
          border-radius: 5px;
          margin-left: 15px;
        }
      `}
    </style>
  </div>
);

export default Sidebar;
