import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Login from "../authentication/Login";
import Register from "../authentication/Register";
import Assignment from "../component/Assignment";
import PrivateRoute from "../authentication/PrivateRoute";
import PendingAssignment from "../component/PendingAssingment";
import HomePage from "../component/HomePage";
import CreateAssignments from "../component/CreateAssignments";
import AttemptedAssignments from "../component/AttemptedAssignments";
import ViewDetails from "../component/ViewDetails";
import UpdatePage from "../component/UpdatePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <div>hey error</div>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/assignments",
        element: <Assignment></Assignment>,
        // loader: () => fetch("https://assignment-11-theta-three.vercel.app/assignments"),
      },
      {
        path: "/pendingAssignments",
        element: (
          <PrivateRoute>
            <PendingAssignment></PendingAssignment>
          </PrivateRoute>
        ),
      },
      {
        path: "/createAssignments",
        element: (
          <PrivateRoute>
            <CreateAssignments></CreateAssignments>
          </PrivateRoute>
        ),
      },
      {
        path: "/attemptedAssignments",
        element: (
          <PrivateRoute>
            <AttemptedAssignments></AttemptedAssignments>
          </PrivateRoute>
        ),
      },
      {
        path: "/viewDetails/:id",
        element: (
          <PrivateRoute>
            <ViewDetails></ViewDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/updatePage/:id",
        element: (
          <PrivateRoute>
            <UpdatePage></UpdatePage>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
