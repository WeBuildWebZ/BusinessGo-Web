import { useSelector } from 'react-redux';

import Spinner from '../../../../components/Spinner';

const CartMessage = () => {
  const project = useSelector(store => store.project);

  return (
    <div className="cartMessage">
      {!project && <Spinner />}
      <strong>{project?.configuration.cart_info.cart_message}</strong>
      <style jsx>
        {`
          .cartMessage {
            width: fit-content;
            margin: 7px;
            padding: 28px;
            border-radius: 5px;
            background-color: lightskyblue;
            box-shadow: 0 0 1px 2px lightskyblue;
          }
        `}
      </style>
    </div>
  );
};

export default CartMessage;
