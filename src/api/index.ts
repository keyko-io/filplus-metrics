import axios from "axios"
import { SentryDataTypes, SentryDataPeriods } from "../types"
import { formatSentryURL } from "../utils"
import { config } from "../config"

export const fetchSentryData = async (
  period: SentryDataPeriods,
  type: SentryDataTypes
) => {
  try {
    const url = formatSentryURL(period, type)
    const response = await axios.get(url)

    return response.data
  } catch (error) {
    console.error(error)
    return {}
  }
}

export async function getOpenBugsCount() {
  const url = `${config.apiUri}/stats/issues`
  const res = await axios.get(url)
  return res.data
}
