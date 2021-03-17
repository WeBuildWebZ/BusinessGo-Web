import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getClientModels } from '../../../../../../services/api/user';
import { setAdminSection } from '../../../../../../shared/actions/adminSection';
import { setClientModels } from '../../../../../../shared/actions/clientModels';
import { setSelectedClientModel } from '../../../../../../shared/actions/selectedClientModel';

import ClientDocumentEditor from './components/ClientDocumentEditor';
import ConfigurationEditor from './components/ConfigurationEditor';
import FormEditor from './components/FormEditor';
import ChatbotEditor from './components/ChatbotEditor';
import FormResponseViewer from './components/FormResponseViewer';
import Widgets from './components/Widgets';

const Container = () => {
  const dispatch = useDispatch();
  const project = useSelector(store => store.project);
  const selectedClientModel = useSelector(store => store.selectedClientModel);
  const selectedFormSection = useSelector(store => store.selectedFormSection);
  const adminSection = useSelector(store => store.adminSection);
  const adminSectionRef = useRef();

  adminSectionRef.current = adminSection;

  useEffect(() => {
    if (adminSectionRef.current !== 'tables') return;
    getClientModels(project).then(({ data: clientModels }) => {
      dispatch(setClientModels(clientModels));

      if (!clientModels.length) {
        return dispatch(setAdminSection('configuration'));
      }

      dispatch(setSelectedClientModel(clientModels[0]));
    });
  }, [project, adminSection]);

  return (
    <div className="container">
      {adminSection === 'configuration' && <ConfigurationEditor />}
      {adminSection === 'tables' && selectedClientModel && (
        <ClientDocumentEditor clientModel={selectedClientModel} />
      )}
      {adminSection === 'forms' && selectedFormSection === 'edit' && <FormEditor />}
      {adminSection === 'forms' && selectedFormSection === 'show' && <FormResponseViewer />}
      {adminSection === 'chatbots' && <ChatbotEditor />}
      {adminSection === 'widgets' && <Widgets />}
      <style jsx>
        {`
          .container {
            padding: 2em 0 0 0;
            margin-left: 0.5em;
            min-width: 800px;
            min-height: 100vh;
            border-radius: 0.5em;
            transition: 0.8s;
            animation: arrive 1s linear;
            overflow-x: hidden;
            background-color: whitesmoke;
          }

          @keyframes arrive {
            0% {
              opacity: 0;
              -ms-transform: translate(100%);
              -moz-transform: translate(100%);
              -webkit-transform: translate(100%);
              -o-transform: translate(100%);
              transform: translate(100%);
            }
            100% {
              opacity: 1;
              -ms-transform: translate(0);
              -moz-transform: translate(0);
              -webkit-transform: translate(0);
              -o-transform: translate(0);
              transform: translate(0);
            }
          }
          @media (max-width: 1168px) {
            .container {
              min-width: 100vw;
              margin-left: 0;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Container;
