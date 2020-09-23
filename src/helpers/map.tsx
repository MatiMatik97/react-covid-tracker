import React from "react";
import numeral from "numeral";
import { Circle, Popup } from "react-leaflet";

const CASES_TYPE_COLORS = {
  cases: {
    hex: "#CC1034",
    rgb: "rgb(204, 16, 52)",
    half_op: "rgba(204, 16, 52, 0.5)",
    multiplier: 800,
  },
  recovered: {
    hex: "#7dd71d",
    rgb: "rgb(125, 215, 29)",
    half_op: "rgba(125, 215, 29, 0.5)",
    multiplier: 800,
  },
  deaths: {
    hex: "#fb4443",
    rgb: "rgb(251, 68, 67)",
    half_op: "rgba(251, 68, 67, 0.5)",
    multiplier: 800,
  },
};

export const showDataOnMap = (
  data: TMapCountries,
  casesType: TCasesType = "cases"
) => {
  return data.map((country) => (
    <Circle
      center={[country.lat, country.lon]}
      fillOpacity={0.4}
      color={CASES_TYPE_COLORS[casesType].hex}
      fillColor={CASES_TYPE_COLORS[casesType].hex}
      radius={
        Math.sqrt(country[casesType]) * CASES_TYPE_COLORS[casesType].multiplier
      }
    >
      <Popup>
        <h1>Pop</h1>
      </Popup>
    </Circle>
  ));
};
