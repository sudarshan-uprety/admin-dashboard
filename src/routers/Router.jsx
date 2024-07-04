import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import NavBar from "../Navbar";

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
]);

export default router;
