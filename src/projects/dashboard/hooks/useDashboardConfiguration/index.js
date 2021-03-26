import { useSelector } from 'react-redux';
import SettingsRounded from '@material-ui/icons/SettingsRounded';
import BorderColorRounded from '@material-ui/icons/BorderColorRounded';

import { getLanguage } from './lang';

const useDashboardConfiguration = () => {
  const language = getLanguage(useSelector(store => store.language));

  return {
    sidebarButtons: [
      { text: language.basic_config, link: '/configuration', symbol: <SettingsRounded /> },
      { text: language.content_editor, link: '/content_editor', symbol: <BorderColorRounded /> }
    ],
    breadcrumbItems: {
      '/': [{ text: language.dashboard }],
      '/content_editor': [{ text: language.dashboard, link: '/' }, { text: language.content_editor }]
    }
  };
};

export default useDashboardConfiguration;
