import { Outlet, NavLink, Link } from "react-router-dom"
import logo from "../assets/fil-plus.svg"
import { BugIcon, CubeIcon, UserIcon } from "../icons"
import { useQuery } from "@tanstack/react-query"
import { getOpenBugsCount } from "../api"

const navigationItems = [
  {
    name: "Blockchain",
    to: "",
    svg: <CubeIcon />,
  },
  {
    name: "User",
    to: "user",
    svg: <UserIcon />,
  },
]

function Root() {
  const bugsQuery = useQuery({
    queryKey: ["bugs"],
    queryFn: getOpenBugsCount,
  })

  return (
    <section className="flex">
      <nav className="w-64 min-h-screen shadow-md fixed left-0 top-0 flex flex-col">
        <NavLink to="/">
          <img
            src={logo}
            alt="logo"
            className="h-16 w-full cursor-pointer my-3"
          />
        </NavLink>

        <div className="flex flex-col flex-1">
          {navigationItems.map((item) => {
            return (
              <NavLink
                key={item.name}
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center space-x-4 py-3 pl-6 cursor-pointer ${
                    isActive &&
                    "bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
                  }`
                }
              >
                {item.svg}
                <span>{item.name}</span>
              </NavLink>
            )
          })}
        </div>

        <Link to="/about" className="border-t text-center py-4">
          <span>About Fil+ Metrics</span>
        </Link>
      </nav>

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
