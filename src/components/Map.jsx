import React from 'react'
import "leaflet/dist/leaflet.css";
import L from 'leaflet';
import markericon from '../images/icon-location.svg';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import { useIpContext } from "./IpContext";

const Map = () => {
    const {coordinates}= useIpContext();
    const marker = new L.icon({iconUrl:markericon});
    let state = {
        keyMAP : Math.random(),
    };
  return (
    <MapContainer
    key={state.keyMAP}
    center={[coordinates.lat, coordinates.lng]}
    zoom={18}
    className="w-full h-3/5 z-0"
  >
    <TileLayer

      attribution="Google Maps"
      url="https://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}"
    >

      <Marker
        position={[coordinates.lat, coordinates.lng]}
        icon={marker}
      ></Marker>

    </TileLayer>
  </MapContainer>
  )
}

export default Map