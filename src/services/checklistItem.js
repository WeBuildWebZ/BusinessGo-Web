import axios from '../utils/axios';

export const getChecklistItems = () =>
  axios({
    method: 'get',
    url: `${process.env.API_URL}/checklist_items`
  });
