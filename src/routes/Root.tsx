import { Outlet, Link } from "react-router-dom"
import logo from "../assets/fil-plus.svg"
import blockchain from "../assets/blockchain.svg"
import bug from "../assets/bug.svg"
import user from "../assets/user.svg"

const navigationItems = [
  {
    name: "Blockchain",
    to: "",
    svg: blockchain,
  },
  {
    name: "User",
    to: "user",
    svg: user,
  },
  {
    name: "Bugs",
    to: "bugs",
    svg: bug,
  },
]

function Root() {
  return (
    <section className="flex">
      <nav className="w-64 min-h-screen shadow-md">
        <img
          src={logo}
          alt="logo"
          className="h-16 w-full cursor-pointer my-4"
        />
        <div className="flex flex-col px-6">
          {navigationItems.map((item) => {
            return (
              <Link
                to={item.to}
                className="flex h-6 items-center w-full space-x-4 py-6 cursor-pointer"
              >
                <img src={item.svg} alt="blockchain" className="h-6" />
                <span>{item.name}</span>
              </Link>
            )
          })}
        </div>
      </nav>

      <main className="bg-[#E7E7E7] flex-1">
        <Outlet />
      </main>
    </section>
  )
}

export default Root
