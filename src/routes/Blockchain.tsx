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

  let allEventsValid = true;

  for (let i = 0; i < blockchainData.length; i++) {
    const item = blockchainData[i];

    if (!item.success || !item.failure) {
      allEventsValid = false;
      break;
    }
  }

  if (!allEventsValid) {
    return (
      <div className="p-4 bg-white rounded-md">
        There are no Blockchain events
      </div>
    );
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
