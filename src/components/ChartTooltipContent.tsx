import { ChartKey, METRICS_TOOLTIP_INFO } from "../constants"
import Square from "./Square"

interface Props {
  title: ChartKey
}

export const ChartTooltipContent = ({ title }: Props) => {
  return (
    <div className="flex flex-col space-y-2 py-2">
      <p>
        <Square bgColor="bg-chart-blue" />
        <span className="pr-1 font-semibold">
          {METRICS_TOOLTIP_INFO[title].success.title}
        </span>
        <span>{METRICS_TOOLTIP_INFO[title].success.desc}</span>
      </p>
      <p>
        <Square bgColor="bg-chart-orange" />
        <span className="pr-1 font-semibold">
          {METRICS_TOOLTIP_INFO[title].failed.title}
        </span>
        <span>{METRICS_TOOLTIP_INFO[title].failed.desc}</span>
      </p>
      <p>{METRICS_TOOLTIP_INFO?.[title]?.extraInfo}</p>
    </div>
  )
}
