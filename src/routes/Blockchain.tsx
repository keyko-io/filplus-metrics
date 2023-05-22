import BarChart from "../components/BarChart"
import { fetchNewData } from "../api"
import { useQuery } from "@tanstack/react-query"

const Blockchain = () => {
  const chartData = useQuery({
    queryKey: ["chart"],
    queryFn: fetchNewData,
  })

  if (chartData.isLoading) return "loading..."

  const { response } = chartData.data

  const requestApproved = response["Request Approved"]
  const approvalFailed = response["Approval Failed"]

  const requestProposed = response["Request Proposed"]
  const proposalFailed = response["Proposal Failed"]

  const blockchainData = [
    {
      title: "propose",
      success: requestProposed,
      failure: proposalFailed,
    },
    {
      title: "approve",
      success: requestApproved,
      failure: approvalFailed,
    },
  ]

  return (
    <div className="flex flex-col space-y-4">
      {blockchainData.map((data) => (
        <BarChart graphData={data} key={data.title} />
      ))}
    </div>
  )
}

export default Blockchain
