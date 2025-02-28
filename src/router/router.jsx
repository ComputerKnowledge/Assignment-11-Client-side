import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div> not hello world </div>,
    errorElement: <div> hey error </div>,
    children: [
      {
        path: "/",
        element: <div>hello the new way of routing</div>,
      },
      {
        path: "/userttt",
        element: <h3>hello form user</h3>,
      },
    ],
  },
]);

export default router;
