import axios from "axios";
import {
  type SentryDataTypes,
  type SentryDataPeriods,
  type Validator,
  ServiceStatus,
  type CheckServiceStatusOptions
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
    // console.log(error);
  }
};

export const fetchSentryEvents = async () => {
  try {
    const response = await axios.get(`${config.apiUri}/stats/sentry/events`);
    return response.data;
  } catch (error) {
    // console.log(error);
  }
};

export const getOpenBugsCount = async () => {
  try {
    const url = `${config.apiUri}/stats/bugs/open`;
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    // console.log(error);
  }
};

export const checkServiceStatus = async (
  url: string,
  validator: Validator,
  options?: CheckServiceStatusOptions
): Promise<ServiceStatus> => {
  try {
    const headers: HeadersInit = {};
    let body: any = {};
    if (options?.apiKey) {
      headers["x-api-key"] = options.apiKey;
    }
    if (options?.body) {
      body = options.body;
    }
    const response = await fetch(url, {
      method: options?.method ?? "GET",
      headers,
      body
    });

    if (await validator(response)) {
      return ServiceStatus.Online;
    }
    return ServiceStatus.Offline;
  } catch (error) {
    console.log(error);
    return ServiceStatus.Offline;
  }
};
