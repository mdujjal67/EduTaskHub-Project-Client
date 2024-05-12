import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import CreateAssignment from "../pages/CreateAssignment";
import PendingAssignment from "../pages/PendingAssignment";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Assignment from "../pages/Assignment";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/login",
            element:<Login></Login>
        },
        {
            path:"/signUp",
            element:<SignUp></SignUp>
        },
        {
            path:"/assignment",
            element:<Assignment></Assignment>
        },
        {
            path:"/create-assignment",
            element: <CreateAssignment></CreateAssignment>
        },
        {
            path:"pending-assignment",
            element:<PendingAssignment></PendingAssignment>
        }
      ]
    },
  ]);

  export default router