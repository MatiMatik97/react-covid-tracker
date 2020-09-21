interface CountryAPI {
  country: string;
  countryInfo: {
    iso2: string;
  };
}

type CountriesAPI = CountryAPI[];

interface Country {
  name: string;
  value: string;
}

type Countries = Country[];
