import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

import { getCoordinates } from '../../../../../../../utils/googleMaps';

const Address = () => {
  const card = useSelector(store => store.card);

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

Address.Location = () => {
  const card = useSelector(store => store.card);

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

Address.GoogleMap = () => {
  const card = useSelector(store => store.card);
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

export default Address;
