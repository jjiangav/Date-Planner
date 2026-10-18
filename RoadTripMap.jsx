import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const DAY_COLORS = { mon: '#f2c879', tue: '#8ecbff', wed: '#ff9f8a', thu: '#c4a7ff' };

function pinIcon(label, variant) {
  return L.divIcon({
    className: '',
    html: `<span class="map-pin map-pin-${variant}">${label}</span>`,
    iconSize: [26, 26],
    iconAnchor: [13, 13],
    popupAnchor: [0, -14],
  });
}

// Each day's `route` is the real driving geometry; stops carry their own coords and pin numbers.
export default function RoadTripMap({ days, routes, startCoords, startLabel, ariaLabel }) {
  const containerRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const map = L.map(containerRef.current, { scrollWheelZoom: false, zoomSnap: 0.25 });
    mapRef.current = map;

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      subdomains: 'abc',
      maxZoom: 19,
      className: 'route-map-tiles',
    }).addTo(map);

    days.forEach((day) => {
      L.polyline(routes[day.key], { color: DAY_COLORS[day.key], weight: 3, opacity: 0.8 }).addTo(map);
    });

    L.marker(startCoords, { icon: pinIcon('★', 'start') })
      .addTo(map)
      .bindPopup(`<strong>${startLabel}</strong>`);

    // Fit to the Cotswolds stops only — including London would zoom out until the villages overlap.
    const allPoints = [];
    days.forEach((day) => {
      day.stops.forEach((stop) => {
        if (stop.noPin) return;
        const variant = stop.closed ? 'closed' : day.key;
        L.marker(stop.coords, { icon: pinIcon(String(stop.n), variant) })
          .addTo(map)
          .bindPopup(`<strong>${stop.n}. ${stop.title}</strong><br/>${stop.time}`);
        allPoints.push(stop.coords);
      });
    });

    map.fitBounds(allPoints, { padding: [28, 28] });

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, [days, routes, startCoords, startLabel]);

  return <div ref={containerRef} className="route-map route-map-tall" role="img" aria-label={ariaLabel} />;
}
