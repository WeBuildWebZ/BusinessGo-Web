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
                <div className="actions">
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
                </div>
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
          .actions {
            display: flex;
          }
          .fa {
            font-size: 30px;
            margin: 7px;
            transition: 0.7s;
          }
          .fa:hover {
            transform: scale(1.2);
          }
          .fa:active {
            transform: scale(1.4);
            transition: 0.1s;
          }
          .fa-trash {
            color: red;
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
