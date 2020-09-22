import React, { useState, useEffect } from "react";
import "./LineGraph.scss";
import { Line } from "react-chartjs-2";
import { getHistoryData } from "../../helpers/chart";
import numeral from "numeral";

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
              backgroundColor: "rgba(204, 16, 52, 0.5)",
              borderColor: "#cc1034",
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
              label: (item: { value: number }) =>
                numeral(item.value).format("+0,0"),
            },
          },
          scales: {
            xAxes: [
              {
                type: "time",
                time: {
                  format: "MM/DD/YY",
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
                  callback: (value: number) => numeral(value).format("0a"),
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
