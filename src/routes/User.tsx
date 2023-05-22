import { useQuery } from "@tanstack/react-query"
import { fetchNewData } from "../api"
import BarChart from "../components/BarChart"

const User = () => {
  const chartData = useQuery({
    queryKey: ["chart"],
    queryFn: fetchNewData,
  })

  if (chartData.isLoading) return "loading..."

  const { response } = chartData.data

  console.log(response, "xx")

  const ledgerLoginSuccessful = response["Ledger Login Successful"]
  const ledgerLoginFailed = response["Ledger Login Failed"]

  const userData = [
    {
      title: "ledgerLogin",
      success: ledgerLoginSuccessful,
      failure: ledgerLoginFailed,
    },
  ]

  return (
    <div className="flex flex-col space-y-4">
      {userData.map((data) => (
        <BarChart graphData={data} key={data.title} />
      ))}
    </div>
  )
}

export default User
