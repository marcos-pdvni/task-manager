import React from "react";

import Root from "./pages/Root";
import Home from "./pages/Home";
import Completes from "./pages/Completes";
import Deletes from "./pages/Deletes";
import Ending from "./pages/Ending";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "", element: <Home /> },
      { path: "tasks-completed", element: <Completes /> },
      { path: "tasks-deleted", element: <Deletes /> },
      { path: "tasks-ending", element: <Ending /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
