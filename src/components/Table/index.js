import React from 'react';
import PropTypes from 'prop-types';

import Split from '../Split';
import Spinner from '../Spinner';

const Table = props => {
  const { selectable, fields } = props;

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
            </tr>
          ))}
      </tbody>

      <style jsx>
        {`
          .table {
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
    // <div className="table">
    //   <div className="header">
    //     {fields.map((field, i) => (
    //       <div className="headerItem" key={i}>
    //         {field.name}
    //       </div>
    //     ))}
    //   </div>
    //   <Split style={{ float: 'unset' }} />
    //   {props.loading && <Spinner />}
    //   {!props.loading &&
    //     props.rows.map((row, i) => (
    //       <div key={i} className="row">
    //         {fields.map((field, ii) => (
    //           <div className="cell" key={ii}>
    //             {row[field.key]}
    //           </div>
    //         ))}
    //       </div>
    //     ))}
    // </div>
  );
};

Table.propTypes = {
  selectable: PropTypes.bool,
  loading: PropTypes.bool,
  onPageChanged: PropTypes.func,
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
  onPageChanged: () => {}
};

export default Table;
