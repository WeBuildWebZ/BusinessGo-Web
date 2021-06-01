import { useSelector } from 'react-redux';
import FormatIndentIncreaseRounded from '@material-ui/icons/FormatIndentIncreaseRounded';
import BorderColorRounded from '@material-ui/icons/BorderColorRounded';

import { getLanguage } from './lang';

const useDashboardConfiguration = () => {
  const language = getLanguage(useSelector(store => store.language));

  return {
    sidebarButtons: [
      { text: language.miniWebs, link: '/dashboard/cards', symbol: <FormatIndentIncreaseRounded /> }
    ],
    breadcrumbItems: [
      {
        regex: /^\/dashboard\/cards\/new$/,
        items: [
          { text: language.dashboard, link: '/dashboard' },
          { text: language.miniWebs, link: '/dashboard/cards' },
          { text: language.newMiniweb }
        ]
      },
      {
        regex: /^\/dashboard\/cards$/,
        items: [{ text: language.dashboard, link: '/dashboard' }, { text: language.miniWebs }]
      },
      {
        regex: /^\/dashboard$/,
        items: [{ text: language.dashboard, link: '/dashboard' }]
      }
    ]
  };
};

export default useDashboardConfiguration;
