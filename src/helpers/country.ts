import { apiRequest } from "./";

export const getCountryInfo = async (
  url: string,
  setCountryInfo: React.Dispatch<React.SetStateAction<ICountryInfo>>
) => {
  await apiRequest<ICountryInfo>(url)
    .then((response: ICountryInfo) => {
      setCountryInfo(response);
    })
    .catch((error: string) => {
      console.error(error);
    });
};

export const getAllCountries = async (
  setCountries: React.Dispatch<React.SetStateAction<TCountries>>,
  setTableData: React.Dispatch<React.SetStateAction<TTableData>>
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
    })
    .catch((error: string) => {
      console.error(error);
    });
};
