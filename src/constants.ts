import { ChartKey } from "./types";

export const METRICS_TOOLTIP_INFO = {
  propose: {
    success: {
      title: "Number of successful request proposals:",
      desc: "Number of times a user clicks the approve request button, and a transaction successfully posts on the chain."
    },
    failed: {
      title: "Number of unsuccessful request proposals:",
      desc: "Instances where a user sends a request proposed message from the front end, but a transaction does not post on the chain."
    },
    extraInfo:
      "- Request proposal indicates that its the first notary to sign an allocation."
  },
  approve: {
    success: {
      title: "Number of successful request proposals:",
      desc: "Number of times a user clicks the approve request button, and a transaction successfully posts on the chain."
    },
    failed: {
      title: "Number of unsuccessful request proposals:",
      desc: "Instances where a user sends a request approved message from the front end, but a transaction does not post on the chain."
    },
    extraInfo:
      "- Request approved indicates that its the first notary to sign an allocation."
  },
  ledgerLogin: {
    success: {
      title: "Number of Ledger Logins:",
      desc: "Number of times users successfully link their ledger to the dashboard."
    },
    failed: {
      title: "Number of unsuccessful Ledger Logins:",
      desc: "Number of times users fail to link their ledger to the dashboard."
    },
    extraInfo: ""
  },
  githubLogin: {
    success: {
      title: "Number of GitHub Logins:",
      desc: "Number of times users successfully initiate the GitHub login process and return to the dashboard."
    },
    failed: {
      title: "Number of unsuccessful GitHub Logins:",
      desc: "Number of times users fail to link their github account to the dashboard."
    },
    extraInfo: ""
  },
  githubToken: {
    success: {
      title: "Number of GitHub Tokens Loaded:",
      desc: "Number of instances where users successfully login using a GitHub auth token, such as when a user logs in previously and re-logs into GitHub without needing to re-authenticate manually."
    },
    failed: {
      title: "Number of unsuccessful GitHub Tokens Loaded:",
      desc: "Number of instances fail to load github token"
    },
    extraInfo: ""
  },
  bugs: {
    success: {
      title: "",
      desc: ""
    },
    failed: {
      title: "",
      desc: ""
    },
    extraInfo: ""
  }
};

export const CHART_TITLES: Record<ChartKey, string> = {
  [ChartKey.Propose]: "Proposal",
  [ChartKey.Approve]: "Approval",
  [ChartKey.LedgerLogin]: "Ledger Login",
  [ChartKey.GithubLogin]: "Github Login",
  [ChartKey.GithubToken]: "Github Token Load",
  [ChartKey.Bugs]: "Bugs"
};
