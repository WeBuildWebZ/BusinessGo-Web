import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Spinner from '../../../../components/Spinner';
import { PROJECT_CODE } from '../../constants';
import { showForm } from '../../../../services/api/form';

const CheckoutInputs = props => {
  const [fields, setFields] = useState([]);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const isLocal = process.env.NODE_ENV === 'localhost';

  useEffect(() => {
    showForm(PROJECT_CODE, 'cart').then(({ data: cartModel }) => {
      setFields(cartModel.fields);
      setLoading(false);
    });
  }, []);

  const handleChangeData = (key, value) => {
    const newData = { ...data, [key]: value };

    setData(newData);
    props.onChange(newData);
  };

  return (
    <div className="checkout__col-6">
      <div className="block">
        <h3 className="block__title">Información de contacto</h3>
        {loading && <Spinner />}
        <form className="form">
          {fields.map((field, i) => {
            const _fields = fields.slice(i, i + 2);

            if (i % 2 !== 0) return <div key={i} />;

            return (
              <div className="form__input-row form__input-row--two" key={i}>
                {_fields.map((_field, ii) => (
                  <div className="form__col" key={ii}>
                    <input
                      className="form__input form__input--sm"
                      type="text"
                      defaultValue={isLocal ? _field.testing_value : ''}
                      placeholder={_field.name}
                      onChange={({ target }) => handleChangeData(_field.key, target.value)}
                    />
                  </div>
                ))}
              </div>
            );
          })}
        </form>
      </div>
    </div>
  );
};

CheckoutInputs.propTypes = {
  onChange: PropTypes.func
};

CheckoutInputs.defaultProps = {
  onChange: () => {}
};

export default CheckoutInputs;
