interface ICountryAPI {
  country: string;
  countryInfo: {
    iso2: string;
    lat: number;
    long: number;
  };
  cases: number;
  recovered: number;
  deaths: number;
}
type TCountriesAPI = ICountryAPI[];

interface ICountry {
  name: string;
  value: string;
}
type TCountries = ICountry[];

interface IMapCountry {
  lat: number;
  lon: number;
  cases: number;
  recovered: number;
  deaths: number;
}
type TMapCountries = IMapCountry[];

interface ITableData {
  country: string;
  cases: number;
}
type TTableData = ITableData[];

interface IHistory {
  cases: any;
  recovered: any;
  deaths: any;
}
type TCasesType = "cases" | "recovered" | "deaths";

interface IChart {
  x: string;
  y: number;
}
type TChart = IChart[];

interface ICountryInfo {
  todayCases: number;
  todayRecovered: number;
  todayDeaths: number;
  cases: number;
  recovered: number;
  deaths: number;
  countryInfo: {
    lat: number;
    long: number;
  };
}

type FOnCountryChange = (
  event: React.ChangeEvent<{
    name?: string | undefined;
    value: unknown;
  }>,
  child: React.ReactNode
) => void;

interface IMapCenter {
  lat: number;
  lng: number;
}
