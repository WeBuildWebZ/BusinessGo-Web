import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

import { getCoordinates } from '../../../../../../utils/googleMaps';
import { cardPropTypes } from '../../constants';
import { getLanguage } from '../../lang';

const Address = props => {
  const { card } = props;
  const language = getLanguage(useSelector(store => store.language));
  const address = [card.state, card.municipality, card.country].join(', ');
  const [map, setMap] = useState(null);
  const mapRef = useRef();

  useEffect(() => {
    const coordinates = getCoordinates(card.google_maps_url);
    window.initMap = () => {
      if (!coordinates) return;
      setMap(
        new window.google.maps.Map(mapRef.current, {
          center: { lat: coordinates.latitude, lng: coordinates.longitude },
          zoom: 8
        })
      );
    };
  }, []);

  return (
    <div>
      <h3 className="title">{language.address}</h3>
      {address}
      <div className="map" ref={mapRef} />
      <style jsx>
        {`
          * {
            color: #686464;
          }
          .title {
            font-weight: bold;
          }
          .map {
            height: 400px;
          }
          @media only screen and (max-width: 768px) {
            .map {
              height: 250px;
            }
          }
        `}
      </style>
    </div>
  );
};

Address.propTypes = cardPropTypes;

export default Address;
