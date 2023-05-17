import ReactEcharts from "echarts-for-react"
import { InfoIcon } from "../icons"
import Tooltip from "./Tooltip"
import { useState } from "react"

const BarChart = () => {
  const [tab, setTab] = useState("7d")

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
      <div className="flex justify-between px-10 items-center z-10">
        <h4 className="text-xl font-semibold">Proposal</h4>
        <div className="flex items-center space-x-4">
          <Tooltip text="Information about the metrics here.">
            <InfoIcon />
          </Tooltip>
          <div>
            <button
              onClick={() => setTab("7d")}
              className={`text-xs bg-gray-100 px-2 py-1 ${
                tab === "7d" &&
                "bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
              }`}
            >
              7D
            </button>
            <button
              onClick={() => setTab("14d")}
              className={`text-xs bg-gray-100 px-2 py-1 ${
                tab === "14d" &&
                "bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
              }`}
            >
              14D
            </button>
          </div>
        </div>
      </div>

      <ReactEcharts option={option} />
    </div>
  )
}

export default BarChart
