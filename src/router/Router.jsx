import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import NavBar from "../Navbar";

const router = [
    {
        path: "/",
        element: <NavBar />,
        children: [
            {
                index: true,
                element: <h1>HELLO JIII</h1>
            },
            {
                path: '/ok',
                element: <div className="bg-red-400 h-screen w-screen z-50">HELLO JIII</div>
            }
        ]
    },
];

export default router