import { AxiosResponse } from "axios";
import { SentryDataTypes } from "./types";
import { config } from "./config"

export const formatSentryURL = (
    period: string,
    type: SentryDataTypes
) => {
    const baseUrl = `${config.apiUri}/stats/${type}/${period}`;
    return baseUrl;
};

export const isAxiosResponseSuccess = (
    response: AxiosResponse<any[]>
): boolean => {
    return response?.status < 300 && response?.status > 199;
};

