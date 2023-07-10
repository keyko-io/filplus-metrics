import axios from "axios";
import { SentryDataTypes, SentryDataPeriods } from "../types";
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
    //console.log(error);
  }
};

export const fetchSentryEvents = async () => {
  try {
    const response = await axios.get(`${config.apiUri}/stats/sentry/events`);
    return response.data;
  } catch (error) {
    //console.log(error);
  }
};

export const getOpenBugsCount = async () => {
  try {
    const url = `${config.apiUri}/stats/bugs/open`;
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    //console.log(error);
  }
};
