import { calculateTotalLastNDays } from "../utils"
import Square from "./Square"

interface Props {
  data: Record<string, number>
  n: number
  bgColor: string
}

const TotalCount = ({ data, n, bgColor }: Props) => {
  return (
    <div className="flex items-center text-xs">
      <Square bgColor={bgColor} />
      Total count : {calculateTotalLastNDays(data, n)}
    </div>
  )
}

export default TotalCount
