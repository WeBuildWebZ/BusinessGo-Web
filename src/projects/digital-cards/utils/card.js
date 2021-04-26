export const formatCard = card => {
  const primary_photo = card.profile_photo || card.logo;

  return {
    ...card,
    is_person: card.destination === 'person',
    is_business: card.destination === 'business',
    primary_photo,
    secondary_photo: primary_photo ? card.logo : null,
    photo_or_logo: card.profile_photo || card.logo,
    photoSize: 195,
    border_color: card.border_color || 'green',
    completeName: card.name && card.surnames ? `${card.name}${card.surnames ? ` ${card.surnames}` : ''}` : '',
    completeAddress: [card.address, card.state, card.municipality, card.country].join(', ')
  };
};
