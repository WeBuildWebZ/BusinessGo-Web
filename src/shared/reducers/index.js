import user from './user';
import alerts from './alerts';
import project from './project';
import language from './language';
import adminSection from './adminSection';
import clientModels from './clientModels';
import selectedClientModel from './selectedClientModel';
import configurationSection from './admin/configurationSection';

const CommonReducers = {
  user,
  alerts,
  project,
  language,
  adminSection,
  clientModels,
  selectedClientModel,
  configurationSection
};

export default CommonReducers;
