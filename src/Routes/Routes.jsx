import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/SignUp/Signup";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import DashboardLayout from "../Layout/DashboardLayout";


export const Routes = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        children: [
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'login',
                element:<Login/>,
            },
            {
                path:'signup',
                element:<Signup/>,
            },
        ]
    },
    {
        path:'dashboard',
        element:<PrivateRoute><DashboardLayout/></PrivateRoute>
    }
])
