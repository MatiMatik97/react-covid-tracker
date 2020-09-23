import React, { useState, useEffect } from "react";
import "./LineGraph.scss";
import { Line } from "react-chartjs-2";
import { CASES_TYPE_PROPS, formatLargeNumber } from "../../utils";
import { getHistoryData } from "../../utils/chart";
interface LineGraphProps {
  casesType: TCasesType;
}

const LineGraph: React.FC<LineGraphProps> = ({ casesType = "cases" }) => {
  const [data, setData] = useState<TChart>([]);

  useEffect(() => {
    (async () => {
      await getHistoryData(
        "https://disease.sh/v3/covid-19/historical/all?lastdays=128",
        casesType,
        setData
      );
    })();
  }, [casesType]);

  return (
    <div className="lineGraph">
      <Line
        data={{
          datasets: [
            {
              backgroundColor: CASES_TYPE_PROPS[casesType].rgba,
              borderColor: CASES_TYPE_PROPS[casesType].rgb,
              data,
            },
          ],
        }}
        options={{
          legend: {
            display: false,
          },
          elements: {
            point: {
              radius: 0,
            },
          },
          maintainAspectRatio: false,
          tooltips: {
            mode: "index",
            intersect: false,
            callbacks: {
              label: (item: { value: number }) => formatLargeNumber(item.value),
            },
          },
          scales: {
            xAxes: [
              {
                type: "time",
                time: {
                  parser: "MM/DD/YY",
                  tooltipFormat: "ll",
                },
              },
            ],
            yAxes: [
              {
                gridLines: {
                  display: false,
                },
                ticks: {
                  callback: (value: number) => formatLargeNumber(value),
                },
              },
            ],
          },
        }}
      />
    </div>
  );
};

export default LineGraph;
