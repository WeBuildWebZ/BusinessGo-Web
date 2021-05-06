import { Table, TableRow, TableCell, TableHead, TablePagination, TableBody } from '@material-ui/core';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Link from 'next/link';

import { getClientDocuments } from '../../../../services/api/clientDocument';

import { getLanguage } from './lang';

const pageSize = 10;

const RegisterList = props => {
  const { clientModel } = props;
  const project = useSelector(store => store.dashboardProject);
  const languageCode = useSelector(store => store.language);
  const language = getLanguage(languageCode);
  const [selectedPage, setSelectedPage] = useState(1);
  const [clientDocuments, setClientDocuments] = useState(null);
  const [count, setCount] = useState(null);
  const importantFields = clientModel.fields.filter(field => field.important);

  useEffect(() => {
    if (!project) return;
    getClientDocuments(clientModel.entity, project, pageSize, selectedPage).then(
      ({ data: givenClientDocuments }) => {
        setClientDocuments(givenClientDocuments);
      }
    );
  }, [project, props.clientModel, selectedPage]);

  useEffect(() => {
    if (!project) return;
    getClientDocuments(clientModel.entity, project, pageSize, selectedPage, {}, '', [], true).then(
      ({ data: response }) => {
        setCount(response.count);
      }
    );
  }, [project, props.clientModel]);

  return (
    <div className="registerList">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <h4>{language.actions}</h4>
            </TableCell>
            {importantFields.map((field, i) => (
              <TableCell key={i}>
                <h4>{field.names[languageCode]}</h4>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {clientDocuments?.map((clientDocument, i) => (
            <TableRow key={i}>
              <TableCell>
                <Link
                  href={`/projects/${encodeURIComponent(project.code)}/registers/${encodeURIComponent(
                    clientModel.entity
                  )}/${clientDocument._id}`}
                >
                  <a>
                    <i className="fa fa-edit" />
                  </a>
                </Link>
                <i className="fa fa-trash" />
              </TableCell>
              {importantFields.map((field, ii) => (
                <TableCell key={ii}>{clientDocument[field.key]}</TableCell>
              ))}
            </TableRow>
          ))}
          <TableRow>
            {count && (
              <TablePagination
                count={count}
                page={selectedPage - 1}
                rowsPerPage={pageSize}
                onChangePage={(e, newPage) => setSelectedPage(newPage + 1)}
                labelRowsPerPage={language.rowsPerPage}
              />
            )}
          </TableRow>
        </TableBody>
      </Table>
      <style jsx>
        {`
          .registerList {
            background-color: whitesmoke;
          }
          .fa {
            font-size: 22px;
            margin: 7px;
            display: inline;
          }
          .fa-trash {
            color: red;
            transition: 0.7s;
          }
          .fa-trash:hover {
            transform: scale(1.1);
          }
          .fa-trash:active {
            transform: scale(1.2) rotate(5deg);
            transition: 0.1s;
          }
        `}
      </style>
    </div>
  );
};

RegisterList.propTypes = {
  clientModel: PropTypes.object.isRequired
};

export default RegisterList;
