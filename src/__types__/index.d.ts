interface ICountryAPI {
  country: string;
  countryInfo: {
    iso2: string;
  };
  cases: number;
}
type TCountriesAPI = ICountryAPI[];

interface ICountry {
  name: string;
  value: string;
}
type TCountries = ICountry[];

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
}

type TOnCountryChange = (
  event: React.ChangeEvent<{
    name?: string | undefined;
    value: unknown;
  }>,
  child: React.ReactNode
) => void;
