import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import CreateAssignment from "../pages/CreateAssignment";
import PendingAssignment from "../pages/PendingAssignment";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Assignments from "../pages/Assignments";
import NotFoundPage from "../pages/NotFoundPage";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:"/",
            element:<Home></Home>,
            loader: () => fetch(`${import.meta.env.VITE_API_URL}/features`)
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
            element:<Assignments></Assignments>,
            loader: () => fetch(`${import.meta.env.VITE_API_URL}/createdAssignments`)
        },
        {
            path:"/create-assignment",
            element: <PrivateRoutes>
                <CreateAssignment></CreateAssignment>
            </PrivateRoutes>,
            loader: () => fetch(`${import.meta.env.VITE_API_URL}/createdAssignments`)
        },
        {
            path:"pending-assignment",
            element:<PendingAssignment></PendingAssignment>
        },
        {
            path: "*",
            element:<NotFoundPage></NotFoundPage>
        }
      ]
    },
  ]);

  export default router