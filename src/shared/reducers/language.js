import { updateLanguage } from '../../services/api/language';

const initialState = typeof window === 'object' ? localStorage.getItem('language') || 'es' : 'es';

const Language = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'setLanguage': {
      localStorage.setItem('language', action.payload);
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
