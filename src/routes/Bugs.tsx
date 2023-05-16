import axios from "axios"
import { config } from "../config"
import { isAxiosResponseSuccess } from "../utils"
import { useEffect } from "react"

const Bugs = () => {
  const fetchOpenBugsCount = async () => {
    try {
      const url = `${config.apiUri}/stats/issues`
      const response = await axios.get(url)
      if (isAxiosResponseSuccess(response)) {
        return response.data
      }
      console.log("error")
      console.log(response.status)
      return { count: 0 }
    } catch (error) {
      console.log("error")
      console.log(error)
      return { count: 0 }
    }
  }
  useEffect(() => {
    fetchOpenBugsCount().then((data) => console.log(data))
  }, [])

  return <div>hello i am bugs page</div>
}

export default Bugs
