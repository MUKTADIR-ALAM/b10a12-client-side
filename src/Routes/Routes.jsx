import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/SignUp/Signup";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../Layout/DashboardLayout";
import EditBiodata from "../Pages/Dashboard/Edit Biodata/EditBiodata";
import Biodatas from "../Pages/Biodatas/Biodatas";
import BiodataDetails from "../Pages/Biodatas/BiodataDetails";


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
            {
                path:'biodatas',
                element:<Biodatas/>,
            },
            {
                path:'biodataDetails/:id',
                element:<BiodataDetails/>,
            },
        ]
    },
    {
        path:'dashboard',
        element:<PrivateRoute><DashboardLayout/></PrivateRoute>,
        children:[
            {
                path:'edit-biodata',
                element:<EditBiodata/>,
            },
        ]
    }
])
