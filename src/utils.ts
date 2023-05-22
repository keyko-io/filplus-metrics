import { SentryDataTypes } from "./types"
import { config } from "./config"

export const formatSentryURL = (period: string, type: SentryDataTypes) => {
  const baseUrl = `${config.apiUri}/stats/${type}/${period}`
  return baseUrl
}

export const calculateTotalLastNDays = (
  data: Record<string, number>,
  n: number
): number => {
  const values = Object.values(data)
  const lastNDaysValues = values.slice(-n)
  return lastNDaysValues.reduce((acc: number, value: number) => acc + value, 0)
}
