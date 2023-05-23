import { Outlet } from "react-router-dom"
import { BugIcon } from "../icons"
import { useQuery } from "@tanstack/react-query"
import { getOpenBugsCount } from "../api"
import SideBar from "../components/SideBar"

function Root() {
  const bugsQuery = useQuery({
    queryKey: ["bugs"],
    queryFn: getOpenBugsCount,
  })

  return (
    <section className="flex">
      <SideBar />

      <main className="bg-[#E7E7E7] flex-1 px-8 py-6 ml-64 min-h-screen">
        <div className="max-w-[1200px] mx-auto">
          <div className="bg-white rounded-md p-4 shadow-md mb-4">
            {bugsQuery.isLoading ? (
              "Loading..."
            ) : (
              <div className="flex items-center space-x-4 ">
                <BugIcon />
                <div> Number of open bugs : {bugsQuery.data.count}</div>
              </div>
            )}
          </div>

          <Outlet />
        </div>
      </main>
    </section>
  )
}

export default Root
