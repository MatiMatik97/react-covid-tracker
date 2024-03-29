import React from "react";
import "./Map.scss";
import { Map as LeafletMap, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import MapCircle from "../../components/MapCircle/MapCircle";

interface MapProps {
  countries: TMapCountries;
  casesType: TCasesType;
  center: IMapCenter;
  zoom: number;
}

const Map: React.FC<MapProps> = ({ countries, casesType, center, zoom }) => {
  return (
    <div className="map">
      <LeafletMap center={center} zoom={zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />

        {countries.map((country, index) => (
          <MapCircle key={index} country={country} casesType={casesType} />
        ))}
      </LeafletMap>
    </div>
  );
};

export default Map;
