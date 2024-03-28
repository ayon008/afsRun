// Router
import { createBrowserRouter } from "react-router-dom"
import Home from "../Pages/Home";
import Layout from "../Layout/Layout";
import Discover from "../Pages/Discover";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'discover',
                element: <Discover></Discover>
            }
        ]
    },
]);

export default router;