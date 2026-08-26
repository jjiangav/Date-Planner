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

export default function RouteMap({ walkStops, canaryWharfStops }) {
  const containerRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const map = L.map(containerRef.current, {
      scrollWheelZoom: false,
    });
    mapRef.current = map;

    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 19,
    }).addTo(map);

    const walkLatLngs = walkStops.map((s) => s.coords);
    L.polyline(walkLatLngs, { color: '#f2c879', weight: 3, opacity: 0.85 }).addTo(map);

    const towerBridge = walkStops[walkStops.length - 1].coords;
    const canaryEntry = canaryWharfStops[0].coords;
    L.polyline([towerBridge, canaryEntry], {
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

  return <div ref={containerRef} className="route-map" role="img" aria-label="Map of the route from Westminster to Tower Bridge, then Canary Wharf" />;
}
