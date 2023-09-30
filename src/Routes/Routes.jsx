import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Secret from "../Pages/Shared/Secret/Secret";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../Pages/Dashboard/MyCart/MyCart";
import Payment from "../Pages/Dashboard/Payment/Payment";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";

 export  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
        },
        {
            path: 'menu',
            element: <Menu></Menu>,
        },
        {
            path: 'order/:category',
            element: <Order></Order>,
        },
        {
          path: 'login',
          element: <Login></Login> 
        },
        {
          path: 'SignUp',
          element: <SignUp></SignUp>
        },
        {
          path: 'secret',
          element:<PrivateRoute><Secret></Secret></PrivateRoute>
        },
      
      ]
    },
    {
      path: 'dashboard',
      element: <Dashboard></Dashboard>, 
      children: [
        {
          path: 'mycart', 
          element: <MyCart></MyCart>,
        },
        {
          path: 'payment', 
          element: <Payment></Payment>
        },
        {
          path: 'allusers', 
          element: <AllUsers></AllUsers>
        },
      ]
    }
  ]);