import { useEffect, useRef } from 'react';
import mapboxgl, { Map } from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

export const Mapbox = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_GL_ACCESS_TOKEN
    ? process.env.NEXT_PUBLIC_MAPBOX_GL_ACCESS_TOKEN
    : '';

  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    const map = new Map({
      container: mapContainer.current!,
      style: 'mapbox://styles/tomasferreras/clawtkdc1001j16pi0qiudynd',
      center: [-67.72531612754138, -53.794585313559814],
      zoom: 13,
    });
  }, []);
  return <div ref={mapContainer} className="w-full h-[350px]" />;
};
