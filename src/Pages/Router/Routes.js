import { createBrowserRouter } from "react-router-dom";
import Appointment from "../Appointment/Appointment";
import AddDoctor from "../Dashboard/AddDoctor";
import AllUsers from "../Dashboard/AllUsers";
import ManageDoctor from "../Dashboard/ManageDoctor";
import MyAppointment from "../Dashboard/MyAppointment";
import Payment from "../Dashboard/Payment";
import Home from "../Home/Home";
import Login from "../Login/Login";
import DisplayError from "../Shared/DisplayError";
import SignUp from "../SignUp/SignUp";
import AdminRoute from "./AdminRoute";
import DashboardRoot from "./DashboardRoot";
import PrivateRoute from "./PrivateRoute";
import Root from "./Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <DisplayError/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/appointment",
        element: <Appointment />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardRoot />
      </PrivateRoute>
    ),
    errorElement: <DisplayError/>,
    children: [
      {
        path: "/dashboard",
        element: <MyAppointment />,
      },
      {
        path: "/dashboard/allUsers",
        element: <AdminRoute><AllUsers /></AdminRoute>,
      },
      {
        path: "/dashboard/addDoctor",
        element: <AdminRoute><AddDoctor/></AdminRoute>,
      },
      {
        path: "/dashboard/manageDoctor",
        element: <AdminRoute><ManageDoctor/></AdminRoute>,
      },
      {
        path: "/dashboard/payment/:id",
        element: <AdminRoute><Payment/></AdminRoute>,
        loader:({params}) => fetch(`http://localhost:5000/bookings/${params.id}`)
      },
    ],
  },
]);

export default router;
