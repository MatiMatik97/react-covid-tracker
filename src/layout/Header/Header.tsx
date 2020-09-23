import React from "react";
import "./Header.scss";
import { FormControl, MenuItem, Select } from "@material-ui/core";

interface HeaderProps {
  countries: TCountries;
  onCountryChange: FOnCountryChange;
  selectedCountry: string;
}

const Header: React.FC<HeaderProps> = ({
  countries,
  onCountryChange,
  selectedCountry,
}) => {
  return (
    <div className="header">
      <h1>Covid 19 Tracker</h1>

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
  );
};

export default Header;
