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
        <div>Number of bugs reported : {bugsQuery.data.count}</div>
      </div>

      <a
        href="https://github.com/keyko-io/filecoin-verifier-frontend/issues"
        className="mt-4 inline-block font-medium text-blue-600 hover:underline pl-4"
        target="_blank"
      >
        Click here to see the bugs
      </a>
    </>
  )
}

export default Bugs
