import BarChart from "../components/BarChart";
import { fetchSentryEvents } from "../api";
import { useQuery } from "@tanstack/react-query";
import ChaartSkeletonWrapper from "../components/ChartSkeleton";
import { GraphData, ChartKey } from "../types";

const Blockchain = () => {
  const chartData = useQuery({
    queryKey: ["chart"],
    queryFn: fetchSentryEvents
  });

  if (chartData.isLoading) return <ChaartSkeletonWrapper />;

  const response = chartData.data;

  let blockchainData: GraphData[] = [];

  if (response) {
    const {
      "Request Approved": requestApproved,
      "Approval Failed": approvalFailed,
      "Request Proposed": requestProposed,
      "Proposal Failed": proposalFailed
    } = response;

    blockchainData = [
      {
        title: ChartKey.Propose,
        success: requestProposed,
        failure: proposalFailed
      },
      {
        title: ChartKey.Approve,
        success: requestApproved,
        failure: approvalFailed
      }
    ];
  }

  return (
    <div className="flex flex-col space-y-4">
      {blockchainData.map(item => (
        <BarChart graphData={item} key={item.title} />
      ))}
    </div>
  );
};

export default Blockchain;
