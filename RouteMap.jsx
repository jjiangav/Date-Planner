import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

function pinIcon(label, variant) {
  return L.divIcon({
    className: '',
    html: `<span class="map-pin map-pin-${variant}">${label}</span>`,
    iconSize: [26, 26],
    iconAnchor: [13, 13],
    popupAnchor: [0, -14],
  });
}

export default function RouteMap({ walkStops, canaryWharfStops, ariaLabel }) {
  const containerRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const map = L.map(containerRef.current, {
      scrollWheelZoom: false,
    });
    mapRef.current = map;

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      subdomains: 'abc',
      maxZoom: 19,
      className: 'route-map-tiles',
    }).addTo(map);

    const walkLatLngs = walkStops.map((s) => s.coords);
    // Last stop is reached by transit, not on foot — draw it as the dashed hop.
    const onFootLatLngs = walkLatLngs.slice(0, -1);
    L.polyline(onFootLatLngs, { color: '#f2c879', weight: 3, opacity: 0.85 }).addTo(map);

    const transitStart = walkStops[walkStops.length - 2].coords;
    const transitEnd = walkStops[walkStops.length - 1].coords;
    L.polyline([transitStart, transitEnd], {
      color: '#f2c879',
      weight: 3,
      opacity: 0.5,
      dashArray: '2 10',
    }).addTo(map);

    walkStops.forEach((stop, i) => {
      L.marker(stop.coords, { icon: pinIcon(String(i + 1), 'walk') })
        .addTo(map)
        .bindPopup(`<strong>${stop.title}</strong><br/>${stop.time}`);
    });

    canaryWharfStops.forEach((stop) => {
      L.marker(stop.coords, { icon: pinIcon('★', 'canary') })
        .addTo(map)
        .bindPopup(`<strong>${stop.title}</strong>`);
    });

    const allPoints = [...walkLatLngs, ...canaryWharfStops.map((s) => s.coords)];
    map.fitBounds(allPoints, { padding: [28, 28] });

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, [walkStops, canaryWharfStops]);

  return <div ref={containerRef} className="route-map" role="img" aria-label={ariaLabel} />;
}
