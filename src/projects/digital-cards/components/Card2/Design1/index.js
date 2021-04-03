import { cardPropTypes } from '../constants';

import CoverPhoto from './CoverPhoto';
import MainData from './MainData';

const Design1 = props => {
  const { card } = props;
  console.log('card', card);

  return (
    <div className="card">
      <CoverPhoto card={card} />
      <MainData card={card} />
      <style jsx>
        {`
          .card {
            width: 100vw;
            height: 100vh;
          }
        `}
      </style>
    </div>
  );
};

Design1.propTypes = cardPropTypes;

export default Design1;
