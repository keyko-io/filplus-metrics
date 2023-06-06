import { createHashRouter } from "react-router-dom";
import Root from "./Root";
import Blockchain from "./Blockchain";
import User from "./User";
import About from "./About";

export const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        element: <Blockchain />,
        index: true
      },
      {
        path: "user",
        element: <User />
      }
    ]
  },
  {
    path: "/about",
    element: <About />
  }
]);
