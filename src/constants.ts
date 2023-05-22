export const METRICS_TOOLTIP_INFO: any = {
  propose: {
    success: {
      title: "Number of successful request proposals:",
      desc: "Number of times a user clicks the approve request button, and a transaction successfully posts on the chain.",
    },
    failed: {
      title: "Number of unsuccessful request proposals:",
      desc: "Instances where a user sends a request proposed message from the front end, but a transaction does not post on the chain.",
    },
    extraInfo:
      "- Request proposal indicates that its the first notary to sign an allocation.",
  },
  approve: {
    success: {
      title: "Number of successful request proposals:",
      desc: "Number of times a user clicks the approve request button, and a transaction successfully posts on the chain.",
    },
    failed: {
      title: "Number of unsuccessful request proposals:",
      desc: "Instances where a user sends a request approved message from the front end, but a transaction does not post on the chain.",
    },
    extraInfo:
      "- Request approved indicates that its the first notary to sign an allocation.",
  },
  ledgerLogin: {
    success: {
      title: "Number of Ledger Logins:",
      desc: "Number of times users successfully link their ledger to the dashboard.",
    },
    failed: {
      title: "Number of unsuccessful Ledger Logins:",
      desc: "Number of times users fail to link their ledger to the dashboard.",
    },
    extraInfo: "",
  },
}

export const CHART_TITLES: any = {
  propose: "Proposal",
  approve: "Approval",
  ledgerLogin: "Ledger Login",
}
