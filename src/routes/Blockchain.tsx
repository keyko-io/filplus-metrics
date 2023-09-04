import BarChart from "../components/BarChart";
import ChaartSkeletonWrapper from "../components/ChartSkeleton";
import { type GraphData, ChartKey } from "../types";
import useSentryData from "../hooks/useSentryData";

const Blockchain = () => {
  const chartData = useSentryData();

  if (chartData.error) return <div>Something went wrong</div>;
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
