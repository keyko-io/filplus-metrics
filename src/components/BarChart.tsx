import ReactEcharts from "echarts-for-react";
import { InfoIcon } from "../icons";
import Tooltip from "./Tooltip";
import { useState } from "react";
import { CHART_TITLES } from "../constants";
import TotalCount from "./TotalCount";
import TimeRangeButton from "./TimeRangeButton";
import { ChartTooltipContent } from "./ChartTooltipContent";
import { barChartOption } from "../utils";
import { BarData, GraphData } from "../types";

interface Props {
  graphData: GraphData;
}

const BarChart = ({ graphData }: Props) => {
  const [tab, setTab] = useState(7);

  let data: BarData[] = Object.keys(graphData.success).map(key => ({
    day: key,
    positive: graphData.success[key],
    negative: graphData.failure[key]
  }));

  if (tab === 7) {
    data = data.slice(7, 14);
  }

  const option = barChartOption(data, graphData.title);

  return (
    <div className="bg-white rounded-md flex flex-col p-4 shadow-md">
      <div className="flex justify-between px-10 items-center z-10">
        {/* TITLE */}
        <h4 className="text-xl font-semibold">
          {CHART_TITLES[graphData.title]}
        </h4>

        {/* TOTAL COUNT INFO */}
        <div className="flex space-x-2">
          <TotalCount
            data={graphData.success}
            title={graphData.title === "bugs" ? "Total opened bugs : " : ""}
            n={tab}
            bgColor="bg-chart-blue"
          />
          <TotalCount
            data={graphData.failure}
            n={tab}
            bgColor="bg-chart-orange"
            title={graphData.title === "bugs" ? "Total closed bugs : " : ""}
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center space-x-4">
          <Tooltip comp={<ChartTooltipContent title={graphData.title} />}>
            <InfoIcon />
          </Tooltip>

          {/* TIME RANGE CHANGE BUTTONS */}
          <div>
            <TimeRangeButton tab={tab} setTab={setTab} changeTab={7} />
            <TimeRangeButton tab={tab} setTab={setTab} changeTab={14} />
          </div>
        </div>
      </div>

      <ReactEcharts option={option} />
    </div>
  );
};

export default BarChart;
