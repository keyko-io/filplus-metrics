import axios from "axios";
import {
  SentryDataTypes,
  SentryDataPeriods,
  ChartDataResponse
} from "../types";
import { formatSentryURL } from "../utils";
import { config } from "../config";

export const fetchSentryData = async (
  period: SentryDataPeriods,
  type: SentryDataTypes
) => {
  try {
    const url = formatSentryURL(period, type);
    const response = await axios.get(url);

    return response.data;
  } catch (error) {
    console.error(error);
    return {};
  }
};

export const fetchSentryEvents = async (): Promise<ChartDataResponse> => {
  try {
    const response = await axios.get(`${config.apiUri}/stats/sentry/events`);
    return response.data;
  } catch (error) {
    return {};
  }
};

export const getOpenBugsCount = async (): Promise<{ count: number }> => {
  try {
    const url = `${config.apiUri}/stats/bugs/open`;
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    console.log(error);
    return { count: 0 };
  }
};
