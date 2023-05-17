import { Outlet, NavLink } from "react-router-dom"
import logo from "../assets/fil-plus.svg"
import { BugIcon, CubeIcon, UserIcon } from "../icons"

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
  {
    name: "Bugs",
    to: "bugs",
    svg: <BugIcon />,
  },
]

function Root() {
  return (
    <section className="flex">
      <nav className="w-64 min-h-screen shadow-md fixed left-0 top-0">
        <NavLink to="/">
          <img
            src={logo}
            alt="logo"
            className="h-16 w-full cursor-pointer my-4"
          />
        </NavLink>

        <div className="flex flex-col">
          {navigationItems.map((item) => {
            return (
              <NavLink
                key={item.name}
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center w-full space-x-4 py-3 px-6 cursor-pointer ${
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
      </nav>

      <main className="bg-[#E7E7E7] flex-1 p-8 ml-64 min-h-screen">
        <div className="max-w-[1200px]">
          <Outlet />
        </div>
      </main>
    </section>
  )
}

export default Root
