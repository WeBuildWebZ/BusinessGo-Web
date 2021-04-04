import { cardPropTypes } from '../constants';

import CoverPhoto from './CoverPhoto';
import MainData from './MainData';
import BusinessFlags from './BusinessFlags';
import Description from './Description';
import Address from './Address';
import BusinessHours from './BusinessHours';

const Design1 = props => {
  const { card } = props;
  console.log('card', card);

  return (
    <div className="card">
      <div className="content">
        <CoverPhoto card={card} />
        <MainData card={card} />
        <hr />
        <BusinessFlags card={card} />
        <hr />
        <Description card={card} />
        <hr />
        <Address card={card} />
        <hr />
        <BusinessHours card={card} />
      </div>
      <style jsx>
        {`
          .card {
            width: 100vw;
            height: 100vh;
          }
          .content {
            padding: 0 30px 0 30px;
          }
        `}
      </style>
    </div>
  );
};

Design1.propTypes = cardPropTypes;

export default Design1;
