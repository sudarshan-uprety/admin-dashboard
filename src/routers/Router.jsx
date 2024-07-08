import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Register from "../auth/register";
import NavBar from "../NavBar";
import Login from '../auth/login';
import VerifyUser from "../auth/verify";
import Dashboard from "../dashboard";
import Products from "../products/Products";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Dashboard />
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
      <Products />
  ),
  }
]);

export default router;
