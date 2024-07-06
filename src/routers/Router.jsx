import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Register from "../auth/register";
import NavBar from "../NavBar";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <NavBar />
      </div>
    ),
  },
  {
    path: "about",
    element: (
      <div>
        <h1></h1>
        <NavBar />
      </div>
    ),
    children: [
      {
        path: "test",
        element: <h1></h1>,
      },
    ],
  },
  {
    path: "/register",
    element: (
      <div>
        <Register />
      </div>
    )
  }
]);

export default router;
