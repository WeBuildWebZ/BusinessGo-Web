import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import Button from '../Button';
import Spinner from '../Spinner';

import { getLanguage } from './lang';

const Table = props => {
  const { selectable, fields } = props;
  const language = getLanguage(useSelector(store => store.language));

  return (
    <table className="table">
      <tbody>
        <tr>
          {fields.map((field, i) => (
            <th key={i}>{field.name}</th>
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
            <tr key={i}>
              {fields.map((field, ii) => (
                <td key={ii}>{row[field.key]}</td>
              ))}
              <td>
                <Button text={language.edit} />
              </td>

              <td>
                <Button text={language.delete} onClick={() => props.onRowDelete(row)} />
              </td>
            </tr>
          ))}
      </tbody>

      <style jsx>
        {`
          .table {
            table-layout: fixed;
            border-radius: 5px;
            box-shadow: 0 0 3px 3px gray;
          }

          .header {
             {
              /* display: flex;
            flex-direction: row;
            justify-content: space-around; */
            }
          }

          .headerItem {
             {
              /* font-size: 14px;
            padding: 8px 0 0 0; */
            }
          }

          .row {
             {
              /* display: flex;
            flex-direction: row;
            justify-content: space-around; */
            }
          }
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
