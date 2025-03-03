import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <div>hey error</div>,
    children: [
      {
        path: "/home",
        element: <h1>hello the new way of routing</h1>,
      },
    ],
  },
]);

export default router;
