import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import NavBar from "../Navbar";

const router = createBrowserRouter([
    {
        path: "/",
        element: <NavBar />,
    },
]);

export default router