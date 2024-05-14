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
import UpdateAssignments from "../pages/UpdateAssignments";
import ViewAssignment from "../pages/ViewAssignment";
import TakeAssignment from "../pages/TakeAssignment";
import UserProfile from "../pages/UserProfile";
import UpdateProfile from "../pages/UpdateProfile";
import MySubmission from "../pages/MySubmission";

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
            path:"/update-assignment/:id",
            element: <PrivateRoutes>
                <UpdateAssignments></UpdateAssignments>
            </PrivateRoutes>,
            loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/createdAssignments/${params.id}`)
        },
        {
            path:"/view-assignment/:id",
            element:<PrivateRoutes>
                <ViewAssignment></ViewAssignment>
            </PrivateRoutes>,
            loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/createdAssignments/${params.id}`)
        },
        {
            path:"/take-assignment/:id",
            element:<PrivateRoutes>
                <TakeAssignment></TakeAssignment>
            </PrivateRoutes>,
            loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/createdAssignments/${params.id}`)
        },
        {
            path:"/my-submission",
            element: <PrivateRoutes>
                <MySubmission></MySubmission>
            </PrivateRoutes>,
            loader: () => fetch(`${import.meta.env.VITE_API_URL}/submittedAssignments`)
        },
        {
            path:"/user-profile",
            element:<PrivateRoutes>
                <UserProfile></UserProfile>
            </PrivateRoutes>
        },
        {
            path:"update-profile",
            element:<PrivateRoutes>
                <UpdateProfile></UpdateProfile>
            </PrivateRoutes>
        },
        {
            path:"/pending-assignment",
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