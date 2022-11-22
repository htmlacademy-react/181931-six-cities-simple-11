import {useRef, useEffect} from 'react';
import leaflet, {Icon} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/useMap';
import {URL_MARKER_DEFAULT} from '../../const';
import {Offers, OfferCity} from '../../types/offers';

type MapProps = {
  city: OfferCity;
  offers: Offers;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [27, 39],
  iconAnchor: [13, 39]
});


function Map({city, offers}: MapProps): JSX.Element {

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      offers.forEach((point) => {
        const {location} = point;
        leaflet
          .marker({
            lat: location.latitude,
            lng: location.longitude
          },{
            icon: defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [map, offers]);

  return <div style={{height: '100%'}} ref={mapRef}></div>;
}

export default Map;
