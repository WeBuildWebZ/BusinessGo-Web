import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import Spinner from '../Spinner';

import { getLanguage } from './lang';
import Button from './components/Button';

const Table = props => {
  const { selectable, fields } = props;
  const language = getLanguage(useSelector(store => store.language));

  return (
    <table className="table">
      <tbody className="top">
        <tr className="tr">
          {fields.map((field, i) => (
            <th className="th" key={i}>
              {field.name}
            </th>
          ))}
        </tr>

        {props.loading && (
          <tr>
            <td>
              <Spinner />
            </td>
          </tr>
        )}

        {!props.loading &&
          props.rows.map((row, i) => (
            <tr key={i} className="fila">
              {fields.map((field, ii) => (
                <td key={i} className="td">
                  {row[field.key]}
                </td>
              ))}
              <td className="edit">
                <Button text={language.edit} />
              </td>

              <td className="delete">
                <Button text={language.delete} onClick={() => props.onRowDelete(row)} />
              </td>
            </tr>
          ))}
      </tbody>

      <style jsx>
        {`
          .table {
            border-radius: 5px;
            box-shadow: 0 0 3px 3px silver;
            // background:red;
          }

          // primer row:nombre..universidad..
          .th {
            padding: 0 0 0 0.3em;
            text-align: center;
          }

          .td {
            padding: 1em 0 1em 0.3em;
          }
          // ===================================================
          .fila {
            border: 1px solid #ebebeb;
          }

          .fila:hover {
            background: #ebebeb;
          }

          // =======================================================
          .tr {
            background: #51759f;
            color: white;
          }

          // ========================================================
          .delete {
            padding: 1em 3px;
            text-align: center;
          }
          .delete:hover {
            cursor: pointer;
            color: red;
          }
          // ==============================================================

          .edit {
            padding: 1em 3px;
          }

          .edit:hover {
            color: #dfa01f;
            cursor: pointer;
          }
          // ===============================
        `}
      </style>
    </table>
  );
};

Table.propTypes = {
  selectable: PropTypes.bool,
  loading: PropTypes.bool,
  onPageChanged: PropTypes.func,
  onRowDelete: PropTypes.func,
  rows: PropTypes.array.isRequired,
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired
};

Table.defaultProps = {
  selectable: false,
  loading: false,
  onPageChanged: () => {},
  onRowDelete: () => {}
};

export default Table;
