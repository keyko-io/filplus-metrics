export enum SentryDataPeriods {
  OneDay = "24h",
  SevenDays = "7d",
  TwoWeeks = "14d"
}

export enum SentryDataTypes {
  LoginStats = "login",
  SigningStats = "tx"
}

export type ChartDataResponse = Record<string, Record<string, number>>;

export interface BarData {
  day: string;
  positive: number;
  negative: number;
}

export enum ChartKey {
  Propose = "propose",
  Approve = "approve",
  LedgerLogin = "ledgerLogin",
  GithubLogin = "githubLogin",
  GithubToken = "githubToken",
  Bugs = "bugs"
}

export interface GraphData {
  title: ChartKey;
  success: Record<string, number>;
  failure: Record<string, number>;
}
