import React, { useState, useEffect } from "react";
import "./App.scss";
import { apiRequest } from "./helpers";
import Header from "./layout/Header/Header";
import Stats from "./layout/Stats/Stats";

const App: React.FC = () => {
  const [countries, setCountries] = useState<TCountries>([]);
  const [selectedCountry, setSelectedCountry] = useState<string>("worldwide");

  const onCountryChange: TOnCountryChange = (event) => {
    const countryCode = event.target.value;

    setSelectedCountry(countryCode as string);
  };

  useEffect(() => {
    (async () => {
      apiRequest<TCountriesAPI>("https://disease.sh/v3/covid-19/countries")
        .then((response: TCountriesAPI) => {
          const _countries = response.map((country) => {
            return {
              name: country.country,
              value: country.countryInfo.iso2,
            } as ICountry;
          });

          setCountries(_countries);
        })
        .catch((error: string) => {
          console.error(error);
        });
    })();
  }, []);

  return (
    <div className="app">
      <Header
        countries={countries}
        onCountryChange={onCountryChange}
        selectedCountry={selectedCountry}
      />

      <Stats />
    </div>
  );
};

export default App;
