import { SentryDataTypes } from "./types"
import { config } from "./config"

export const formatSentryURL = (period: string, type: SentryDataTypes) => {
  const baseUrl = `${config.apiUri}/stats/${type}/${period}`
  return baseUrl
}
