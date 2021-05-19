import { cardPropTypes } from '../constants';

import CoverPhoto from './CoverPhoto';
import SmallPhoto from './SmallPhoto';
import Presentation from './Presentation';

const Design2 = props => {
  const { card } = props;

  return (
    <div className="cardDesign">
      <CoverPhoto card={card} />
      <SmallPhoto card={card} />
      <Presentation card={card} />
    </div>
  );
};

Design2.propTypes = cardPropTypes;

export default Design2;
