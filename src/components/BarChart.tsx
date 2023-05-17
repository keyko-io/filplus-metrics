import ReactEcharts from "echarts-for-react"
import { InfoIcon } from "../icons"

const BarChart = () => {
  const data = [
    { day: "may1", positive: 28, negative: 2 },
    { day: "may2", positive: 12, negative: 3 },
    { day: "may3", positive: 19, negative: 3 },
    { day: "may4", positive: 20, negative: 3 },
    { day: "may5", positive: 21, negative: 3 },
    { day: "may6", positive: 29, negative: 3 },
    { day: "may7", positive: 30, negative: 3 },
  ]

  const chartData = data.map((item) => ({
    name: item.day,
    value: [item.negative, item.positive],
  }))

  const option = {
    tooltip: {},
    grid: {
      left: "5%",
      right: "5%",
      top: "10%",
      bottom: "10%",
    },
    xAxis: {
      type: "category",
      data: data.map((item) => item.day),
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        name: "Success",
        stack: "total",
        type: "bar",
        data: chartData.map((item) => item.value[1]),
        itemStyle: {
          color: "#2196F3",
        },
        barWidth: 60,
      },
      {
        name: "Failure",
        stack: "total",
        type: "bar",
        data: chartData.map((item) => item.value[0]),
        itemStyle: {
          color: "#FF5722",
        },
        barWidth: 60,
      },
    ],
  }

  return (
    <div className="bg-white rounded-md flex flex-col p-4 shadow-md">
      <div className="flex justify-between px-10 items-center">
        <h4 className="text-xl font-semibold">Proposal</h4>

        <InfoIcon />
      </div>

      <ReactEcharts option={option} />
    </div>
  )
}

export default BarChart
