const initialState = null;

const Card = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'setCard': {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default Card;
