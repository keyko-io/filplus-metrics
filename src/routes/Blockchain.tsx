import { useEffect } from "react";
import BarChart from "../components/BarChart";
import { fetchNewData } from "../api";

const RequiredEvents = {
  "Request Proposed": true,
  "Proposal Failed": true,
  "Request Approved": true,
  "Approval Failed": true,
  "Github Login Success": true,
  "Loaded Github Token Successfully": true,
  "Ledger Login Successful": true,
  "Ledger Login Failed": true,
};

const Blockchain = () => {
  useEffect(() => {
    const handler = async () => {
      const res = await fetchNewData();
      console.log("res", res);
    };

    handler()
  }, []);

  return (
    <div className="flex flex-col space-y-6">
      <BarChart />
      <BarChart />
      <BarChart />
    </div>
  );
};

export default Blockchain;
