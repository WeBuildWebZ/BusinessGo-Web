import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { listProducts } from '../../../../../../services/ecommerce_api/product';
import { getProductCodeTranslation } from '../../../../../../translations/productsCodes';

const Step1 = props => {
  const languageCode = useSelector(store => store.language);
  const project = useSelector(store => store.project);
  const [plans, setPlans] = useState(null);
  const productTranslation = getProductCodeTranslation(languageCode);

  const handleSelectPlan = plan => {
    props.onDataAdded({ card_type: plan.code }, 2);
  };

  useEffect(() => {
    if (!project) return;
    listProducts(project, 'card').then(({ data: givenPlans }) => {
      setPlans(givenPlans);
    });
  }, [project]);

  return (
    <>
      {plans?.map((plan, i) => {
        const translation = productTranslation[plan.code];

        return (
          <div key={i} className="plan" onClick={() => handleSelectPlan(plan)}>
            <div className="title">{translation.name}</div>
            <div className="description">{translation.description}</div>
          </div>
        );
      })}
      <style jsx>
        {`
          .plan {
            display: flex;
            flex-direction: column;
            width: 90%;
            min-height: 100px;
            height: fit-content;
            margin: 15px 0 10px 5%;
            padding: 10px;
            background-color: greenyellow;
            border-radius: 7px;
            user-select: none;
            cursor: pointer;
            transition: 0.7s;
          }
          .plan:hover {
            transform: scale(1.05);
            box-shadow: 0 0 2px 1px rgb(219, 198, 198);
          }
          .plan:active {
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
  onDataAdded: PropTypes.func.isRequired
};

export default Step1;
