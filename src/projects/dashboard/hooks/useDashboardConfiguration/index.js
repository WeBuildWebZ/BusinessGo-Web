import { useSelector } from 'react-redux';
import FormatIndentIncreaseRounded from '@material-ui/icons/FormatIndentIncreaseRounded';
import BorderColorRounded from '@material-ui/icons/BorderColorRounded';

import { getLanguage } from './lang';

const useDashboardConfiguration = () => {
  const language = getLanguage(useSelector(store => store.language));

  return {
    sidebarButtons: [
      { text: language.forms_editor, link: '/forms', symbol: <FormatIndentIncreaseRounded /> },
      { text: language.content_editor, link: '/content_editor', symbol: <BorderColorRounded /> }
    ],
    breadcrumbItems: {
      '/': [{ text: language.dashboard }],
      '/content_editor': [{ text: language.dashboard, link: '/' }, { text: language.content_editor }],
      '/forms': [{ text: language.dashboard, link: '/' }, { text: language.forms_editor }]
    }
  };
};

export default useDashboardConfiguration;
