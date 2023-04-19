import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import { parseCookies } from "nookies";
const MapConnect = () => {
    const cookie = parseCookies()
  const mapElement = useRef(null);
  const apiKey = 'YOUR_API_KEY';

  useEffect(() => {
    mapboxgl.accessToken = apiKey;

    const map = new mapboxgl.Map({
      container: mapElement.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [cookie.lng, cookie.lat],
      zoom: 15,
    });
  }, []);

  return <div ref={mapElement} style={{ height: '500px' }} />;
};

export default MapConnect;
