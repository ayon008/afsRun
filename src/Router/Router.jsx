// Router
import { createBrowserRouter } from "react-router-dom"
import Home from "../Pages/Home";
import Layout from "../Layout/Layout";
import Discover from "../Pages/Discover";
import SignIn from "../Pages/SignIn";
import SignUpLayout from "../Layout/SignUpLayout";
import SignUpWithGoogle from "../Pages/SignUp/SignUpWithGoogle";
import SignUpForm from "../Pages/SignUp/SignUpForm";
import SignUpUserDetails from "../Pages/SignUp/SignUpUserDetails";
import UserLayout from "../Layout/UserLayout";
import UserInfo from "../Pages/UserInfo/UserInfo";
import RunsResult from "../Pages/UserInfo/RunsResult";
import ApprovedRuns from "../Pages/UserInfo/ApprovedRuns";
import RunMap from "../Pages/RunMap";

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
            },
            {
                path: 'allRuns',
                element: <RunMap></RunMap>
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
            },
            {
                path: 'userDetails',
                element: <SignUpUserDetails></SignUpUserDetails>
            },
        ]
    },
    {
        path: 'login',
        element: <SignIn></SignIn>
    },
    {
        path: 'userInformation',
        element: <UserLayout></UserLayout>,
        children: [
            {
                path: '/userInformation',
                element: <UserInfo></UserInfo>
            },
            {
                path: 'runsResults',
                element: <RunsResult></RunsResult>,
            }
        ]
    },
]);

export default router;