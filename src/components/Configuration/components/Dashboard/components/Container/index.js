import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { elementScrolledToBottom } from '../../../../../../utils/html';

import ClientDocumentEditor from './components/ClientDocumentEditor';

const Container = () => {
  const selectedClientModel = useSelector(store => store.selectedClientModel);

  return (
    <div className="container">
      {selectedClientModel && <ClientDocumentEditor clientModel={selectedClientModel} />}
      <style jsx>
        {`
          .container {
            background-color: #ffffff;
            box-shadow: 0 0 2px 2px #ffffff;
            width: 60%;
            height: 90vh;
            border-radius: 5px;
            animation: arrive 1s linear;
          }

          @keyframes arrive {
            0% {
              opacity: 0;
              -ms-transform: translate(100%);
              -moz-transform: translate(100%);
              -webkit-transform: translate(100%);
              -o-transform: translate(100%);
              transform: translate(100%);
              height: 0;
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
};

export default Container;
