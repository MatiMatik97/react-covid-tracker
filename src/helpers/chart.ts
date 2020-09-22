import { apiRequest } from "./";

export const getHistoryData = async (
  url: string,
  casesType: TCasesType = "cases",
  setData: React.Dispatch<React.SetStateAction<TChart>>
) => {
  await apiRequest<IHistory>(url)
    .then((response: IHistory) => {
      const chartData = convertChartData(response, casesType);
      setData(chartData);
    })
    .catch((error: string) => {
      console.error(error);
    });
};

export const convertChartData = (data: IHistory, casesType: TCasesType) => {
  const chartData: { x: string; y: number }[] = [];

  let lastDataPoint: number | null = null;

  for (let date in data[casesType]) {
    if (lastDataPoint) {
      const newDataPoint = {
        x: date,
        y: data[casesType][date] - lastDataPoint,
      };

      chartData.push(newDataPoint);
    }

    lastDataPoint = data[casesType][date];
  }

  return chartData;
};
