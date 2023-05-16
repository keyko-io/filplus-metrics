import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./index.css"
import Bugs from "./routes/Bugs"
import Root from "./routes/root"
import Blockchain from "./routes/Blockchain"
import User from "./routes/User"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        element: <Blockchain />,
        index: true,
      },
      {
        path: "user",
        element: <User />,
      },
      {
        path: "bugs",
        element: <Bugs />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
