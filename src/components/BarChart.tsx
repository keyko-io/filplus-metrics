import ReactEcharts from "echarts-for-react"
import { InfoIcon } from "../icons"
import Tooltip from "./Tooltip"
import { useState } from "react"
import { CHART_TITLES, METRICS_TOOLTIP_INFO } from "../constants"

interface Props {
  graphData: any
}

const BarChart = ({ graphData }: Props) => {
  const [tab, setTab] = useState("7d")

  const success = graphData.success
  const failure = graphData.failure

  let data: any = []

  if (success && failure) {
    data = Object.keys(success).map((key) => ({
      day: key,
      positive: success[key],
      negative: failure[key],
    }))
  }

  if (tab === "7d") {
    data = data.slice(7, 14)
  }

  const chartData = data.map((item: any) => ({
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
      data: data.map((item: any) => item.day),
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        name: "Success",
        stack: "total",
        type: "bar",
        data: chartData.map((item: any) => item.value[1]),
        itemStyle: {
          color: "#2196F3",
        },
      },
      {
        name: "Failure",
        stack: "total",
        type: "bar",
        data: chartData.map((item: any) => item.value[0]),
        itemStyle: {
          color: "#FF5722",
        },
      },
    ],
  }

  return (
    <div className="bg-white rounded-md flex flex-col p-4 shadow-md">
      <div className="flex justify-between px-10 items-center z-10">
        <h4 className="text-xl font-semibold">
          {CHART_TITLES[graphData.title]}
        </h4>
        <div className="flex items-center space-x-4">
          <Tooltip
            comp={
              <div className="flex flex-col space-y-2 py-2">
                <p>
                  <span className="bg-[#2196F3] h-2 w-2 inline-block mr-1"></span>
                  <span className="pr-1 font-semibold">
                    {METRICS_TOOLTIP_INFO[graphData.title].success.title}
                  </span>
                  <span>
                    {METRICS_TOOLTIP_INFO[graphData.title].success.desc}
                  </span>
                </p>
                <p>
                  <span className="bg-[#FF5722] h-2 w-2 inline-block mr-1"></span>
                  <span className="pr-1 font-semibold">
                    {METRICS_TOOLTIP_INFO[graphData.title].failed.title}
                  </span>
                  <span>
                    {METRICS_TOOLTIP_INFO[graphData.title].failed.desc}
                  </span>
                </p>
                <p>{METRICS_TOOLTIP_INFO?.[graphData.title]?.extraInfo}</p>
              </div>
            }
          >
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
