import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import NotFound from "./components/NotFound";
import MainScreen from "./components/MainScreen";
import MonumentScreen from "./components/MonumentScreen";

// ----------------------------------------------------------------------

const Router = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <MainScreen />,
      children: [
        {
          path: "/:name",
          element: <MonumentScreen />,
        },
      ],
    },
    {
      children: [
        { path: "404", element: <NotFound /> },
        { path: "*", element: <Navigate to="/404" /> },
      ],
    },
    {
      path: "*",
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
};

export default React.memo(Router);
