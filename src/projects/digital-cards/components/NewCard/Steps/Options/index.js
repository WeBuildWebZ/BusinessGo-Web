import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { listProducts } from '../../../../../../services/ecommerce_api/product';
import { getProductCodeTranslation } from '../../../../../../translations/productsCodes';

const Step1 = props => {
  const handleSelectOption = option => {
    props.onOptionSelected(option);
  };

  return (
    <>
      {props.options.map((option, i) => (
        <div key={i} className="option" onClick={() => handleSelectOption(i)}>
          <div className="title">{option.title}</div>
          <div className="description">{option.description}</div>
        </div>
      ))}
      <style jsx>
        {`
          .option {
            display: flex;
            flex-direction: column;
            width: 90%;
            min-height: 100px;
            height: fit-content;
            margin: 15px 0 10px 5%;
            padding: 10px;
            background-color: skyblue;
            border-radius: 7px;
            user-select: none;
            cursor: pointer;
            transition: 0.7s;
          }
          .option:hover {
            transform: scale(1.05);
            box-shadow: 0 0 2px 1px rgb(219, 198, 198);
          }
          .option:active {
            transform: scale(1.12);
            background-color: rgb(199, 177, 177);
            box-shadow: 0 0 4px 1px rgb(199, 177, 177);
            transition: 0.1s;
          }
          .title {
            font-size: 20px;
            line-height: 25px;
          }
          .description {
            margin-top: 10px;
            font-size: 12px;
          }
        `}
      </style>
    </>
  );
};

Step1.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({ title: PropTypes.string, description: PropTypes.string }))
    .isRequired,
  onOptionSelected: PropTypes.func.isRequired
};

export default Step1;
