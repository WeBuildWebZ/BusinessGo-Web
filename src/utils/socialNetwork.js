export const ensureSocialNetworkUrl = (socialNetwork, urlOrProfile) =>
  urlOrProfile?.startsWith('@')
    ? `https://www.${socialNetwork}.com/${encodeURIComponent(urlOrProfile.substr(1))}`
    : urlOrProfile;
