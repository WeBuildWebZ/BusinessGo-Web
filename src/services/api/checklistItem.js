import api from '../../utils/axios';

export const getChecklistItems = () => api.get('api/checklist_items');
