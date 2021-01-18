import React from 'react';
import { Button } from 'react-bootstrap';
import VisibilityIcon from '@material-ui/icons/Visibility';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import PropTypes from 'prop-types';

import Spinner from '../Spinner';

const Table = props => {
  const { fields } = props;

  return (
    <table className="table">
      <tbody className="top">
        <tr className="tr">
          {fields.map((field, i) => (
            <th className="th" key={i}>
              <div className="headerTextContainer">{field.name}</div>
            </th>
          ))}
          {props.newButton && (
            <th>
              <div className="new" onClick={() => props.onNewRow({})}>
                <AddCircleIcon style={{ color: 'black' }} />
              </div>
            </th>
          )}
        </tr>

        {props.rows.map((row, i) => (
          <tr key={i} className="fila">
            {fields.map((field, ii) => (
              <td key={ii} className="td">
                {field.input_type === 'image' ? (
                  <img className="image" src={row[field.key]} />
                ) : field.input_type === 'button' ? (
                  <a href={row[field.key]} target="_blank">
                    <Button>{field.name}</Button>
                  </a>
                ) : (
                  row[field.key]
                )}
              </td>
            ))}
            {props.viewButton && (
              <td>
                <div className="view" onClick={() => props.onRowView(row)}>
                  <VisibilityIcon />
                </div>
              </td>
            )}

            {props.editButton && (
              <td>
                <div className="edit" onClick={() => props.onRowEdit(row)}>
                  <EditIcon />
                </div>
              </td>
            )}

            {props.deleteButton && (
              <td>
                <div className="delete" onClick={() => props.onRowDelete(row)}>
                  <DeleteIcon />
                </div>
              </td>
            )}
          </tr>
        ))}

        {props.loading && (
          <tr>
            <td>
              <Spinner />
            </td>
          </tr>
        )}
      </tbody>

      <style jsx>
        {`
          .table {
            border-radius: 5px;
            box-shadow: 0 0 3px 3px silver;
          }

          // primer row:nombre..universidad..
          .th {
            padding: 0 0 0 0.3em;
            text-align: center;
          }

          .headerTextContainer {
            padding-top: 8px;
          }

          .td {
            padding: 1em 0 1em 0.3em;
          }
          .fila {
            border: 1px solid #ebebeb;
          }

          .fila:hover {
            background: #ebebeb;
          }

          .tr {
            background: #51759f;
            color: white;
          }

          .icon {
            width: 100%;
            height: 100%;
          }
          .delete {
            width: fit-content;
            height: fit-content;
            padding: 2px;
            background-color: rgb(245, 90, 90);
            border-radius: 5px;
            transition: 0.2s;
          }
          .delete:hover {
            cursor: pointer;
            background-color: rgb(206, 76, 76);
            box-shadow: 0 0 1px 1px rgb(206, 76, 76);
          }

          .edit {
            border-radius: 5px;
            width: 25px;
            height: 25px;
            cursor: pointer;
            background-color: #ebae36;
            transition: 0.2s;
          }

          .edit:hover {
            background-color: #b8903f;
            box-shadow: 0 0 1px 1px #b8903f;
          }

          .view {
            border-radius: 5px;
            width: 25px;
            height: 25px;
            cursor: pointer;
            background-color: #37d85f;
            transition: 0.2s;
          }

          .view:hover {
            background-color: #11af39;
            box-shadow: 0 0 1px 1px #11af39;
          }

          .new {
            border-radius: 5px;
            width: 25px;
            height: 25px;
            cursor: pointer;
            background-color: #87e41e;
            transition: 0.2s;
          }

          .new:hover {
            background-color: #79bd2b;
            box-shadow: 0 0 1px 1px #79bd2b;
          }
          .image {
            width: 50px;
          }
        `}
      </style>
    </table>
  );
};

Table.propTypes = {
  loading: PropTypes.bool,
  onRowDelete: PropTypes.func,
  newButton: PropTypes.bool,
  viewButton: PropTypes.bool,
  editButton: PropTypes.bool,
  deleteButton: PropTypes.bool,
  onRowView: PropTypes.func,
  onRowEdit: PropTypes.func,
  onNewRow: PropTypes.func,
  rows: PropTypes.array.isRequired,
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired
};

Table.defaultProps = {
  loading: false,
  newButton: true,
  viewButton: true,
  editButton: true,
  deleteButton: true,
  onRowView: () => {},
  onRowDelete: () => {},
  onRowEdit: () => {},
  onNewRow: () => {}
};

export default Table;
