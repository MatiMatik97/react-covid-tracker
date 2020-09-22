import { Card, CardContent } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import "./App.scss";
import { apiRequest } from "./helpers";
import Header from "./layout/Header/Header";
import Stats from "./layout/Stats/Stats";

const App: React.FC = () => {
  const [countries, setCountries] = useState<TCountries>([]);
  const [selectedCountry, setSelectedCountry] = useState<string>("worldwide");
  const [countryInfo, setCountryInfo] = useState<ICountryInfo>({
    todayCases: 0,
    todayRecovered: 0,
    todayDeaths: 0,
    cases: 0,
    recovered: 0,
    deaths: 0,
  });

  const getCountryInfo = async (url: string) => {
    await apiRequest<ICountryInfo>(url)
      .then((response: ICountryInfo) => {
        setCountryInfo(response);
      })
      .catch((error: string) => {
        console.error(error);
      });
  };

  const getAllCountries = async () => {
    await apiRequest<TCountriesAPI>("https://disease.sh/v3/covid-19/countries")
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
  };

  const onCountryChange: TOnCountryChange = async (event) => {
    const countryCode = event.target.value;

    setSelectedCountry(countryCode as string);

    const url = `https://disease.sh/v3/covid-19/${
      countryCode === "worldwide" ? "all" : `countries/${countryCode}`
    }`;

    await getCountryInfo(url);
  };

  useEffect(() => {
    (async () => {
      await getAllCountries();

      await getCountryInfo("https://disease.sh/v3/covid-19/all");
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
        <Stats countryInfo={countryInfo} />
      </div>

      <Card className="app__right">
        <CardContent>
          <h3>Live Cases by country</h3>
          <h3>Worldwide new cases</h3>
        </CardContent>
      </Card>
    </div>
  );
};

export default App;
