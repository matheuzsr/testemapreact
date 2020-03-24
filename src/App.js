import React from "react";
import { Map, CircleMarker, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import * as parkData from "./data/skateboard-parks.json";
import "./App.css";

export const icon = new Icon({
  iconUrl: "/skateboarding.svg",
  iconSize: [25, 25]
});

export default function App() {

  return (
    <Map center={[45.4, -75.7]} zoom={5} >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

      {parkData.features.map(park => (
        <CircleMarker center={[
          park.geometry.coordinates[1],
          park.geometry.coordinates[0]
        ]} color="red" radius={30}></CircleMarker>

      ))}

    </Map>
  );
}
