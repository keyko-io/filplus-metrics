import { createHashRouter } from "react-router-dom";
import Root from "./Root";
import Blockchain from "./Blockchain";
import User from "./User";
import About from "./About";
import Bugs from "./Bugs";
import Status from "./Status";

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
      },
      {
        path: "bugs",
        element: <Bugs />
      },
      {
        path: "status",
        element: <Status />
      }
    ]
  },
  {
    path: "/about",
    element: <About />
  }
]);
