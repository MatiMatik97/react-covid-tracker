import React, { useState, useEffect } from "react";
import "./App.scss";
import { Card, CardContent } from "@material-ui/core";
import { getCountryInfo, getAllCountries } from "./utils/country";
import { MAP_CENTER } from "./utils";
import Header from "./layout/Header/Header";
import Stats from "./layout/Stats/Stats";
import Map from "./layout/Map/Map";
import Table from "./layout/Table/Table";
import LineGraph from "./layout/LineGraph/LineGraph";

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
  const [casesType, setCasesType] = useState<TCasesType>("cases");

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

  return (
    <div className="app">
      <div className="app__left">
        <Header
          countries={countries}
          onCountryChange={onCountryChange}
          selectedCountry={selectedCountry}
        />

        <Stats
          countryInfo={countryInfo}
          casesType={casesType}
          setCasesType={setCasesType}
        />

        <Map
          countries={mapCountries}
          casesType={casesType}
          center={mapCenter}
          zoom={mapZoom}
        />
      </div>

      <Card className="app__right">
        <CardContent>
          <h3>Cases by country</h3>
          <Table tableData={tableData} />

          <h3>History graph - {casesType}</h3>
          <LineGraph casesType={casesType} />
        </CardContent>
      </Card>
    </div>
  );
};

export default App;
