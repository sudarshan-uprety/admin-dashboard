import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Register from "../auth/register";
import NavBar from "../NavBar";
import Login from "../auth/login";
import VerifyUser from "../auth/verify";
import Dashboard from "../dashboard";
import Products from "../products/Products";
import ProductDetails from "../products/ProductDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        index: true,
        element: <Products />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <ProductDetails />,
      },
    ],
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
    ),
  },
  {
    path: "/login",
    element: (
      <div>
        <Login />
      </div>
    ),
  },
  {
    path: "/verify/account",
    element: (
      <div>
        <VerifyUser />
      </div>
    ),
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/products/:id",
    element: <Products />,
  },
]);

export default router;
