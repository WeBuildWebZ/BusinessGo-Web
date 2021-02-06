import { updateLanguage } from '../../services/api/language';

const initialState = 'en';

const Language = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'setLanguage': {
      updateLanguage(action.payload);

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
