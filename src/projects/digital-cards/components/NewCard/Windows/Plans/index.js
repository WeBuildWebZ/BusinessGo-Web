import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { listProducts } from '../../../../../../services/ecommerce_api/product';
import { getProductCodeTranslation } from '../../../../../../translations/productsCodes';

const Plans = () => {
  const languageCode = useSelector(store => store.language);
  const project = useSelector(store => store.project);
  const [plans, setPlans] = useState(null);
  const productTranslation = getProductCodeTranslation(languageCode);

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
        const isEven = !(i % 2);

        return (
          <div className={`plan${isEven ? ' evenPlan' : ''}`}>
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
            margin: 15px 0 10px 0;
            padding: 10px;
            background-color: rgb(219, 198, 198);
            border-radius: 0 7px 7px 0;
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
          .evenPlan {
            margin-left: 10%;
            border-radius: 7px 0 0 7px;
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

export default Plans;
