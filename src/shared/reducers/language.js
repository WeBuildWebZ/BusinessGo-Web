import { updateLanguage } from '../../services/api/language';

const initialState = 'es';

const Language = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'setLanguage': {
      return action.payload;
    }
    case 'resetLanguage': {
      return initialState;
    }
    default: {
      return state;
    }
  }
};

export default Language;
