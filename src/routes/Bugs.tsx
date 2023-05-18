import { useQuery } from "@tanstack/react-query"
import { getOpenBugsCount } from "../api"
import { BugIcon } from "../icons"

const Bugs = () => {
  const bugsQuery = useQuery({
    queryKey: ["bugs"],
    queryFn: getOpenBugsCount,
  })

  if (bugsQuery.isLoading) return <div>Loading...</div>

  return (
    <>
      <div className="bg-white flex items-center rounded-md p-4 space-x-4 shadow-md">
        <BugIcon />
        <div> Number of open bugs : {bugsQuery.data.count}</div>
      </div>
    </>
  )
}

export default Bugs
