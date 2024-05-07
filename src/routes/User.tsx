import BarChart from "../components/BarChart";
import { type GraphData, ChartKey } from "../types";
import ChaartSkeletonWrapper from "../components/ChartSkeleton";
import useSentryData from "../hooks/useSentryData";

const User = () => {
  const chartData = useSentryData();

  if (chartData.error) return <div>Something went wrong</div>;
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

  let allEventsValid = true;

  for (let i = 0; i < userData.length; i++) {
    const item = userData[i];

    if (!item.success || !item.failure) {
      allEventsValid = false;
      break;
    }
  }

  if (!allEventsValid) {
    return (
      <div className="p-4 bg-white rounded-md">There is no User events</div>
    );
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
