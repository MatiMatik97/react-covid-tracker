import React, { useState, useEffect } from "react";
import "./App.scss";
import { FormControl, MenuItem, Select } from "@material-ui/core";
import { apiRequest } from "./helpers";

const App: React.FC = () => {
  const [countries, setCountries] = useState<Countries>([]);
  const [selectedCountry, setSelectedCountry] = useState<string>("worldwide");

  const onCountryChange = (
    event: React.ChangeEvent<{
      name?: string | undefined;
      value: unknown;
    }>,
    child: React.ReactNode
  ) => {
    const countryCode = event.target.value;

    setSelectedCountry(countryCode as string);
  };

  useEffect(() => {
    (async () => {
      apiRequest<CountriesAPI>("https://disease.sh/v3/covid-19/countries")
        .then((response: CountriesAPI) => {
          const _countries = response.map((country) => {
            return {
              name: country.country,
              value: country.countryInfo.iso2,
            } as Country;
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
      <div className="app__header">
        <FormControl>
          <Select
            variant="outlined"
            onChange={onCountryChange}
            value={selectedCountry}
          >
            <MenuItem value="worldwide">Worldwide</MenuItem>

            {countries.map((country, index) => (
              <MenuItem key={index} value={country.value}>
                {country.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default App;
