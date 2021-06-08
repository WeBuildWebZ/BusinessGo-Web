import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';

import { getCoordinates } from '../../../../../../../utils/googleMaps';
import { cardPropTypes } from '../../../constants';

const Address = props => {
  const { card } = props;

  return (
    <>
      <img className="businessPhoto" src={card.business_photo} />
      <style jsx>
        {`
          .businessPhoto {
            width: 100%;
            border-radius: 20px;
          }
        `}
      </style>
    </>
  );
};

Address.Location = props => {
  const { card } = props;

  return (
    <div className="location">
      <img className="image" src={window.getAssetUrl('miniweb_assets/design2/small_location.png')} />
      <div className="completeAddress">{card.completeAddress}</div>
      <style jsx>
        {`
          .location {
            display: flex;
            font-weight: bold;
          }
          .completeAddress,
          .image {
            margin: 14px;
          }
        `}
      </style>
    </div>
  );
};

let includedGoogleMapsScripts = false;

Address.GoogleMap = props => {
  const { card } = props;
  const [map, setMap] = useState(null);
  const hasMap = !!card.google_maps_url;
  const mapRef = useRef();

  useEffect(() => {
    const coordinates = hasMap && getCoordinates(card.google_maps_url);
    window.initMap = () => {
      if (!coordinates) return;
      setMap(
        new window.google.maps.Map(mapRef.current, {
          center: { lat: coordinates.latitude, lng: coordinates.longitude },
          zoom: 8
        })
      );
    };

    if (includedGoogleMapsScripts) window.initMap();
  }, []);

  useEffect(() => {
    includedGoogleMapsScripts = true;
  }, []);

  return (
    <>
      <div className={`map${hasMap ? '' : ' noMap'}`} ref={mapRef} />
      {!includedGoogleMapsScripts && (
        <Head>
          <script src="https://polyfill.io/v3/polyfill.min.js?features=default" />
          <script
            src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAHIcjOKvD_-9nkTujgWNLr5fzQQPrn0D4&callback=initMap&libraries=&v=weekly"
            async
          />
        </Head>
      )}
      <style jsx>
        {`
          .map {
            height: 400px;
            border-radius: 20px;
          }
          .noMap {
            display: none;
          }
        `}
      </style>
    </>
  );
};

Address.propTypes = cardPropTypes;
Address.Location.propTypes = cardPropTypes;
Address.GoogleMap.propTypes = cardPropTypes;

export default Address;
