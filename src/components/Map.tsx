"use client";

import React, { useRef, useEffect, useState } from "react";
import * as maptilersdk from "@maptiler/sdk";
import "@maptiler/sdk/dist/maptiler-sdk.css";
// Optional: for custom container styles

export default function Map() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<maptilersdk.Map | null>(null);
  const nyc = { lng: -73.9865, lat: 40.7613 };
  const [zoom] = useState(14);

  // Initialize Map
  useEffect(() => {
    // Stop if map is already initialized or container is missing
    if (map.current || !mapContainer.current) return;

    maptilersdk.config.apiKey = process.env.NEXT_PUBLIC_MAPTILER_API_KEY || "";

    map.current = new maptilersdk.Map({
      container: mapContainer.current,
      style: maptilersdk.MapStyle.STREETS,
      center: [nyc.lng, nyc.lat],
      zoom: zoom,
      navigationControl: true, // Adds +/- zoom buttons
      geolocateControl: true, // Adds "find my location" button
    });
  }, [zoom]);

  return (
    <div className="map-wrap">
      <div ref={mapContainer} className="map" />
    </div>
  );
}
