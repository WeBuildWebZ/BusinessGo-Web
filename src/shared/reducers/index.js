import user from './user';
import alerts from './alerts';
import project from './project';
import language from './language';
import adminSection from './adminSection';
import clientModels from './clientModels';
import selectedClientModel from './selectedClientModel';
import configurationSection from './admin/configurationSection';
import selectedForm from './admin/selectedForm';
import selectedFormSection from './admin/selectedFormSection';

const CommonReducers = {
  user,
  alerts,
  project,
  language,
  adminSection,
  clientModels,
  selectedClientModel,
  // Admin Section
  configurationSection,
  selectedForm,
  selectedFormSection
};

export default CommonReducers;
