import { Table, TableRow, TableCell, TableHead, TablePagination, TableBody } from '@material-ui/core';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';

import { listItems, deleteItem } from '../../../../services/api/item';
import ConfirmModal from '../../../../components/ConfirmModal';
import usePushAlert from '../../../../shared/hooks/usePushAlert';
import ComponentForField from '../../../../components/ComponentForField';
import { setRegisterPaging } from '../../actions/registerPaging';

import { getLanguage } from './lang';

const pageSize = 10;

const RegisterList = props => {
  const { clientModel } = props;
  const project = useSelector(store => store.dashboardProject);
  const registerPaging = useSelector(
    store => store.registerPaging[clientModel.entity] || { selectedPage: 1, selectedRegister: {} }
  );
  const languageCode = useSelector(store => store.language);
  const language = getLanguage(languageCode);
  const pushAlert = usePushAlert();
  const [selectedPage, setSelectedPage] = useState(registerPaging.selectedPage);
  const [items, setItems] = useState(null);
  const [count, setCount] = useState(null);
  const [registerToDelete, setRegisterToDelete] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const importantFields = clientModel.fields.filter(field => field.important);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleGetDocuments = () => {
    setLoading(true);
    listItems(clientModel.entity, project, pageSize, selectedPage).then(({ data: givenClientDocuments }) => {
      setItems(givenClientDocuments);
      setLoading(false);
    });
  };

  const handleDelete = confirmed => {
    if (!confirmed) return setRegisterToDelete(null);
    if (isDeleting) return;
    setIsDeleting(true);
    deleteItem(registerToDelete).then(() => {
      setIsDeleting(false);
      setRegisterToDelete(null);
      setItems([]);
      handleGetDocuments();
      pushAlert({ type: 'info', ...language.registerDeleted(clientModel) });
    });
  };

  const handleEdit = registerIndex => {
    dispatch(
      setRegisterPaging(clientModel.entity, {
        selectedPage,
        selectedRegister: { page: selectedPage, index: registerIndex }
      })
    );
  };

  useEffect(() => {
    if (!project) return;
    handleGetDocuments();
  }, [project, props.clientModel, selectedPage]);

  useEffect(() => {
    dispatch(setRegisterPaging(clientModel.entity, { selectedPage }));
  }, [selectedPage]);

  useEffect(() => {
    if (!project) return;
    listItems(clientModel.entity, project, pageSize, selectedPage, { count: true }).then(
      ({ data: response }) => {
        setCount(response.count);
      }
    );
  }, [project, props.clientModel]);

  return (
    <div className="registerList">
      <ConfirmModal
        show={!!registerToDelete}
        onPrompt={handleDelete}
        title={language.deleteMessage(clientModel)}
        message={
          <div>
            {registerToDelete &&
              clientModel.fields.map((field, i) => (
                <div key={i} className="registerInfo">
                  <h4 className="registerInfoItem">{field.names[languageCode]}:</h4>
                  <p className="registerInfoItem">&nbsp;{registerToDelete[field.key]}</p>
                </div>
              ))}
          </div>
        }
      />
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
          {items?.map((item, i) => {
            const isSelected =
              i === registerPaging.selectedRegister.index &&
              selectedPage === registerPaging.selectedRegister.page;

            return (
              <TableRow key={i} style={{ backgroundColor: isSelected ? '#42cbf533' : '' }}>
                <TableCell>
                  <div className="actions">
                    <Link
                      href={`/projects/${encodeURIComponent(project.code)}/registers/${encodeURIComponent(
                        clientModel.entity
                      )}/${item._id}`}
                    >
                      <a onClick={() => handleEdit(i)}>
                        <i className="fa fa-edit" />
                      </a>
                    </Link>
                    <i className="fa fa-trash" onClick={() => setRegisterToDelete(item)} />
                  </div>
                </TableCell>
                {importantFields.map((field, ii) => (
                  <TableCell key={ii}>
                    <ComponentForField project={project} field={field}>
                      {item[field.key]}
                    </ComponentForField>
                  </TableCell>
                ))}
              </TableRow>
            );
          })}
          <TableRow>
            {count && (
              <TablePagination
                count={count}
                page={selectedPage - 1}
                rowsPerPage={pageSize}
                onPageChange={(e, newPage) => !loading && setSelectedPage(newPage + 1)}
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
          .registerInfo {
            margin: 14px;
          }
          .registerInfoItem {
            display: inline;
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
