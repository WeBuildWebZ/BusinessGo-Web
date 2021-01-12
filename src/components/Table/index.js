import React from 'react';
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
          <th>
            <div className="new" onClick={() => props.onNewRow({})}>
              <img className="icon" src="/shared/icons/plus.svg" alt="newIcon" />
            </div>
          </th>
        </tr>

        {props.rows.map((row, i) => (
          <tr key={i} className="fila">
            {fields.map((field, ii) => (
              <td key={ii} className="td">
                {field.input_type === 'image' ? (
                  <img className="image" src={row[field.key]} />
                ) : (
                  row[field.key]
                )}
              </td>
            ))}
            <td>
              <div className="edit" onClick={() => props.onRowEdit(row)}>
                <img className="icon" src="/shared/icons/edit-pen.svg" alt="editIcon" />
              </div>
            </td>

            <td>
              <div className="delete" onClick={() => props.onRowDelete(row)}>
                <img src="/shared/icons/trash.svg" alt="trashIcon" />
              </div>
            </td>
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
            background-color: red;
            border-radius: 5px;
            transition: 0.2s;
          }
          .delete:hover {
            cursor: pointer;
            background-color: rgb(212, 38, 38);
            box-shadow: 0 0 1px 1px red;
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
  onRowDelete: () => {},
  onRowEdit: () => {},
  onNewRow: () => {}
};

export default Table;
