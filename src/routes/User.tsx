import BarChart from "../components/BarChart";
import { GraphData, ChartKey } from "../types";
import ChaartSkeletonWrapper from "../components/ChartSkeleton";
import useSentryData from "../hooks/useSentryData";

const User = () => {
  const chartData = useSentryData();

  if (chartData.isLoading) return <ChaartSkeletonWrapper />;

  const response = chartData.data;

  let userData: GraphData[] = [];

  if (response) {
    const ledgerLoginSuccessful = response["Ledger Login Successful"];
    const ledgerLoginFailed = response["Ledger Login Failed"];

    const githubLoginSuccessful = response["Github Login Success"];
    const githubLoginFailed = response["Github Login Failed"];

    const githubTokenSuccessful = response["Loaded Github Token Successfully"];
    const githubTokenFailed: Record<string, number> = {};

    for (const key in githubTokenSuccessful) {
      githubTokenFailed[key] = 0;
    }

    userData = [
      {
        title: ChartKey.LedgerLogin,
        success: ledgerLoginSuccessful,
        failure: ledgerLoginFailed
      },
      {
        title: ChartKey.GithubLogin,
        success: githubLoginSuccessful,
        failure: githubLoginFailed
      },
      {
        title: ChartKey.GithubToken,
        success: githubTokenSuccessful,
        failure: githubTokenFailed
      }
    ];
  }

  return (
    <div className="flex flex-col space-y-4">
      {userData.map(data => (
        <BarChart graphData={data} key={data.title} />
      ))}
    </div>
  );
};

export default User;
