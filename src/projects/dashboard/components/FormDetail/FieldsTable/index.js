import { DataGrid } from '@material-ui/data-grid';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import EditButton from './EditButton';
import { getLanguage } from './lang';

const FieldsTable = props => {
  const languageCode = useSelector(store => store.language);
  const language = getLanguage(languageCode);
  const rows = props.fields.map((field, id) => ({
    id,
    fieldName: field.names[languageCode],
    edit: <input type="button" />
  }));
  const columns = [
    {
      field: 'fieldName',
      headerName: language.fieldName.title,
      width: 300,
      description: language.fieldName.description
    },
    {
      field: 'edit',
      headerName: language.edit.title,
      description: language.edit.description,
      sortable: false,
      width: 160,
      renderCell: () => <EditButton onClick={console.log} />
    }
  ];

  return (
    <div className="fieldsTable">
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection={false} />
      <style jsx>
        {`
          .fieldsTable {
            width: 100%;
            height: 400px;
            background-color: whitesmoke;
          }
        `}
      </style>
    </div>
  );
};

FieldsTable.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default FieldsTable;
