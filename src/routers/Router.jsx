import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Register from "../auth/register";
import NavBar from "../NavBar";
import Login from '../auth/login';
import { Products } from "../dashboard/products";
import VerifyUser from "../auth/verify";

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
  },
  {
  path: "/login",
  element: (
    <div>
      <Login />
    </div>
  )
  },
  {
  path: "/verify/account",
  element: (
    <div>
      <VerifyUser />
    </div>
  )
  },
  {
  path: "/products",
  element: (
    <div>
      < NavBar />
      <Products />
    </div>
  )
  }
]);

export default router;
