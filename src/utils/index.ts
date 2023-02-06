import numeral from "numeral";

export const apiRequest = async <T>(url: string): Promise<T> => {
  try {
    const response = await fetch(url);
    return response.json() as Promise<T>;
  } catch (error : any) {
    throw new Error(error);
  }
};

export const formatLargeNumber = (number: number) => {
  if (number < 1000) return number;
  return numeral(number).format("0.0a");
};

export const MAP_CENTER = {
  lat: 51.9194,
  lng: 19.1451,
};

export const CASES_TYPE_PROPS = {
  cases: {
    rgb: "rgb(204, 16, 52)",
    rgba: "rgba(204, 16, 52, 0.5)",
    multiplier: 800,
  },
  recovered: {
    rgb: "rgb(125, 215, 29)",
    rgba: "rgba(125, 215, 29, 0.5)",
    multiplier: 800,
  },
  deaths: {
    rgb: "rgb(251, 68, 67)",
    rgba: "rgba(251, 68, 67, 0.5)",
    multiplier: 800,
  },
};
