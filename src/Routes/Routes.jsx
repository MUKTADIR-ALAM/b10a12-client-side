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
import Payment from "../Pages/Dashboard/Payment/Payment";
import ErrorPage from "../Pages/Error/ErrorPage";
import GotMarried from "../Pages/Dashboard/Users/GotMarried/GotMarried";
import AdminRoute from "./AdminRoute";
import ContactUs from "../Pages/ContactUs";

export const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
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
        path:'/contactUs',
        element: <ContactUs/>
      },
      {
        path: "biodatas",
        element: <Biodatas />,
      },
      {
        path: "biodataDetails/:id",
        element: (
          <PrivateRoute>
            <BiodataDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "payment/:id",
        element: <Payment />,
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
      {
        path: "gotMarried",
        element: <GotMarried />,
      },
      //  admin

      {
        path: "adminDashboard",
        element: (
          <AdminRoute>
            <AdminDashboard />
          </AdminRoute>
        ),
      },
      {
        path: "manageUsers",
        element: (
          <AdminRoute>
            <ManageUsers />
          </AdminRoute>
        ),
      },
      {
        path: "approvedPremium",
        element: (
          <AdminRoute>
            <ApprovedPremium />
          </AdminRoute>
        ),
      },
      {
        path: "approvedContactRequest",
        element: (
          <AdminRoute>
            <ApprovedContactRequest />
          </AdminRoute>
        ),
      },
    ],
  },
]);
