import React from "react";
import "./MapCircle.scss";
import { Circle, Popup } from "react-leaflet";
import { CASES_TYPE_PROPS } from "../../utils";
import { formatLargeNumber } from "../../utils";

interface MapCircleProps {
  country: IMapCountry;
  casesType: TCasesType;
}

const mapValue = (
  value: number,
  x1: number,
  y1: number,
  x2: number,
  y2: number
) => ((value - x1) * (y2 - x2)) / (y1 - x1) + x2;

const MapCircle: React.FC<MapCircleProps> = ({ country, casesType }) => {
  const { cases, deaths, flag, lat, lon, recovered, name } = country;

  const radius =
    Math.sqrt(country[casesType]) * CASES_TYPE_PROPS[casesType].multiplier;

  const mappedRadiusValue = mapValue(radius, 0, 100000000, 0, 3000000);

  return (
    <div className="mapCircle">
      <Circle
        center={[lat, lon]}
        fillOpacity={0.4}
        color={CASES_TYPE_PROPS[casesType].rgb}
        fillColor={CASES_TYPE_PROPS[casesType].rgb}
        radius={mappedRadiusValue}
      >
        <Popup>
          <div className="mapCircle__popup">
            <div
              className="mapCircle__flag"
              style={{ backgroundImage: `url(${flag})` }}
            ></div>
            <div className="mapCircle__name">{name}</div>
            <div className="mapCircle__cases">
              Cases: {formatLargeNumber(cases)}
            </div>
            <div className="mapCircle__recovered">
              Recovered: {formatLargeNumber(recovered)}
            </div>
            <div className="mapCircle__deaths">
              Deaths: {formatLargeNumber(deaths)}
            </div>
          </div>
        </Popup>
      </Circle>
    </div>
  );
};

export default MapCircle;
