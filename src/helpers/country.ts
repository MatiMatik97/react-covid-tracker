import { apiRequest } from "./";

export const getCountryInfo = async (
  url: string,
  setCountryInfo: React.Dispatch<React.SetStateAction<ICountryInfo>>,
  setMapCenter: React.Dispatch<React.SetStateAction<IMapCenter>>
) => {
  await apiRequest<ICountryInfo>(url)
    .then((response: ICountryInfo) => {
      setCountryInfo(response);

      setMapCenter({
        lat: response.countryInfo.lat,
        lng: response.countryInfo.long,
      });
    })
    .catch((error: string) => {
      console.error(error);
    });
};

export const getAllCountries = async (
  setCountries: React.Dispatch<React.SetStateAction<TCountries>>,
  setTableData: React.Dispatch<React.SetStateAction<TTableData>>,
  setMapCountries: React.Dispatch<React.SetStateAction<TMapCountries>>
) => {
  await apiRequest<TCountriesAPI>("https://disease.sh/v3/covid-19/countries")
    .then((response: TCountriesAPI) => {
      const _countries1 = response.map((country) => {
        return {
          country: country.country,
          cases: country.cases,
        } as ITableData;
      });
      setTableData(_countries1);

      const _countries2 = response.map((country) => {
        return {
          name: country.country,
          value: country.countryInfo.iso2,
        } as ICountry;
      });
      setCountries(_countries2);

      const _countries3 = response.map((country) => {
        return {
          lat: country.countryInfo.lat,
          lon: country.countryInfo.long,
          cases: country.cases,
          recovered: country.recovered,
          deaths: country.deaths,
        } as IMapCountry;
      });
      setMapCountries(_countries3);
    })
    .catch((error: string) => {
      console.error(error);
    });
};
