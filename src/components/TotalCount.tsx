import { calculateTotalLastNDays } from "../utils";
import Square from "./Square";

interface Props {
  data: Record<string, number>;
  n: number;
  bgColor: string;
  title?: string;
}

const TotalCount = ({ data, n, bgColor, title }: Props) => {
  return (
    <div className="flex items-center text-xs">
      <Square bgColor={bgColor} />
      {title ?? "Total count : "}
      {calculateTotalLastNDays(data, n)}
    </div>
  );
};

export default TotalCount;
