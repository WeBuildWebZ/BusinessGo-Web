export const getSortBy = criteria => {
  switch (criteria) {
    case 'Popular Now':
      return { _id: -1 };
    case 'Most Viewed':
      return { 'value.views': 1 };
    default:
      return { _id: -1 };
  }
};
