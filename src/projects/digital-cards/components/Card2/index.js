import Design1 from './Design1';
import { cardPropTypes } from './constants';

const Card = props => (
  // TODO make switch with different card designs
  <Design1 {...props} />
);

Card.propTypes = cardPropTypes;

export default Card;
