import { ensureSocialNetworkUrl } from '../../../utils/socialNetwork';
import { completeUrl } from '../../../utils/url';

export const formatCard = card => {
  const primary_photo = card.profile_photo || card.logo;
  const completeName =
    card.name && card.surnames ? `${card.name}${card.surnames ? ` ${card.surnames}` : ''}` : '';

  return {
    ...card,
    is_person: card.destination === 'person',
    is_business: card.destination === 'business',
    primary_photo,
    secondary_photo: primary_photo ? card.logo : null,
    photo_or_logo: card.profile_photo || card.logo,
    photoSize: 195,
    border_color: card.border_color || '#00ff00',
    completeName,
    title: card.business_or_company || completeName,
    description: card.business_description || card.personal_description,
    completeAddress: [card.address, card.state, card.municipality, card.country].join(', '),
    instagram_url: completeUrl(ensureSocialNetworkUrl('instagram', card.instagram_url)),
    twitter_url: completeUrl(ensureSocialNetworkUrl('twitter', card.twitter_url)),
    facebook_url: completeUrl(ensureSocialNetworkUrl('facebook', card.facebook_url)),
    phone_number: card.phone_numbers && card.phone_numbers[0]
  };
};
