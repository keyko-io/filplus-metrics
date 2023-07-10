import { useQuery } from "@tanstack/react-query";
import { getOpenBugsCount } from "../api";
import { ChartKey } from "../types";
import BarChart from "../components/BarChart";
import ChaartSkeletonWrapper from "../components/ChartSkeleton";

const Bugs = () => {
  const bugsQuery = useQuery({
    queryKey: ["bugs"],
    queryFn: getOpenBugsCount
  });

  if (bugsQuery.error) return <div>Something went wrong</div>;
  if (bugsQuery.isLoading) return <ChaartSkeletonWrapper page="bugs" />;

  const graphData = {
    title: ChartKey.Bugs,
    success: bugsQuery.data.opened,
    failure: bugsQuery.data.closed
  };

  return <BarChart graphData={graphData} key={graphData.title} />;
};

export default Bugs;
