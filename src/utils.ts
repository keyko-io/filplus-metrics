import { type BarData, type SentryDataTypes } from "./types";
import { config } from "./config";

export const formatSentryURL = (period: string, type: SentryDataTypes) => {
  const baseUrl = `${config.apiUri}/stats/${type}/${period}`;
  return baseUrl;
};

export const calculateTotalLastNDays = (
  data: Record<string, number>,
  n: number
): number => {
  const values = Object.values(data);
  const lastNDaysValues = values.slice(-n);
  return lastNDaysValues.reduce((acc: number, value: number) => acc + value, 0);
};

export const barChartOption = (data: BarData[], title?: string) => {
  return {
    tooltip: {},
    grid: {
      left: "5%",
      right: "5%",
      top: "10%",
      bottom: "10%"
    },
    xAxis: {
      type: "category",
      data: data.map(item => item.day)
    },
    yAxis: {
      type: "value"
    },
    series: [
      {
        name: title === "bugs" ? "Opened" : "Success",
        stack: "total",
        type: "bar",
        data: data.map(item => item.positive),
        itemStyle: {
          color: "#2196F3"
        }
      },
      {
        name: title === "bugs" ? "Closed" : "Failure",
        stack: "total",
        type: "bar",
        data: data.map(item => item.negative),
        itemStyle: {
          color: "#FF5722"
        }
      }
    ]
  };
};
