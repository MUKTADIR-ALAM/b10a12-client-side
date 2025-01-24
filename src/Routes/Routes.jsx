import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/SignUp/Signup";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../Layout/DashboardLayout";
import EditBiodata from "../Pages/Dashboard/Users/Edit Biodata/EditBiodata";
import Biodatas from "../Pages/Biodatas/Biodatas";
import BiodataDetails from "../Pages/Biodatas/BiodataDetails";
import ViewBiodata from "../Pages/Dashboard/Users/ViewBiodata/ViewBiodata";
import ContactRequest from "../Pages/Dashboard/Users/ContactRequest/ContactRequest";
import FavouritesBiodata from "../Pages/Dashboard/Users/FavouritesBiodata/FavouritesBiodata";
import AdminDashboard from "../Pages/Dashboard/Admin/AdminDashboard/AdminDashboard";
import ManageUsers from "../Pages/Dashboard/Admin/ManageUsers/ManageUsers";
import ApprovedPremium from "../Pages/Dashboard/Admin/ApprovedPremium/ApprovedPremium";
import ApprovedContactRequest from "../Pages/Dashboard/Admin/ApprovedContactRequest/ApprovedContactRequest";

export const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "biodatas",
        element: <Biodatas />,
      },
      {
        path: "biodataDetails/:id",
        element: <BiodataDetails />,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
        // users
      {
        path: "edit-biodata",
        element: <EditBiodata />,
      },
      {
        path: "viewBiodata",
        element: <ViewBiodata />,
      },
      {
        path: "contactRequest",
        element: <ContactRequest />,
      },
      {
        path: "favouritesBiodata",
        element: <FavouritesBiodata />,
      },
        //  admin

      {
        path: 'adminDashboard',
        element: <AdminDashboard/>
      },
      {
        path: 'manageUsers',
        element: <ManageUsers/>
      },
      {
        path: 'approvedPremium',
        element: <ApprovedPremium/>
      },
      {
        path: 'approvedContactRequest',
        element: <ApprovedContactRequest/>
      },
    ],
  },
]);
