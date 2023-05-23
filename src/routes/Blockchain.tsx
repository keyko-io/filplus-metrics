import BarChart from "../components/BarChart"
import { fetchNewData } from "../api"
import { useQuery } from "@tanstack/react-query"
import { ChartDataResponse } from "../types"
import { ChartKey } from "../constants"

const Blockchain = () => {
  const chartData = useQuery({
    queryKey: ["chart"],
    queryFn: fetchNewData,
  })

  if (chartData.isLoading) return "loading..."

  const { response }: { response: ChartDataResponse } = chartData.data

  const {
    "Request Approved": requestApproved,
    "Approval Failed": approvalFailed,
    "Request Proposed": requestProposed,
    "Proposal Failed": proposalFailed,
  } = response

  const blockchainData = [
    {
      title: ChartKey.Propose,
      success: requestProposed,
      failure: proposalFailed,
    },
    {
      title: ChartKey.Approve,
      success: requestApproved,
      failure: approvalFailed,
    },
  ]

  return (
    <div className="flex flex-col space-y-4">
      {blockchainData.map((item) => (
        <BarChart graphData={item} key={item.title} />
      ))}
    </div>
  )
}

export default Blockchain
