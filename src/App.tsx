import React, { useState, useEffect } from "react";
import "./App.scss";
import { Card, CardContent } from "@material-ui/core";
import { getCountryInfo, getAllCountries } from "./helpers/country";
import Header from "./layout/Header/Header";
import Stats from "./layout/Stats/Stats";
import Map from "./layout/Map/Map";
import Table from "./layout/Table/Table";
import LineGraph from "./layout/LineGraph/LineGraph";

const MAP_CENTER = {
  lat: 51.9194,
  lng: 19.1451,
};

const App: React.FC = () => {
  const [countries, setCountries] = useState<TCountries>([]);
  const [selectedCountry, setSelectedCountry] = useState<string>("worldwide");
  const [countryInfo, setCountryInfo] = useState<ICountryInfo>(
    {} as ICountryInfo
  );
  const [tableData, setTableData] = useState<TTableData>([]);
  const [mapCenter, setMapCenter] = useState<IMapCenter>(MAP_CENTER);
  const [mapZoom, setMapZoom] = useState<number>(3);
  const [mapCountries, setMapCountries] = useState<TMapCountries>([]);

  const onCountryChange: FOnCountryChange = async (event) => {
    const countryCode = event.target.value;

    setSelectedCountry(countryCode as string);

    const url = `https://disease.sh/v3/covid-19/${
      countryCode === "worldwide" ? "all" : `countries/${countryCode}`
    }`;

    await getCountryInfo(url, setCountryInfo, setMapCenter);

    if (countryCode === "worldwide") {
      setMapCenter(MAP_CENTER);
      setMapZoom(3);
    } else {
      setMapZoom(4);
    }
  };

  useEffect(() => {
    (async () => {
      await getAllCountries(setCountries, setTableData, setMapCountries);

      await getCountryInfo(
        "https://disease.sh/v3/covid-19/all",
        setCountryInfo,
        setMapCenter
      );
    })();
  }, []);

  console.log(mapCountries);

  return (
    <div className="app">
      <div className="app__left">
        <Header
          countries={countries}
          onCountryChange={onCountryChange}
          selectedCountry={selectedCountry}
        />

        <Stats countryInfo={countryInfo} />

        <Map
          countries={mapCountries}
          casesType={"cases"}
          center={mapCenter}
          zoom={mapZoom}
        />
      </div>

      <Card className="app__right">
        <CardContent>
          <h3>Live cases by country</h3>
          <Table tableData={tableData} />

          <h3>Worldwide new cases</h3>
          <LineGraph casesType={"cases"} />
        </CardContent>
      </Card>
    </div>
  );
};

export default App;
