import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { NavBar } from "./components/NavBar.tsx";
import React from "react";
import { AppProviders } from "./providers/AppProviders.tsx";

const MainPage = React.lazy(() => import("./views/pages/MainPageView.tsx"));
const ClientAreaPage = React.lazy(
  () => import("./views/pages/ClientAreaView.tsx"),
);

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <AppProviders>
          <NavBar />
          <Outlet />
        </AppProviders>
      ),
      children: [
        { path: "/", element: <MainPage /> },
        { path: "/clientarea", element: <ClientAreaPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
