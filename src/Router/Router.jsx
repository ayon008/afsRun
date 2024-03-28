// Router
import { createBrowserRouter } from "react-router-dom"
import Home from "../Pages/Home";
import Layout from "../Layout/Layout";
import Discover from "../Pages/Discover";
import SignIn from "../Pages/SignIn";
import SignUpLayout from "../Layout/SignUpLayout";
import SignUpWithGoogle from "../Pages/SignUp/SignUpWithGoogle";
import SignUpForm from "../Pages/SignUp/SignUpForm";

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
    {
        path: 'signup',
        element: <SignUpLayout></SignUpLayout>,
        children: [
            {
                path: '/signup',
                element: <SignUpWithGoogle></SignUpWithGoogle>
            },
            {
                path: 'signUpForm',
                element: <SignUpForm></SignUpForm>
            }
        ]
    },
    {
        path: 'login',
        element: <SignIn></SignIn>
    },
]);

export default router;