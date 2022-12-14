import { useRef, useEffect } from 'react';
import leaflet, { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/useMap';
import { MarkerTypes } from '../../const';
import { Offers } from '../../types/offers';
import { CityType } from '../../types/city';

type MapProps = {
  city: CityType;
  offers: Offers | null;
  activeOfferId: number | null;
  mapClassName: string;
};

const defaultCustomIcon = new Icon({
  iconUrl: MarkerTypes.Default,
  iconSize: [27, 39],
  iconAnchor: [13, 39],
});

const activeCustomIcon = new Icon({
  iconUrl: MarkerTypes.Current,
  iconSize: [27, 39],
  iconAnchor: [13, 39],
});

function Map({
  city,
  offers,
  activeOfferId,
  mapClassName,
}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      offers?.forEach((point) => {
        const { location } = point;
        leaflet
          .marker(
            {
              lat: location.latitude,
              lng: location.longitude,
            },
            {
              icon: defaultCustomIcon,
            }
          )
          .setIcon(
            activeOfferId !== null && point.id === activeOfferId
              ? activeCustomIcon
              : defaultCustomIcon
          )
          .addTo(map);
      });
      map.setView([city.latitude, city.longitude], city.zoom);
    }
  });

  return <div style={{ height: '100%' }} ref={mapRef}></div>;
}

export default Map;
