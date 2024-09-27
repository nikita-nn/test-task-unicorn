import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { NavBar } from "./components/NavBar.tsx";
import React from "react";

const MainPage = React.lazy(() => import("./views/pages/MainPageView.tsx"));

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <NavBar />
          <Outlet />
        </>
      ),
      children: [{ path: "/", element: <MainPage /> }],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
