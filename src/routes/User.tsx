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

  const ledgerLoginSuccessful = response["Ledger Login Successful"]
  const ledgerLoginFailed = response["Ledger Login Failed"]

  const githubLoginSuccessful = response["Github Login Success"]
  const githubloginFailed: any = {}

  for (const key in githubLoginSuccessful) {
    githubloginFailed[key] = 0
  }

  const githubTokenSuccesful = response["Loaded Github Token Successfully"]
  const githubTokenFailed: any = {}

  for (const key in githubTokenSuccesful) {
    githubTokenFailed[key] = 0
  }

  const userData = [
    {
      title: "ledgerLogin",
      success: ledgerLoginSuccessful,
      failure: ledgerLoginFailed,
    },
    {
      title: "githubLogin",
      success: githubLoginSuccessful,
      failure: githubloginFailed,
    },
    {
      title: "githubToken",
      success: githubTokenSuccesful,
      failure: githubTokenFailed,
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
