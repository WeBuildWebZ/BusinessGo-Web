import user from './user';
import token from './token';
import session from './session';
import alerts from './alerts';
import project from './project';
import language from './language';
import adminSection from './adminSection';
import clientModels from './clientModels';
import selectedClientModel from './selectedClientModel';
import sidebarWidth from './sidebarWidth';
import navbarHeight from './navbarHeight';
import queryParams from './queryParams';
import cartItems from './cartItems';
import configurationSection from './admin/configurationSection';
import selectedForm from './admin/selectedForm';
import selectedFormSection from './admin/selectedFormSection';
import selectedChatbotChannel from './admin/selectedChatbotChannel';
import selectedChatbotSection from './admin/selectedChatbotSection';

const CommonReducers = {
  user,
  token,
  session,
  alerts,
  project,
  language,
  adminSection,
  clientModels,
  selectedClientModel,
  sidebarWidth,
  navbarHeight,
  queryParams,
  cartItems,
  // Admin Section
  configurationSection,
  selectedForm,
  selectedFormSection,
  selectedChatbotChannel,
  selectedChatbotSection
};

export default CommonReducers;
