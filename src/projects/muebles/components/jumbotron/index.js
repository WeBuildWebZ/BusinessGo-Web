import Jumbotron from 'react-bootstrap/Jumbotron';
import { useSelector } from 'react-redux';

import Spinner from '../../../../components/Spinner';

export const Jumbo = () => {
  const project = useSelector(store => store.project);

  return (
    <div>
      <h2>Bienvenidos!</h2>
      <style jsx>
        {`
          h2 {
            width: 100vw;
            padding-top: 1em;
            text-align: center;
            color: #1a508b;
          }
        `}
      </style>
    </div>
  );
};
