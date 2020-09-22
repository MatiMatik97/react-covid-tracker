interface ICountryAPI {
  country: string;
  countryInfo: {
    iso2: string;
  };
}

type TCountriesAPI = ICountryAPI[];

interface ICountry {
  name: string;
  value: string;
}

type TCountries = ICountry[];

type TOnCountryChange = (
  event: React.ChangeEvent<{
    name?: string | undefined;
    value: unknown;
  }>,
  child: React.ReactNode
) => void;
